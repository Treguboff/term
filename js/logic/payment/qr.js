export class QR {
    
    // время закрытия окон сообщений / результатов
    #windowTimer
    #secs

    constructor(user, arrData) {
        this.#windowTimer = '';
        this.#secs = 10;
    }

    // public

    // оплатить задолженность
    pay_debt() {
        this.#_test();
    }

    // оплатить пополнение депозита
    async pay_inc_deposit(userId, depositId, amount) {
        try {
            r3r3

            let data = {
                user_id: userId,
                deposit_id: depositId,
                amount: amount
            };

            // сформируем qr код
            let res = await this.#_get_QR_inc_deposit(data);

            console.log(res)

            if (res.result) {

                alert('link qr-code');

            }
            else {
                // логирование
                let _err = {
                    'date': new Date(),
                    'operation': 4, // deposit add qr pay
                    'userId': userId,
                    'flagErr': true,
                    'amount': amount,
                    'msg1': 'Ошибка при получении QR ссылки СБЕРБАНКа',
                    'msg2': ''
                };
                this.#_renderMessageWindow();
            }

        }
        catch (err) {
            this.#_renderMessageWindow(false, 'pay_inc_deposit', err);
        }
    }

    // оплатить корзину товаров - test!
    pay_test() {

    }

    // private
    #_test() {
        alert('тут Оплата по QR');
    }

    async #_get_QR_inc_deposit(data) {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        result: true,
                        url_pay: "https://qr.nspk.ru/AD10000K2NIL3MTG886RG8K5691KFRR8?type=02&bank=100000000111&sum=1500&cur=RUB&crc=F38C",
                        order_1c: "dfdhh"
                    };
                    resolve(obj);
                }, 1000);
            })
            return await promise;
        }
        else {
            let r = await SendData('QR_inc_deposit', data, 1);
            let res = await JSON.parse(r);
            return res;
        }
    }

    #_tick() {
        if (this.#secs <= 0) {
            clearInterval(this.#windowTimer);
            window.location.href = 'index.html';
        }
        else {
            document.getElementById('msgTimer').innerText = 'До выхода осталось ' + (--this.#secs) + ' секунд';
        }
    }

    #_renderMessageWindow(result, msg1, msg2) {
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

        // запускаем таймер автозакрытия окна
        this.#windowTimer = setInterval(() => this.#_tick(), 1000);

        // дополнительно назначим выход в меню
        let btn = document.getElementById('FormViewMsgClose');
        btn.addEventListener('click', () => {
            clearInterval(this.windowTimer);
            window.location.href = 'index.html'
        });
        return myModal;
    }

}