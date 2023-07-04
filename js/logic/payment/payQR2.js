class PayModel {
    constructor() { }
    async getLinkQR(data) {
        try {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        result: true,
                        url_pay: "https://qr.nspk.ru/AD10000K2NIL3MTG886RG8K5691KFRR8?type=02&bank=100000000111&sum=1500&cur=RUB&crc=F38C",
                        order_1c: "dfdhh",
                        amount: data.amount
                    };
                    resolve(obj);
                }, 1000);
            });
            return await promise;
        }
        catch (err) {
            throw new Error('Fitness: Ошибка getLinkQR, ' + err);
        }
    }

    async getPayStatusQR(order_1c, signal) {
        return await new Promise((resolve, reject) => {
            if (signal.aborted) {
                return reject(new DOMException('Operation aborted', 'AbortError'))
            }
            signal.addEventListener('abort', () => {
                reject(new DOMException('Operation aborted', 'AbortError'))
            })
            setTimeout(async () => {
                // получаем статус оплаты из Банка
                let res_ = await model._API_pay_QR_callback(order_1c);
                resolve(res_);
            }, 1000)
        })
            .then((value) => {
                //console.log('Promise resolved')
                return value;
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    //console.log('Promise aborted');
                    return { result: false, error: 'Promise aborted' }

                } else {
                    //console.error('Promise failed:', error);
                    return { result: false, error: error }
                }
            });
    }

    async _API_pay_QR_callback(order_1c) {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let res_ = {
                        result: true,
                        error: '',
                        //result: false,                        
                        //error: 'срок ссылки QR истек.'
                    };
                    // переведёт промис в состояние fulfilled с результатом "result"
                    resolve(res_);
                }, 5000);
            });
            return await promise;
        }
        else {
            let r_pay = await SendData('API_pay_QR_callback', order_1c, 1);
            let res_ = await JSON.parse(r_pay);
            return res_;
        }
    }


}

class PayView {
    constructor() {
    }

    renderformMessage(result, msg1, msg2) {
        try {
            let myModal = new bootstrap.Modal(document.getElementById('viewMsg'),
                {
                    backdrop: 'static'
                }
            );
            if (result) {
                let resS = document.getElementById("successMsg");
                let resU = document.getElementById("unsuccessMsg");
                resS.style.display = "block";
                resU.style.display = "none";
                document.getElementById('msg1s').innerText = msg1;
                document.getElementById('msg2s').innerText = msg2;
            }
            else {
                let resS = document.getElementById("successMsg");
                let resU = document.getElementById("unsuccessMsg");
                resS.style.display = "none";
                resU.style.display = "block";
                document.getElementById('msg1u').innerText = msg1;
                document.getElementById('msg2u').innerText = msg2;
            }
            myModal.show();
            return myModal;
        }
        catch (err) {
            throw new Error('Fitness: Ошибка отображения message, ' + err);
        }
    }

    renderformPayQR(data) {
        try {
            let myModal = new bootstrap.Modal(document.getElementById('paymentModal'),
                {
                    backdrop: 'static'
                }
            );
            // сумма к оплате
            document.getElementById("total_pay").value = data.amount;
            // способ оплаты
            let pay_method1 = document.getElementById("m_qr");
            let pay_method2 = document.getElementById("m_card");
            let pay_method3 = document.getElementById("m_deposit");

            let qr_code = document.querySelector(".qr");
            qr_code.innerHTML = "";
            const size = 300;
            new QRCode(qr_code, {
                text: data.url_pay,
                width: size,
                height: size,
                colorDark: "#232323",
                colorLight: "#eaedf3"
            });
            pay_method1.style.display = 'block';
            pay_method2.style.display = 'none';
            pay_method3.style.display = 'none';

            myModal.show();
            return myModal;
        }
        catch (err) {
            throw new Error('Fitness: Ошибка отображения QR, ' + err);
        }
    }

}

class PayController {
    constructor(payView, payModel) {
        this.payView = payView;
        this.payModel = payModel;
        this.allForm = [];
    }

