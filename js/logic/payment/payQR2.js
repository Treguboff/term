class PayModel {
    constructor() { }
    async getLinkQR(data) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let obj = {
                    result: true,
                    url_pay: "https://qr.nspk.ru/AD10000K2NIL3MTG886RG8K5691KFRR8?type=02&bank=100000000111&sum=1500&cur=RUB&crc=F38C",
                    order_1c: "dfdhh"
                };
                resolve(obj);
            }, 1000);
        });
        return await promise;

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
        this.timerMessage = 0;
        this.secsMessage = 10;
        this.timerPayment = 0;
        this.secsPayment = 10;

    }

    renderformMessage(result, msg1, msg2) {
        this.secsMessage = 10;
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

        // запускаем таймер автозакрытия окна
        this.timerMessage = setInterval(() => this._tickMessage(myModal), 1000);
        myModal.show();

        // дополнительно назначим выход в меню
        let btn = document.getElementById('btnFormMessageClose');
        btn.addEventListener('click', this.onClickClose);
    }

    renderformPayQR(url_pay) {
        this.secsPayment = 10;
        let currentPage = document.querySelector('body').getAttribute('data-page');
        let myModal = new bootstrap.Modal(document.getElementById('paymentModal'),
            {
                backdrop: 'static'
            }
        );
        // сумма к оплате
        if (currentPage === 'debt') {
            document.getElementById("total_pay").value = document.getElementById("total_amount").innerHTML;
        }
        else if (currentPage === 'deposit') {
            document.getElementById("total_pay").value = document.getElementById("demoA").value;
        }
        // способ оплаты
        let pay_method1 = document.getElementById("m_qr");
        let pay_method2 = document.getElementById("m_card");
        let pay_method3 = document.getElementById("m_deposit");

        let qr_code = document.querySelector(".qr");
        qr_code.innerHTML = "";
        const size = 300;
        new QRCode(qr_code, {
            text: url_pay,
            width: size,
            height: size,
            colorDark: "#232323",
            colorLight: "#eaedf3"
        });
        pay_method1.style.display = 'block';
        pay_method2.style.display = 'none';
        pay_method3.style.display = 'none';

        // запускаем таймер автозакрытия окна
        this.timerPayment = setInterval(() => this._tickPayment(myModal), 1000);

        myModal.show();

        // дополнительно назначим выход в меню
        let btn = document.getElementById('btnFormPaymentClose');
        btn.addEventListener('click', this.onClickClose);

        return myModal;
    }

    _tickMessage(form) {
        if (this.secsMessage <= 0) {
            clearInterval(this.timerMessage);
            form.hide();
            //window.location.href = 'index.html';
        }
        else {
            form._element.querySelector('.msgTimer').innerHTML = 'До выхода осталось ' + (--this.secsMessage) + ' секунд';
        }
    }

    _tickPayment(form) {
        if (this.secsPayment <= 0) {
            clearInterval(this.timerPayment);
            form.hide();
            //window.location.href = 'index.html';
        }
        else {
            form._element.querySelector('.msgTimer').innerHTML = 'До выхода осталось ' + (--this.secsPayment) + ' секунд';
        }
    }

    onClickClose(e) {
        // окно и так закрывается
        //this.formMsg.hide();
        var target = e.currentTarget;
        //var index = parseInt(target.dataset.fitnessIndex, 10); // считывание данных при клике
        var index = target.dataset.fitnessIndex;
        console.log(index);
        /*
            this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
        */
        clearInterval(this.windowTimer);
        //window.location.href = 'index.html';
    }
}

class PayController {
    constructor(payView, payModel) {
        this.payView = payView;
        this.payModel = payModel;
        this.allWindows = [];
    }
    showMessage(result, msg1, msg2) {
        this.payView.renderformMessage(result, msg1, msg2);
    }
    async pay_inc_deposit(userId, depositId, amount) {
        try {
            let data = {
                user_id: userId,
                deposit_id: depositId,
                amount: amount
            };
            // сформируем qr код
            let res = await this.payModel.getLinkQR(data);

            if (res.result) {
                // отобразим QR код для оплаты
                let form1 = this.payView.renderformPayQR(res.url_pay);
                this.allWindows.push(form1);


                // начинаем ожидание статуса оплаты
                model
                let resStatusQR = await model.get_QR_pay_status(res.order_1c, signal);
                console.log(resStatusQR);


            }
            else {
                this.showMessage(false, 'не удалось получить QR код', res.error);
            }
        }
        catch (err) {
            // необходимо закрыть все открытые окна и таймеры ранее!
            console.log(this.allWindows);
            this.showMessage(false, 'pay_inc_deposit', err);
        }
    }
}

var payModel = new PayModel();
var payView = new PayView();
export var App = new PayController(payView, payModel);