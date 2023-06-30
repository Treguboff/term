import { view } from "../MVC/View.js";
import { model } from '../MVC/Model.js';
import { kineticscroll } from '../etc/kineticscroll.js';
import { inactivityTime } from '../etc/inactivityTime.js'

// библиотека оплат по qr
import { App } from '../logic/payment/payQR2.js'

export var controller = {
    // Start pages
    //MENU
    async menu_init() {

        // обработчик ожидания
        inactivityTime();

        let objClient = controller.getClientFromLocalStorage();
        try {
            // получить данные из 1С
            let objDebt = await model.getDebt();
            let objMemberships = await model.getMemberships();
            let objDeposits = await model.getDeposits();
            let objBonuses = await model.getBonuses();
            let objTrainings = await model.getTrainings();
            // отобразить
            view.render_MenuPage_Client(objClient);
            view.render_MenuPage_Debt(objDebt);
            view.render_MenuPage_Memberships(objMemberships);
            view.render_MenuPage_Deposits(objDeposits);
            view.render_MenuPage_Bonuses(objBonuses);
            view.render_MenuPage_Trainings(objTrainings);
            // подключаем прокрутку
            let target = document.querySelector(".container > ul");
            let box = parseInt(getComputedStyle(target.parentNode).height, 10);
            let list = parseInt(getComputedStyle(target).height, 10);
            if (list > box) {
                kineticscroll(target, { indicator: 'indic', snap: true });
            }
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 0,
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка получения данных меню',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            let form = view.render_Msg(false, 'Ошибка получения данных меню', err, _err);
        }
    },
    //DEBT
    async debt_init() {

        // обработчик ожидания
        inactivityTime();

        let objClient = controller.getClientFromLocalStorage();
        try {
            // получаем детальную задолженность из 1С
            let objDebt = await model.getDebt();
            // отображаем на странице
            view.render_DebtPage_Debt(objDebt);

            // подключаем прокрутку
            let target = document.querySelector(".container2 > ul");

            let box = parseInt(getComputedStyle(target.parentNode).height, 10);
            let list = parseInt(getComputedStyle(target).height, 10);
            if (list > box) {
                kineticscroll(target, { indicator: 'indic', snap: true });
            }

        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 0,
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка получения данных задолженности',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            let form = view.render_Msg(false, 'Ошибка получения данных задолженности', err, _err);
        }
    },
    //DEPOSIT
    async deposit_init() {

        let objClient = controller.getClientFromLocalStorage();
        try {
            // обработчик ожидания
            inactivityTime();

            // получить тек лицевой счет
            let data = controller.getDepositFromLocalStorage();
            // отобразить на странице
            view.render_DepositPage_Deposit(data);

        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 0,
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка определения лицевого счета',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            let form = view.render_Msg(false, 'Ошибка определения лицевого счета', err, _err);
        }


    },

    // SHOP
    async catalog_init() {
        // обработчик ожидания
        inactivityTime();
        let objClient = controller.getClientFromLocalStorage();
        try {
            let objCatalog = await model.getCatalog();
            view.render_CatalogPage(objCatalog);
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 0,
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка получения данных магазина',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            let form = view.render_Msg(false, 'Ошибка получения данных магазина', err, _err);
        }
    },

    // CART Корзина товаров для финальной оплаты
    async cart_init() {
        // обработчик ожидания
        inactivityTime();
        let objClient = controller.getClientFromLocalStorage();
        try {
            view.render_CartPage();
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 0,
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка получения данных корзины магазина',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            let form = view.render_Msg(false, 'Ошибка получения данных корзины магазина', err, _err);
        }
    },

    // Algorithm buisness logics
    // АЛГОРИТМ ОПЛАТЫ ПО QR-КОДУ
    async pay_qr_algorytm() {
        let objClient = controller.getClientFromLocalStorage();
        try {
            // 0. получаем все позиции на оплату
            let dataForPay = view.getDataDebtForPay();
            if (dataForPay.amount > 0) {
                // 1. сформируем qr код
                let res = await model.get_QR_pay_link(dataForPay);
                // 2. отображаем qr на экран или показываем ошибку
                if (res.result) {
                    let formQR = view.render_ViewPayment('qr', res);

                    // 3. Начинаем ожидание статуса оплаты
                    // создаем экземпляр контроллера

                    const controller = new TimeoutAbortController(120000); // 2min
                    //const controller = new AbortController();
                    const signal = controller.signal;

                    let abortBtn = document.getElementById('paymentModalClose');
                    abortBtn.addEventListener(
                        'click',
                        () => {
                            // прерываем запрос
                            controller.abort()
                        },
                        { once: true }
                    )

                    let resStatusQR = await model.get_QR_pay_status(res.order_1c, signal);

                    formQR.hide();

                    if (resStatusQR.result) {
                        // логирование
                        let _err = {
                            'date': new Date(),
                            'operation': 1, // qr debt pay
                            'userId': objClient.id,
                            'flagErr': false,
                            'amount': dataForPay.amount,
                            'msg1': 'Оплата задолженности по QR успешно проведена',
                            'msg2': res.order_1c
                        };
                        // логирование
                        view.render_FormResult(resStatusQR.result, resStatusQR.error, _err);
                    }
                    else {
                        // причина отмены
                        let msgError = resStatusQR.error;
                        // отмена ссылки QR
                        let resCancelPayQR = await model.get_QR_pay_calcel(res.order_1c);
                        if (resCancelPayQR.ВыполненоУспешно) {
                            // логирование
                            let _err = {
                                'date': new Date(),
                                'operation': 1, // qr debt pay
                                'userId': objClient.id,
                                'flagErr': false,
                                'amount': dataForPay.amount,
                                'msg1': 'Оплата успешно отменена',
                                'msg2': res.order_1c
                            };
                            view.render_Msg(false, 'Оплата успешно отменена', msgError, _err);
                        }
                        else {
                            // логирование
                            let _err = {
                                'date': new Date(),
                                'operation': 1, // qr debt pay
                                'userId': objClient.id,
                                'flagErr': true,
                                'amount': dataForPay.amount,
                                'msg1': msgError,
                                'msg2': resCancelPayQR.ОписаниеОшибки
                            };
                            view.render_Msg(false, msgError, resCancelPayQR.ОписаниеОшибки, _err);
                        }
                    }
                }
                // ошибка получения ссылки
                else {
                    // логирование
                    let _err = {
                        'date': new Date(),
                        'operation': 1, // qr debt pay
                        'userId': objClient.id,
                        'flagErr': true,
                        'amount': dataForPay.amount,
                        'msg1': 'Ошибка при получении QR ссылки СБЕРБАНКа',
                        'msg2': ''
                    };
                    // логирование
                    view.render_FormResult(false, 'Ошибка при получении QR ссылки СБЕРБАНКа', _err);
                }
            }
            else {
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 1, // qr debt pay
                    'userId': objClient.id,
                    'flagErr': true,
                    'amount': dataForPay.amount,
                    'msg1': 'Не выбраны позиции для оплаты',
                    'msg2': ''
                };
                // логирование
                view.render_FormResult(false, 'Не выбраны позиции для оплаты.', _err);
            }
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 1, // qr debt pay
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка функции pay_qr_algorytm',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            view.render_FormResult(false, err, _err);
        }
    },
    // АЛГОРИТМ ОПЛАТЫ ПО КАРТАМ СБЕРБАНКА
    async pay_card_algorytm() {
        let objClient = controller.getClientFromLocalStorage();
        try {
            // 0. получаем все позиции на оплату
            let dataForPay = view.getDataDebtForPay();
            if (dataForPay.amount > 0) {
                // 1. отображаем окно оплаты картой
                let formPayCart = view.render_ViewPayment('card');

                // добавляем ожидание для показа формы
                setTimeout(async () => {
                    // 2. начинаем ожидание оплаты картой
                    let resStatusPayPos = await model.get_POS_pay_debt(dataForPay);
                    formPayCart.hide();
                    // логирование
                    let _err = {
                        'date': new Date(),
                        'operation': 2, // card debt pay
                        'userId': objClient.id,
                        'flagErr': resStatusPayPos.result ? false : true,
                        'amount': dataForPay.amount,
                        'msg1': resStatusPayPos.error,
                        'msg2': ''
                    };
                    // логирование
                    view.render_FormResult(resStatusPayPos.result, resStatusPayPos.error, _err);
                }, 1000);

            }
            else {
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 2, // card debt pay
                    'userId': objClient.id,
                    'flagErr': true,
                    'amount': dataForPay.amount,
                    'msg1': 'Не выбраны позиции для оплаты.',
                    'msg2': ''
                };
                // логирование
                view.render_FormResult(false, 'Не выбраны позиции для оплаты.', _err);
            }
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 2, // card debt pay
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка функции pay_card_algorytm',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            view.render_FormResult(false, err, _err);
        }
    },
    // АЛГОРИТМ ОПЛАТЫ ЛИЦЕВЫМ СЧЕТОМ
    async pay_deposit_algorytm() {
        let objClient = controller.getClientFromLocalStorage();
        try {
            // 0. получаем все позиции на оплату
            let dataForPay = view.getDataDebtForPay();
            if (dataForPay.amount > 0) {
                // 1. отображаем окно оплаты картой
                let formPayCart = view.render_ViewPayment('deposit');
                // 2. начинаем ожидание оплаты картой
                let resStatusPayDeposit = await model.get_deposit_pay_debt(dataForPay);
                formPayCart.hide();
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 3, // deposit debt pay
                    'userId': objClient.id,
                    'flagErr': resStatusPayDeposit.result ? false : true,
                    'amount': dataForPay.amount,
                    'msg1': resStatusPayDeposit.error,
                    'msg2': ''
                };
                // логирование
                view.render_FormResult(resStatusPayDeposit.result, resStatusPayDeposit.error, _err);
            }
            else {
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 3, // deposit debt pay
                    'userId': objClient.id,
                    'flagErr': true,
                    'amount': dataForPay.amount,
                    'msg1': 'Не выбраны позиции для оплаты.',
                    'msg2': ''
                };
                // логирование
                view.render_FormResult(false, 'Не выбраны позиции для оплаты.', _err);
            }
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 3, // deposit debt pay
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка функции pay_deposit_algorytm',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            view.render_FormResult(false, err, _err);
        }
    },
    // АЛГОРИТМ ПОПОЛНЕНИЯ ДЕПОЗИТА ПО QR-КОДУ
    async deposit_add_qr_algorytm() {
        let objClient = controller.getClientFromLocalStorage();
        try {
            // 0. получаем данные для оплаты QR кодом
            let sum = document.getElementById("demoA").value;
            let data_ = {
                user_id: controller.getUserFromLocalSrorage().id,
                deposit_id: controller.getDepositFromLocalStorage().id,
                amount: sum
            };
            // 1. сформируем qr код
            let res = await model.get_QR_inc_deposit(data_);
            // 2. отображаем qr на экран или показываем ошибку
            if (res.result) {
                let formQR = view.render_ViewPayment('qr', res);
                // 3. Начинаем ожидание статуса оплаты
                // создаем экземпляр контроллера
                const controller = new TimeoutAbortController(120000); //2 мин
                //const controller = new AbortController();
                const signal = controller.signal;
                let abortBtn = document.getElementById('paymentModalClose');
                abortBtn.addEventListener(
                    'click',
                    () => {
                        // прерываем запрос
                        controller.abort()
                    },
                    { once: true }
                )
                let resStatusQR = await model.get_QR_pay_status(res.order_1c, signal);
                formQR.hide();
                if (resStatusQR.result) {
                    // логирование
                    let _err = {
                        'date': new Date(),
                        'operation': 4, // deposit add qr pay
                        'userId': objClient.id,
                        'flagErr': resStatusQR.result ? false : true,
                        'amount': sum,
                        'msg1': resStatusQR.error,
                        'msg2': ''
                    };
                    // логирование
                    view.render_FormResult(resStatusQR.result, resStatusQR.error, _err);
                }
                else {
                    // причина отмены
                    let msgError = resStatusQR.error;
                    // отмена ссылки QR
                    let resCancelPayQR = await model.get_QR_pay_calcel(res.order_1c);
                    if (resCancelPayQR.ВыполненоУспешно) {
                        // логирование
                        let _err = {
                            'date': new Date(),
                            'operation': 4, // deposit add qr pay
                            'userId': objClient.id,
                            'flagErr': false,
                            'amount': sum,
                            'msg1': 'Оплата успешно отменена',
                            'msg2': ''
                        };
                        // логирование
                        //view.render_FormResult(false, 'Оплата успешно отменена', _err);
                        view.render_Msg(false, 'Оплата успешно отменена', msgError, _err);
                    }
                    else {
                        // логирование
                        let _err = {
                            'date': new Date(),
                            'operation': 4, // deposit add qr pay
                            'userId': objClient.id,
                            'flagErr': true,
                            'amount': sum,
                            'msg1': resCancelPayQR.ОписаниеОшибки,
                            'msg2': ''
                        };
                        // логирование
                        //view.render_FormResult(false, resCancelPayQR.ОписаниеОшибки, _err);
                        view.render_Msg(false, msgError, resCancelPayQR.ОписаниеОшибки, _err);
                    }
                }
            }
            // ошибка получения ссылки
            else {
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 4, // deposit add qr pay
                    'userId': objClient.id,
                    'flagErr': true,
                    'amount': sum,
                    'msg1': 'Ошибка при получении QR ссылки СБЕРБАНКа',
                    'msg2': ''
                };
                // логирование    
                view.render_FormResult(false, 'Ошибка при получении QR ссылки СБЕРБАНКа', _err);
            }
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 4, // deposit add qr pay
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка функции deposit_add_qr_algorytm',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            view.render_FormResult(false, err, _err);
        }
    },
    // АЛГОРИТМ ПОПОЛНЕНИЯ ДЕПОЗИТА ПО КАРТАМ СБЕРБАНКА
    async deposit_add_card_algorytm() {
        let objClient = controller.getClientFromLocalStorage();
        try {
            // 0. получаем сумму на оплату
            let sum = document.getElementById("demoA").value;
            let data_ = {
                user_id: controller.getUserFromLocalSrorage().id,
                deposit_id: controller.getDepositFromLocalStorage().id,
                amount: sum
            };
            // 1. отображаем окно оплаты картой
            let formPayCart = view.render_ViewPayment('card');

            // добавляем ожидание для показа формы
            setTimeout(async () => {
                // 2. начинаем ожидание оплаты картой
                let resStatusPayPos = await model.get_POS_inc_deposit(data_);
                formPayCart.hide();
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 5, // deposit add card pay
                    'userId': objClient.id,
                    'flagErr': resStatusPayPos.result ? false : true,
                    'amount': sum,
                    'msg1': resStatusPayPos.error,
                    'msg2': ''
                };
                // логирование
                view.render_FormResult(resStatusPayPos.result, resStatusPayPos.error, _err);
            }, 1000);
        }
        catch (err) {
            // логирование
            let _err = {
                'date': new Date(),
                'operation': 5, // deposit add card pay
                'userId': objClient.id,
                'flagErr': true,
                'amount': 0,
                'msg1': 'Ошибка функции deposit_add_card_algorytm',
                'msg2': err.name + ": " + err.message
            };
            // логирование
            view.render_FormResult(false, err, _err);
        }
    },

    // получение данных localstorage
    getUserFromLocalSrorage() {
        let json_user_data = localStorage.getItem('User');
        let obj = JSON.parse(json_user_data);
        return obj;
    },

    getClientFromLocalStorage() {
        let json_info = localStorage.getItem('User');
        let obj = JSON.parse(json_info);
        return obj;
    },

    getDepositFromLocalStorage() {
        let obj = JSON.parse(localStorage.getItem('deposit_btn'));
        return obj;
    },

    // проведение расчетов
    format_date(data) {
        let f = new Date(data);
        let fff = f.toLocaleDateString()
        return fff;
    },

    _logReport(data) {
        model.saveLogOperation(data);
    },

    changeSizeKineticScroll(target) {
        let box = parseInt(getComputedStyle(target.parentNode).height, 10);
        let list = parseInt(getComputedStyle(target).height, 10);
        let indic = document.getElementById('indic');
        indic.style = 'transform: translateY(0px)';
        target.style = 'transform: translateY(0px)';
        if (list > box) {
            kineticscroll(target, { indicator: 'indic', snap: true });
        }
    },

    pay_cart(event) {

        //let d = document.getElementById(event.target.id);
        //console.log(d.innerHTML);

        let myModal = new bootstrap.Modal(document.getElementById('paySystem'), { backdrop: 'static' });

        let btn = document.getElementById('payment_cart');
        btn.onclick = (ev) => {

            //console.trace();
            var radios = document.getElementsByName("radio3");
            var selected = Array.from(radios).find(radio => radio.checked);
            console.log(selected.value);

            let user = controller.getClientFromLocalStorage();
            if (selected.value === 'qr') {

                App.pay_inc_deposit(user.id, '9-9-9-9', 10);

            }
            else {
                console.log('еще не реализовано...');

            }

        };
        myModal.show();
    }

}


class TimeoutAbortController extends AbortController {
    constructor(timeout) {
        super();
        setTimeout(() => {
            console.log('время ожидания истекло!')
            this.abort();
        }, timeout);
    }
}
