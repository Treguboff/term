import { controller } from "../MVC/Controller.js";
import { kineticscroll } from '../etc/kineticscroll.js';

// время закрытия окон сообщений / результатов
var windowTimer;
var secs = 10;

//cart
var cart = [];

export var view = {

    //MENU page
    render_MenuPage_Client(obj) {
        let FIO = document.querySelector('.FIO');
        FIO.innerHTML = `<span style="font-size:3rem; font-family: Raleway;">${obj.name}</span>`;
        /*
        let birthday = document.querySelector('.birthday');
        birthday.innerHTML = `<i class="far fa-calendar-alt fa-1x"><span style="fs-3; font-family: Raleway;">  ${obj.birthday}</span></i>`;
        let mobile = document.querySelector('.mobile');
        mobile.innerHTML = `<i class="fas fa-mobile-alt fa-1x"><span style="fs-3; font-family: Raleway;">  ${obj.phone}</span></i>`;
        */
    },

    render_MenuPage_Debt(obj) {
        let debt = document.querySelector('.debt');
        if (obj.total_amount > 0) {
            debt.innerHTML = `<div class="debt container overflow-hidden" style="border-radius: 20px;">
            <div class="row row_center"
                style="height: 150px; background-color:brown; border-radius:20px; border: 3px solid gray;">              
                <div class="p-2 col-8 center-icon" style="color: white; text-align:left;">
                    <div style=" margin-left:2rem;">
                        <p class="fs-1">Текущая задолженность:</p>
                        <span class="fs-2">${obj.total_amount}₽</spam>                  
                    </div>                    
                </div>
                <div class="col-4 text-center">              
                    <div class="col-12">
                        <button id="btn_link_debtPage" class="button btn btn-success rounded-pill p-3" style="font-size: 2rem; color: white;">
                            <span class="p-4">Оплатить</span>
                        </button>
                    </div>
                </div>
            </div>
            </div>`;
            let btn_ = document.getElementById('btn_link_debtPage');
            btn_.addEventListener('click', () => { window.location.href = './debt.html'; });
        }
        else {
            // покажем зеленую плашку долга что все ок!
            debt.innerHTML = `<div class="debt container overflow-hidden" style="border-radius: 20px;">
                <div class="row row_center"
                    style="height: 150px; background-color:green; border-radius:20px; border: 3px solid gray;">              
                    <div class="p-3 col-8 mx-auto" style="color: white;">
                        <p class="fs-1">У Вас нет задолженности !</p>
                    </div>

                    <div class="col-4 mx-auto">              
                        <span class="noDebt"></span>
                    </div>

                </div>
            </div>`;
        }
    },

    render_MenuPage_Memberships(obj) {
        let memberchip = document.querySelector('.memberchip');
        //тут есть еще и услуги - service
        let obj_memberships = obj.filter(el => el.type === 'membership' && (new Date(el.end_date) >= new Date()));

        if (obj_memberships.length > 0) {
            let str = '';
            obj_memberships.forEach(function (item) {
                str += `<div class="memberchip container mt-4 mb-4" style="border-radius: 20px; border: 3px solid gray;">                    
                    <div class="row" style="height: 100px;">
                        <div class="col-12 fa-2x row_center">
                            <i class="fas fa-credit-card me-5"></i>
                            <p class="fs-1">Данные клубной карты</p>
                        </div>
                    </div>
                    <hr style="border: 2px solid black;">
                    <div class="row" style="height: 100px;">
                        <div class="col-12 fa-3x row_center">
                            <div class="col-1">
                                <i class="fas fa-credit-card" style="color: green;"></i>
                            </div>
                            <div class="col-8">
                                <p class="fs-3">${item.title}</p>
                            </div>
                            <div class="col-3 text-center">                            
                                <div class="col-12">
                                    <!-- в разработке
                                    <button class="btn btn-lg btn-outline-warning rounded-pill" style="font-size: 1.5rem;">
                                        Заморозить
                                    </button>
                                    в разработке -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style="border: 2px solid black;">
                    <div class="row" style="height: 100px;">
                        <div class="col-4 text-center">
                            <p class="fs-3" style="color: green;">${item.status}</p>
                            <p class="fs-5">Статус карты</p>
                        </div>
                        <div class="col-4 text-center">
                            <p class="fs-3">${item.end_date}</p>
                            <p class="fs-5">Дата окончания</p>
                        </div>
                        <div class="col-4 text-center">
                            <p class="fs-3">test</p>
                            <p class="fs-5">Заморозки</p>
                        </div>
                    </div> </div>`;
            })
            memberchip.innerHTML = str;
        }
    },

    render_MenuPage_Deposits(obj) {
        let deposits = document.querySelector('.deposits');
        if (obj.length > 0) {
            let str = '';
            obj.forEach(function (item) {
                str += `
                    <div class="row row_center" id="${item.id}" style="height: 100px;">
                        <div class="col-4 text-center">
                            <p class="fs-3">${item.name}</p>
                            <p class="fs-5">Название</p>
                        </div>
                        <div class="col-4 text-center">
                            <p class="fs-3">${item.balance} ₽</p>
                            <p class="fs-5">Баланс</p>
                        </div>
                        <div class="col-4 text-center">
                            <div class="col-12">
                                <button class="btn btn-lg btn-success rounded-pill my_link" style="font-size: 2rem; padding: 1rem; color:white;">
                                    Пополнить
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr style="border: 1px dashed gray;">
                    `;
            })
            deposits.innerHTML = `<div class="container mt-4 mb-4" style="border-radius: 20px; border: 3px solid gray;">
                <div class="row" style="height: 100px;">
                    <div class="col-12 fa-2x row_center">
                        <i class="far fa-user-circle me-5"></i>
                        <p class="fs-1">Лицевые счета</p>
                    </div>
                </div>
                <hr style="border: 2px solid black;">
                ` + str + `</div>`;
            // навесим события на кнопки для перехода и передачи id-кнопки
            let btns = document.querySelectorAll('.my_link');
            btns.forEach(function (item) {
                item.addEventListener("click", function () {
                    // сохраняем id deposit     
                    let obj_ = {
                        id: item.parentNode.parentNode.parentNode.id,
                        name: item.parentNode.parentNode.parentNode.getElementsByTagName('p')[0].innerHTML
                    };
                    localStorage.setItem('deposit_btn', JSON.stringify(obj_));
                    document.location.href = './deposit.html';
                });
            });
        }
    },

    render_MenuPage_Bonuses(obj) {
        let bonuses = document.querySelector('.bonuses');
        if (obj.length > 0) {
            let str = '';
            obj.forEach(function (item) {
                str += `
                    <div class="row row_center" id="${item.id}" style="height: 100px;">
                        <div class="col-4 text-center">
                            <p class="fs-3">${item.name}</p>
                            <p class="fs-5">Название</p>
                        </div>
                        <div class="col-4 text-center">
                            <p class="fs-3">${item.balance} ₽</p>
                            <p class="fs-5">Баланс</p>
                        </div>
                    </div>`;
            })
            bonuses.innerHTML = `<div class="container mt-4 mb-4" style="border-radius: 20px; border: 3px solid gray;">
                <div class="row" style="height: 100px;">
                    <div class="col-12 fa-2x row_center">
                        <i class="far fa-user-circle me-5"></i>
                        <p class="fs-1">Бонусные счета</p>
                    </div>
                </div>
                <hr style="border: 2px solid black;">
                ` + str + `</div>`;
        }
    },

    // в разработке !!!
    render_MenuPage_Trainings(obj) {
        if (obj.total_balance > 0) {
            let training = document.querySelector('.training');
            training.innerHTML = `<div class="training container mt-4 mb-4" style="border-radius: 20px; border: 3px solid gray;">
                            <div class="row row_center" style="height: 100px;">
                                <div class="col-12 fa-2x row_center">
                                    <i class="fas fa-heartbeat me-5"></i>
                                    <p class="fs-1">Мои тренировки и услуги</p>
                                </div>
                            </div>
                            <hr style="border: 2px solid black;">
                            <div class="row" style="height: 100px;">
                                <div class="col-3">
                                    <p class="fs-5 text-center">Бокс, групповая тренировка</p>
                                </div>
                                <div class="col-3">
                                    <p class="fs-5 text-center">19.04.2023</p>
                                </div>
                                <div class="col-3">
                                    <p class="fs-5 text-center">Секция №3</p>
                                </div>
                                <div class="col-3">
                                    <p class="fs-5 text-center" style="color: orange;">Запланировано</p>
                                </div>
                            </div>
                            <hr style="border: 2px solid black;">
                            <div class="row mb-3">
                                <div class="col-12 text-center">
                                    <a class="btn btn-outline-warning btn-lg rounded-pill" href="#" role="button"
                                        style="font-size: 1.5rem;">Управление
                                        услугами</a>
                                </div>
                            </div>
                        </div>
    
            `;
        }
    },

    //DEBT page
    render_DebtPage_Debt(obj) {
        if (obj.total_amount > 0) {
            let arr = obj.debt_list;
            let debt = document.querySelector('.container2 > ul');
            let str = '';

            arr.forEach(function (item, i) {

                str += `<li>
                <div class="row" id="${item.id}" style = "border-radius:20px;">
                    <div class="col-1">
                        <p class="fs-4">${i + 1}</p>
                    </div>
                    <div class="col-2">
                        <p class="fs-4">${controller.format_date(item.date)}</p>
                    </div>
                    <div class="col-5">
                        <p class="fs-4">${item.description}</p>
                    </div>
                    <div class="col-2">
                        <span class="fs-4 me-2">${item.debt_amount}</span>
                        <i class='fas fa-ruble-sign fs-4'></i>
                    </div>
                    <div class="col-2 form-check form-switch form-switch-xl navbar-toggle">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    </div>
                </div></li>`;

            });

            debt.innerHTML = str;

            // подсчитаем итог таблицы
            view.render_DebtPage_TotalAmount();

            //навесим события кнопок
            let checkboxs = document.querySelectorAll('.navbar-toggle > input[type="checkbox"]');
            checkboxs.forEach(function (item) {
                item.addEventListener('change', function () {
                    view.render_DebtPage_TotalAmount();
                });
            });
            // подключаем кнопку Далее
            let btn_next = document.getElementById("btn_next");
            btn_next.addEventListener('click', () => {
                view.proceed('page1', 'page2')
            });
            // подключаем кнопку Назад
            let btn_prev = document.getElementById("btn_prev");
            btn_prev.addEventListener('click', () => {
                view.proceed('page2', 'page1')
            });
            // подключаем кнопку Оплатить
            let form = document.getElementById("submit");
            form.addEventListener('click', (e) => {
                e.preventDefault();
                let methodPay = view.getSelectPayment();
                if (methodPay === "card") {
                    controller.pay_card_algorytm();
                }
                else if (methodPay === "qr") {
                    controller.pay_qr_algorytm();
                }
                else if (methodPay === "deposit") {
                    controller.pay_deposit_algorytm();
                }
            });

        }
    },

    render_DebtPage_TotalAmount() {
        let sum = 0;
        let checkboxs = document.querySelectorAll('.navbar-toggle > input[type="checkbox"]');
        checkboxs.forEach(function (item) {
            if (item.checked) {
                sum += Math.round(parseFloat(item.parentNode.parentNode.childNodes[7].getElementsByTagName('span')[0].innerHTML) * 100);
            }
        });
        sum /= 100;
        let total_ = document.getElementById('total_amount');
        total_.innerHTML = sum;
    },

    // DEPOSIT page
    render_DepositPage_Deposit(obj) {
        let deposit = document.querySelector(".deposit");
        deposit.innerHTML = `&nbsp; Лицевой счет: ${obj.name}`;
        deposit.id = obj.id;
        // подключаем кнопку Далее
        let btn_next = document.getElementById("btn_next");
        btn_next.addEventListener('click', () => {
            view.proceed('page1', 'page2')
        });
        // подключаем кнопку Назад
        let btn_prev = document.getElementById("btn_prev");
        btn_prev.addEventListener('click', () => {
            view.proceed('page2', 'page1')
        });
        // подключаем кнопку Оплатить
        let btnPayDeposit = document.getElementById("btnPayDeposit");
        btnPayDeposit.addEventListener('click', (e) => {
            e.preventDefault();
            let methodPay = view.getSelectPayment();
            if (methodPay === "card") {
                controller.deposit_add_card_algorytm();
            }
            else if (methodPay === "qr") {
                controller.deposit_add_qr_algorytm();
            };
        });
    },

    // отображение общих форм для операций

    // перелистывание страниц оплаты
    proceed(hideID, showID) {
        let currentPage = document.querySelector('body').getAttribute('data-page');
        if (hideID === 'page1' && currentPage === 'deposit') {
            if (document.getElementById("demoA").value >= 10 && document.getElementById("demoA").value <= 100000) {
                document.getElementById(hideID).style.display = "none";
                document.getElementById(showID).style.display = "block";
            }
            else {
                document.getElementById("demoA").focus();
                document.getElementById("demoA").value = '';
                document.getElementById("demoA").placeholder = 'Минимальная сумма 10 Р';
                //by Treguboff
                Keyboard._setupKeyboard("numeric");
                let target = document.getElementById('demoA');
                Keyboard.selectedElement = target;
                Keyboard.open(target.value, currentValue => {
                    target.value = currentValue;
                });
            }
        }
        else {
            document.getElementById(hideID).style.display = "none";
            document.getElementById(showID).style.display = "block";
        }
    },

    render_ViewPayment(payMethod, res) {
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
        if (payMethod === 'qr') {
            let qr_code = document.querySelector(".qr");
            qr_code.innerHTML = "";
            const size = 300;
            new QRCode(qr_code, {
                text: res.url_pay,
                width: size,
                height: size,
                colorDark: "#232323",
                colorLight: "#eaedf3"
            });
            pay_method1.style.display = 'block';
            pay_method2.style.display = 'none';
            pay_method3.style.display = 'none';
        }
        else if (payMethod === 'card') {
            pay_method1.style.display = 'none';
            pay_method2.style.display = 'block';
            pay_method3.style.display = 'none';
            let abortBtn = document.getElementById('paymentModalClose');
            abortBtn.style.display = 'none';
        }
        else if (payMethod === 'deposit') {
            pay_method1.style.display = 'none';
            pay_method2.style.display = 'none';
            pay_method3.style.display = 'block';
            let abortBtn = document.getElementById('paymentModalClose');
            abortBtn.style.display = 'none';
        }
        myModal.show();
        return myModal;
    },

    // модальные формы оповещения
    render_Msg(result, msg1, msg2, logData) {
        controller._logReport(logData);
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

        //

        myModal.show();

        // запускаем таймер автозакрытия окна
        windowTimer = setInterval(view.tick, 1000);

        // дополнительно назначим выход в меню
        let btn = document.getElementById('FormViewMsgClose');
        btn.addEventListener('click', () => {
            clearInterval(windowTimer);
            window.location.href = 'index.html'
        });
        return myModal;
    },

    tick() {
        if (secs <= 0) {
            clearInterval(windowTimer);
            window.location.href = 'index.html';
        }
        else {
            document.getElementById('msgTimer').innerText = 'До выхода осталось ' + (--secs) + ' секунд';
        }
    },

    render_FormResult(result, error, logData) {
        controller._logReport(logData);
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
            document.getElementById('msg1s').innerText = 'Спасибо!';
            document.getElementById('msg2s').innerText = 'Оплата прошла успешно';
        }
        else {
            let resS = document.getElementById("successMsg");
            let resU = document.getElementById("unsuccessMsg");
            resS.style.display = "none";
            resU.style.display = "block";
            document.getElementById('msg1u').innerText = 'Ваш платеж не прошел';
            document.getElementById('msg2u').innerText = error;
        }
        myModal.show();

        // запускаем таймер автозакрытия окна
        windowTimer = setInterval(view.tick, 1000);

        // дополнительно назначим logout
        let btn = document.getElementById('FormViewMsgClose');
        btn.addEventListener('click', () => { window.location.href = 'index.html' });
        return myModal;
    },

    getSelectPayment() {
        let selected = document.querySelector('input[type=radio][name=Types]:checked');
        return (selected.value);
    },

    getDataDebtForPay() {
        let sales = [];
        let sum = 0;
        let checkboxs = document.querySelectorAll('.navbar-toggle > input[type="checkbox"]');
        checkboxs.forEach(function (item) {
            if (item.checked) {
                sales.push(item.parentNode.parentNode.id);
                sum += Math.round(parseFloat(item.parentNode.parentNode.childNodes[7].getElementsByTagName('span')[0].innerHTML) * 100);
            }
        });
        sum /= 100;
        let data_for_pay = {
            user_id: controller.getUserFromLocalSrorage().id,
            sales: sales,
            amount: sum
        };
        return data_for_pay;
    },

    render_CatalogPage(obj) {

        cart = this.getCart();
        this.setCartValues(cart);

        // pagination & filters
        let currentPage = 0;
        let page_size = 0;
        let curr_group = '';

        let products = obj;

        page_size = this.getSelectValue('pagination_select');
        curr_group = this.getSelectValue('group');

        let pages = '';
        let total = 0;

        if (curr_group === 'all') {
            pages = this.paginate(products, page_size);
            total = products.length;
        }
        else {
            let arr = products.filter(el => el.group === curr_group);
            pages = this.paginate(arr, page_size);
            total = arr.length;
        }

        this.renderPagination(pages, currentPage, total);
        this.renderProducts(pages[currentPage], total);
        this._touch();

        // добавить события фильтров
        const sel = document.getElementById('pagination_select');
        sel.onchange = () => {
            page_size = this.getSelectValue('pagination_select');
            this.render_CatalogPage(obj);
        }

        const sel_group = document.getElementById('group');
        sel_group.onchange = () => {
            curr_group = this.getSelectValue('group');
            this.render_CatalogPage(obj);
        }

    },

    getSelectValue(iD) {
        let sel = document.getElementById(iD);
        return sel.options[sel.selectedIndex].value;
    },

    paginate(arr, size) {
        return arr.reduce((acc, val, i) => {
            let idx = Math.floor(i / size)
            let page = acc[idx] || (acc[idx] = [])
            page.push(val)
            return acc
        }, [])
    },

    renderPagination(pages, currentPage, total) {

        let len = pages.length;

        let pag = document.querySelector('.pagination');
        pag.innerHTML = `
        <li class="page-item" id="minus"><a class="page-link" href="#">Назад</a></li>
        <li class="page-item" id="minus"><a class="page-link" href="#">${currentPage + 1}</a></li>
        <li class="page-item" id="minus"><a class="page-link" href="#"> из </a></li>
        <li class="page-item" id="minus"><a class="page-link" href="#">${len}</a></li>
        <li class="page-item" id="plus"><a class="page-link" href="#">Вперед</a></li>`;

        const minus = document.getElementById('minus');
        minus.onclick = () => {
            if (currentPage > 0) {
                currentPage -= 1;
                this.renderPagination(pages, currentPage, total);
                this.renderProducts(pages[currentPage], total);
                this._touch();
            }
        }
        const plus = document.getElementById('plus');
        plus.onclick = () => {
            if (pages.length - 1 > currentPage) {
                currentPage += 1;
                this.renderPagination(pages, currentPage, total);
                this.renderProducts(pages[currentPage], total);
                this._touch();
            }
        }

    },

    renderProducts(pageArr, total) {
        let productsContainer = document.querySelector('#products-container');
        productsContainer.innerHTML = "";

        document.getElementById('basic-addon1').innerHTML = `${total} items`;

        pageArr.forEach(function (item) {

            const productHTML = `<div class="col-md-4 mb-3">
                            <div class="card mb-4" data-id="${item.serviceId}">
                                <!--
                                <a href="#">
                                    <img src="./img/shop/img_boxing.jpg" class="card-img-top" alt="Product">
                                </a>
                                -->                                
                                <div class="card-body text-center">
                                    <h4 class="item-title">${item.service}</h4>
                                    <p><small data-items-in-box class="text-muted">${item.group}</small></p>
    
                                    <div class="details-wrapper">
                                        <div class="price">
                                            <span>₽</span>
                                            <span class="price__currency">${item.price}</span>
                                        </div>
                                    </div>
    
                                    <button data-cart type="button" class="btn btn-block btn-outline-warning">
                                        + в корзину
                                    </button>
    
                                </div>
                            </div>
                        </div>`;
            productsContainer.insertAdjacentHTML('beforeend', productHTML);
        });

        // добавляем опросы кнопки добавления в корзину
        this.addEventsBtn();
    },

    _touch() {
        // touch
        setTimeout(() => {
            let target = document.querySelector(".paper > #products-container");
            let box = parseInt(getComputedStyle(target.parentNode).height, 10);
            let list = parseInt(getComputedStyle(target).height, 10);

            //console.log(box)
            //console.log(list)

            let indic = document.getElementById('indic');
            indic.style = 'transform: translateY(0px)';
            target.style = 'transform: translateY(0px)';
            if (list > box) {
                kineticscroll(target, { indicator: 'indic', snap: true });
            }
        }, 500)
    },

    saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    },

    getCart() {
        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    },

    setCartValues(cart) {
        const cartItems = document.querySelector("#cart-items");
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * 1;
            itemsTotal += 1;
        });
        //cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    },

    move_to_cart(pic_, cart_) {
        let picture_pos = pic_.getBoundingClientRect();
        let cart_pos = cart_.getBoundingClientRect();

        let picture2 = pic_.cloneNode();

        picture2.style.position = "fixed";
        picture2.style.left = picture_pos['x'] + "px";
        picture2.style.top = picture_pos['y'] + "px";
        picture2.style.border = "none";
        picture2.style.zIndex = 32767;

        let start_x = picture_pos['x'] + 0.5 * picture_pos['width'];
        let start_y = picture_pos['y'] + 0.5 * picture_pos['height'];

        let delta_x = (cart_pos['x'] + 0.5 * cart_pos['width']) - start_x;
        let delta_y = (cart_pos['y'] + 0.5 * cart_pos['height']) - start_y;

        document.body.appendChild(picture2);
        void picture2.offsetWidth;
        picture2.style.transform = "translateX(" + delta_x + "px)";
        picture2.style.transform += "translateY(" + delta_y + "px)";
        picture2.style.transform += "scale(0.25)"; // уменьшаем до 25%
        picture2.style.transition = "1s"; // всё происходит за 1 секунду

        setTimeout(() => document.body.removeChild(picture2), 960);
    },

    viewCart(cart) {
        const cartItems = document.querySelector("#cart-items");
        cartItems.innerText = cart.length;
    },

    addEventsBtn() {

        window.addEventListener('click', function (event) {

            // Проверяем что клик был совершен по кнопке "Добавить в корзину"
            if (event.target.hasAttribute('data-cart')) {

                // Находим карточку с товаром, внутри котрой был совершен клик
                const card = event.target.closest('.card');

                // Собираем данные с этого товара и записываем их в единый объект productInfo
                const productInfo = {
                    id: card.dataset.id,
                    //imgSrc: card.querySelector('.card-img-top').getAttribute('src'),
                    title: card.querySelector('.item-title').innerText,
                    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
                    price: card.querySelector('.price__currency').innerText,
                    counter: 1,
                };

                let prod = view.getCart();
                let res = prod.filter(el => el.id === productInfo.id);

                if (res.length === 0) {
                    // добавим товар в корзину
                    cart.push(productInfo);
                    view.saveCart(cart);

                    // animation to cart
                    //let pic1 = card.querySelector('.card-img-top');
                    let pic1 = card.querySelector('.card-body');
                    let cart1 = document.querySelector('.basket');
                    view.move_to_cart(pic1, cart1);

                    // пересчитаем корзину                    
                    view.viewCart(cart);
                }

            }

        })

    },

    render_CartPage() {

        let obj = view.getCart();
        let cartPage = document.querySelector('.cart_');
        cartPage.innerHTML = "";
        obj.forEach(function (item) {
            cartPage.innerHTML += `
        <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                   
                    
                    <div class="col-2">
                        <img src="./img/shop/img_pilates.jpg" class="img-fluid rounded-3" alt="logo">
                    </div>

                    <div class="col-7">
                        <p class="lead fw-normal mb-2">${item.title}</p>                        
                    </div>
                    
                    <div class="col-2">
                        <h5 class="mb-0">${item.price}<span>₽</span></h5>
                    </div>

                    <div class="col-1 text-center">
                        <a href="#!" class="text-danger btn_del"><i class="fas fa-trash fa-lg" id="${item.id}"></i></a>
                    </div>
                    

                </div>
            </div>
        </div>
        `;
        });

        // calc
        this.calcTotalCart();

        let btns = document.querySelectorAll('.btn_del');
        btns.forEach(item => {
            item.addEventListener('click', function (event) {
                // обновим состояние массива выбранных товаров
                cart = view.getCart();
                const res = cart.filter((el, index, arr) => {
                    arr.push();
                    return el.id != event.target.id
                });
                view.saveCart(res);
                view.render_CartPage();
            });
        });

        // touch
        setTimeout(() => {
            let target = document.querySelector(".cart_list > .cart_");

            let box = parseInt(getComputedStyle(target.parentNode).height, 10);
            let list = parseInt(getComputedStyle(target).height, 10);

            let indic = document.getElementById('indic');
            indic.style = 'transform: translateY(0px)';
            target.style = 'transform: translateY(0px)';
            if (list > box) {
                kineticscroll(target, { indicator: 'indic', snap: true });
            }
        }, 500);

    },


    calcTotalCart() {

        let subtotal = 0, sales = 0, total = 0;

        cart = this.getCart();
        cart.forEach(el => {
            let price = +el.price;
            subtotal = subtotal + price;
        })

        sales = subtotal * 20 / 100;
        total = subtotal - sales;

        // итого
        let label1 = document.getElementById('subtotal');
        label1.innerHTML = new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(subtotal);

        // скидка
        let label2 = document.getElementById('sales');
        label2.innerHTML = new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(sales);

        // всего
        let label3 = document.getElementById('total');
        label3.innerHTML = new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(total);

        // всего на кнопке Оплатить
        let label4 = document.getElementById('btn_total');
        label4.innerHTML = new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(total);

    },

}