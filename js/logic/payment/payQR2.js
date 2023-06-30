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
}

class PayView {
    constructor() {
        this.onClickClose = null;
    }
    render(result, msg1, msg2) {
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

        // дополнительно назначим выход в меню
        let btn = document.getElementById('FormViewMsgClose');
        btn.addEventListener('click', this.onClickClose);

        return myModal;
    }
    renderQR(url_pay) {
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

        myModal.show();
        return myModal;
    }
}

class PayController {
    constructor(payView, payModel) {
        this.payView = payView;
        this.payModel = payModel;
        // окно результата
        this.secs = 10;
        this.windowTimer = 0;
        this.formMsg = null;
    }
    initialize() {
        // не особо постиг ЭТО
        this.payView.onClickClose = this.onClickClose.bind(this);
    }
    onClickClose(e) {
        // окно и так закрывается
        //this.formMsg.hide();

        var target = e.currentTarget;
        var index = parseInt(target.dataset.penguinIndex, 10); // считывание данных при клике

        console.log(index);

        /*
            this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
    */
        clearInterval(this.windowTimer);
        window.location.href = 'index.html';
    }
    showMessage(result, msg1, msg2) {
        // вызываем открытие окна сообщения
        this.formMsg = this.payView.render(result, msg1, msg2);
        // запускаем таймер автозакрытия окна
        this.windowTimer = setInterval(() => this._tick(), 1000);
    }
    _tick() {
        if (this.secs <= 0) {
            clearInterval(this.windowTimer);
            this.formMsg.hide();
            //window.location.href = 'index.html';
        }
        else {
            document.getElementById('msgTimer').innerText = 'До выхода осталось ' + (--this.secs) + ' секунд';
        }
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

                let formQR = this.payView.renderQR(res.url_pay);

            }
            else {
                this.showMessage(false, 'не удалось получить QR код', res.error);
            }
        }
        catch (err) {
            this.showMessage(false, 'pay_inc_deposit', err);
        }
    }
}

var payModel = new PayModel();
var payView = new PayView();

export var App = new PayController(payView, payModel);