    async pay_inc_deposit(userId, depositId, amount) {
        try {
            let data = {
                user_id: userId,
                deposit_id: depositId,
                amount: amount
            };

            console.log(data.amount)

            // 1.сформируем qr код
            let res = await this.payModel.getLinkQR(data);

            if (res.result) {

                // 2.отобразим QR код для оплаты
                const form = this.payView.renderformPayQR(res);
                const formId = crypto.randomUUID();

                // зарегистрируем форму
                this.allForm.push({
                    form: form,
                    formId: formId,
                    timer: setInterval(() => this._tick(formId), 1000),
                    secs: 120,
                    //
                    fn: this.btn_calcel
                });

                // дополнительно назначим выход в меню
                let btn = document.getElementById('btnFormPaymentClose');
                btn.addEventListener('click', () => {
                    let s = this.allForm.find(el => el.formId === formId);
                    if (s != undefined) {
                        // остановим таймер
                        clearInterval(s.timer);
                        // удалим форму
                        let formIndex = this.allForm.indexOf(s);
                        this.allForm.splice(formIndex, 1);
                        // отмена ссылки на QR
                        this.btn_calcel(res.order_1c);
                    }
                });



                /*
                // 3.начинаем ожидание статуса оплаты
                model
                let resStatusQR = await model.get_QR_pay_status(res.order_1c, signal);
                console.log(resStatusQR);
                */


            }
            else {
                const form = this.showMessage(false, 'не удалось получить QR код', res.error);
                const formId = crypto.randomUUID();
                // зарегистрируем форму
                this.allForm.push({
                    form: form,
                    formId: formId,
                    timer: setInterval(() => this._tick(formId), 1000),
                    secs: 10
                });
                // дополнительно назначим выход в меню
                let btn = document.getElementById('btnFormMessageClose');
                btn.addEventListener('click', () => {
                    let s = this.allForm.find(el => el.formId === formId);
                    if (s != undefined) {
                        console.log('del')
                        clearInterval(s.timer);
                        // удалим форму
                        let formIndex = this.allForm.indexOf(s);
                        this.allForm.splice(formIndex, 1);
                    }
                });
            }
        }
        catch (err) {
            // произошла ошибочная ситуация - закроем все открытые окна компонента!
            this.allForm.forEach(el => {
                setTimeout(() => {
                    // закроем модальное окно
                    el.form.hide();
                    // остановим его таймер
                    clearInterval(el.timer);
                    // удалим форму
                    let formIndex = this.allForm.indexOf(el);
                    this.allForm.splice(formIndex, 1);
                }, 1000);

            })
            // выведем сообщение об ошибке
            const form = this.showMessage(false, 'pay_inc_deposit', err);
            const formId = crypto.randomUUID();
            // зарегистрируем форму
            this.allForm.push({
                form: form,
                formId: formId,
                timer: setInterval(() => this._tick(formId), 1000),
                secs: 10
            });
            // дополнительно назначим выход в меню
            let btn = document.getElementById('btnFormMessageClose');
            btn.addEventListener('click', () => {
                let s = this.allForm.find(el => el.formId === formId);
                if (s != undefined) {
                    console.log('del')
                    clearInterval(s.timer);
                    // удалим форму
                    let formIndex = this.allForm.indexOf(s);
                    this.allForm.splice(formIndex, 1);
                }
            });
        }
    }

    async pay_calcel(order_1c) {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let res = {
                        ВыполненоУспешно: true,
                        ОписаниеОшибки: ''
                    };
                    resolve(res);
                }, 1000);
            })
            return await promise;
        }
        else {
            let r = await SendData('QR_pay_calcel', order_1c, 1);
            let res = await JSON.parse(r);
            return res;
        }
    }

    // кнопка Отменить оплату.
    async btn_calcel(order_1c) {
        let res = await this.pay_calcel(order_1c);
        let msg1 = '', msg2 = '';
        if (res.ВыполненоУспешно) {
            msg1 = 'Отмена ссылки QR прошла успешно.';
        }
        else {
            msg1 = 'Не удалось отменить ссылку QR.';
            msg2 = res.ОписаниеОшибки;
        }
        const form = this.showMessage(false, msg1, msg2);
        const formId = crypto.randomUUID();
        // зарегистрируем форму
        this.allForm.push({
            form: form,
            formId: formId,
            timer: setInterval(() => this._tick(formId), 1000),
            secs: 10
        });
        // дополнительно назначим выход в меню
        let btn = document.getElementById('btnFormMessageClose');
        btn.addEventListener('click', () => {
            let s = this.allForm.find(el => el.formId === formId);
            if (s != undefined) {
                console.log('del')
                clearInterval(s.timer);
                // удалим форму
                let formIndex = this.allForm.indexOf(s);
                this.allForm.splice(formIndex, 1);
            }
        });
    }

    showMessage(result, msg1, msg2) {
        return this.payView.renderformMessage(result, msg1, msg2);
    }

    _tick(formId) {
        //ищем запись по тек форме
        let s = this.allForm.find(el => el.formId === formId);
        if (s != undefined) {
            if (s.secs <= 0) {

                clearInterval(s.timer);
                s.form.hide();

                // удалим форму
                let formIndex = this.allForm.indexOf(s);
                this.allForm.splice(formIndex, 1);

                //console.log(s.fn)


                //window.location.href = 'index.html';
            }
            else {
                s.form._element.querySelector('.msgTimer').innerHTML = 'До выхода осталось ' + (--s.secs) + ' секунд';
            }
        }
    }

}

var payModel = new PayModel();
var payView = new PayView();
export var App = new PayController(payView, payModel);