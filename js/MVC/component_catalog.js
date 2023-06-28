import { kineticscroll } from '../etc/kineticscroll.js';

const productsDom = document.querySelector('#products-container');
const cartItems = document.querySelector("#cart-items");

//cart
var cart = [];

//getting the productsDom
class Products {
    async getProducts() {
        try {
            let response = await this.getCatalog();
            let products = response.catalog_list;
            products = products.map(item => {
                let iD = item.serviceId;
                let title = item.service;
                let price = item.price;
                let group = item.group;
                return { iD, title, price, group };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async getCatalog() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        "catalog_list": [
                            {
                                "type": "Пакет услуг",
                                "group": "Детские групповые занятия",
                                "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "d13ad99f-2a0e-11ed-a79d-bc9759eb8438",
                                "price": 23400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Детский фитнес",
                                "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "3317dc7a-2a0f-11ed-a79d-bc9759eb8438",
                                "price": 35100
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Детские групповые занятия",
                                "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "063959c6-2a10-11ed-a79d-bc9759eb8438",
                                "price": 18525
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "91932dd7-2827-11ed-a7a5-a245e236df61",
                                "price": 27000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "f2863dc7-290a-11ed-a7a7-a78db2def573",
                                "price": 18000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок \r\nКатегория тренера: Инструктор",
                                "serviceId": "5c576900-290b-11ed-a7a7-a78db2def573",
                                "price": 27000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Малая Группа",
                                "serviceId": "438d7b23-290c-11ed-a7a7-a78db2def573",
                                "price": 9000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Малая Группа",
                                "serviceId": "6e11477c-290c-11ed-a7a7-a78db2def573",
                                "price": 4750
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "8bc482f2-290c-11ed-a7a7-a78db2def573",
                                "price": 9500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "a07aef9b-290c-11ed-a7a7-a78db2def573",
                                "price": 14250
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "d8c75c5e-290c-11ed-a7a7-a78db2def573",
                                "price": 20700
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "ef39371a-290c-11ed-a7a7-a78db2def573",
                                "price": 31050
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок \r\nКатегория тренера: Персональный тренер",
                                "serviceId": "05a19075-290d-11ed-a7a7-a78db2def573",
                                "price": 10925
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "16ce087a-290d-11ed-a7a7-a78db2def573",
                                "price": 16388
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "6e9c1263-290d-11ed-a7a7-a78db2def573",
                                "price": 40500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок \r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "8fa7373a-290d-11ed-a7a7-a78db2def573",
                                "price": 14250
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "a2c1135b-290d-11ed-a7a7-a78db2def573",
                                "price": 21375
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "714abe4a-290e-11ed-a7a7-a78db2def573",
                                "price": 23400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "83c4ff2a-290e-11ed-a7a7-a78db2def573",
                                "price": 35100
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "99e36fd4-290e-11ed-a7a7-a78db2def573",
                                "price": 12350
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "aa6b4d9e-290e-11ed-a7a7-a78db2def573",
                                "price": 18525
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера:Инструктор",
                                "serviceId": "97d96a42-2919-11ed-a7a7-a78db2def573",
                                "price": 8500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера:Инструктор",
                                "serviceId": "a930c6e5-2919-11ed-a7a7-a78db2def573",
                                "price": 16000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "722c4da5-291b-11ed-a7a7-a78db2def573",
                                "price": 25000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "92253a9d-291b-11ed-a7a7-a78db2def573",
                                "price": 13250
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "12b3d55a-2929-11ed-a7a7-a78db2def573",
                                "price": 9925
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "a7dac1e6-2929-11ed-a7a7-a78db2def573",
                                "price": 18700
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "1498ece4-292d-11ed-a7a7-a78db2def573",
                                "price": 11350
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "8580a4d6-292d-11ed-a7a7-a78db2def573",
                                "price": 21400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "134851aa-2ad6-11ed-a7a7-a78db2def573",
                                "price": 12350
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "7a454554-2ad8-11ed-a7a7-a78db2def573",
                                "price": 14250
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК\r\nКатегория тренера: Мастер-тренер 1",
                                "serviceId": "7fcb8228-2ad9-11ed-a7a7-a78db2def573",
                                "price": 27000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК \r\nКатегория тренера:Инструктор",
                                "serviceId": "216a28db-2b38-11ed-a7a7-a78db2def573",
                                "price": 9500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК\r\nКатегория тренера:Инструктор",
                                "serviceId": "59251d77-2b38-11ed-a7a7-a78db2def573",
                                "price": 18000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 55 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "41e1deee-2b39-11ed-a7a7-a78db2def573",
                                "price": 10925
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 55 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "dfd5a61d-2b39-11ed-a7a7-a78db2def573",
                                "price": 20700
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "e5c2708c-2b3a-11ed-a7a7-a78db2def573",
                                "price": 12350
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "8b869cff-2b3b-11ed-a7a7-a78db2def573",
                                "price": 23400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "Кросстренинг PRO, 2 раза в неделю, Абонемент на 1 месяц",
                                "serviceId": "e1613c04-b268-11eb-b840-b8b990fa28bd",
                                "price": 8000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "Кросстренинг PRO, 3 раза в неделю, Абонемент на 1 месяц",
                                "serviceId": "214e48fb-b269-11eb-b840-b8b990fa28bd",
                                "price": 12000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "Кросстренинг PRO, 2 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "4862d3e5-b26a-11eb-b840-b8b990fa28bd",
                                "price": 4000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "Кросстренинг PRO, 3 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "83cb8c02-b26a-11eb-b840-b8b990fa28bd",
                                "price": 6000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TFTeam Кросстренинг, 2 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "0871d743-b271-11eb-b840-b8b990fa28bd",
                                "price": 3500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TFTeam Кросстренинг, 2 раза в неделю, Абонемент на 1 месяц",
                                "serviceId": "3d749f15-b271-11eb-b840-b8b990fa28bd",
                                "price": 6000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TFTeam Кросстренинг, 3 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "5be4231f-b271-11eb-b840-b8b990fa28bd",
                                "price": 5000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TFTeam Кросстренинг, 3 раза в неделю, Абонемент на 1 месяц",
                                "serviceId": "8555c2e9-b271-11eb-b840-b8b990fa28bd",
                                "price": 7500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TF Team, 2 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "6745a4a3-b277-11eb-b840-b8b990fa28bd",
                                "price": 3000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TF Team, 2 раза в неделю, Абонемент на 1 месяц",
                                "serviceId": "8f62453d-b277-11eb-b840-b8b990fa28bd",
                                "price": 4500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TF Team, 3 раза в неделю, Абонемент на полмесяца",
                                "serviceId": "ddb9e9ec-b277-11eb-b840-b8b990fa28bd",
                                "price": 4000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Тренажерный зал",
                                "groupId": "0f7709fe-e8c5-11ec-a79c-be828dd5501b",
                                "service": "TF Team, 3 раза в неделю,Абонемент на 1 месяц",
                                "serviceId": "ffa9d586-b277-11eb-b840-b8b990fa28bd",
                                "price": 6000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Детские групповые занятия",
                                "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                                "service": "Бокс Pro, 1 раз в неделю, Абонемент на 1 месяц",
                                "serviceId": "61632d1b-b278-11eb-b840-b8b990fa28bd",
                                "price": 3000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "CrossTraining",
                                "groupId": "7f43741d-4bb3-11ed-a7a7-a78db2def573",
                                "service": "5 Персональных тренировок",
                                "serviceId": "0fec5dfd-b27b-11eb-b840-b8b990fa28bd",
                                "price": 11000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "CrossTraining",
                                "groupId": "7f43741d-4bb3-11ed-a7a7-a78db2def573",
                                "service": "10 персональных тренировок",
                                "serviceId": "26892ab7-b27b-11eb-b840-b8b990fa28bd",
                                "price": 20000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "CrossTraining",
                                "groupId": "7f43741d-4bb3-11ed-a7a7-a78db2def573",
                                "service": "5 Сплит-тренировок",
                                "serviceId": "5f53ef13-b27b-11eb-b840-b8b990fa28bd",
                                "price": 16500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "CrossTraining",
                                "groupId": "7f43741d-4bb3-11ed-a7a7-a78db2def573",
                                "service": "10 Сплит-тренировок",
                                "serviceId": "783dad30-b27b-11eb-b840-b8b990fa28bd",
                                "price": 30000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "23e998da-b7df-11eb-b840-b8b990fa28bd",
                                "price": 7600
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "3be72fa0-b7df-11eb-b840-b8b990fa28bd",
                                "price": 14400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Инструктор",
                                "serviceId": "7bab8419-b7df-11eb-b840-b8b990fa28bd",
                                "price": 11400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок \r\nКатегория тренера: Инструктор",
                                "serviceId": "c2d519d4-b7df-11eb-b840-b8b990fa28bd",
                                "price": 21600
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Малая Группа",
                                "serviceId": "079ad145-b7e0-11eb-b840-b8b990fa28bd",
                                "price": 4275
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Малая Группа",
                                "serviceId": "2975a5d1-b7e0-11eb-b840-b8b990fa28bd",
                                "price": 8100
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК \r\nКатегория тренера:Инструктор",
                                "serviceId": "3fd866c0-b7e1-11eb-b840-b8b990fa28bd",
                                "price": 9500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК\r\nКатегория тренера:Инструктор",
                                "serviceId": "57179ede-b7e1-11eb-b840-b8b990fa28bd",
                                "price": 18000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера:Инструктор",
                                "serviceId": "c5ced2b4-b7e1-11eb-b840-b8b990fa28bd",
                                "price": 6400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера:Инструктор",
                                "serviceId": "e3bd9904-b7e1-11eb-b840-b8b990fa28bd",
                                "price": 12800
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок \r\nКатегория тренера: Персональный тренер",
                                "serviceId": "4303c03d-b7e2-11eb-b840-b8b990fa28bd",
                                "price": 8550
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "88dd2660-b7e2-11eb-b840-b8b990fa28bd",
                                "price": 16200
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "07376790-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 12825
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "2371df74-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 24300
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 55 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "6ca0cf69-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 10925
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 55 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "83a1c00b-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 20700
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "b95c10bc-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 7400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Персональный тренер",
                                "serviceId": "cd9daaf7-b7e3-11eb-b840-b8b990fa28bd",
                                "price": 14800
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "1e982a7c-b7e4-11eb-b840-b8b990fa28bd",
                                "price": 9500
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "39c79b4f-b7e4-11eb-b840-b8b990fa28bd",
                                "price": 18000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "18873261-b7e7-11eb-b840-b8b990fa28bd",
                                "price": 14250
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "2d0468f5-b7e7-11eb-b840-b8b990fa28bd",
                                "price": 27000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "5fba4e49-b7e7-11eb-b840-b8b990fa28bd",
                                "price": 11000
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК \r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "7a001905-b7e7-11eb-b840-b8b990fa28bd",
                                "price": 23400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "98c8ccb8-b7e9-11eb-b840-b8b990fa28bd",
                                "price": 8400
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "10 Персональных Тренировок для НЧК 30 мин\r\nКатегория тренера: Мастер-тренер",
                                "serviceId": "bcdd23cd-b7e9-11eb-b840-b8b990fa28bd",
                                "price": 16800
                            },
                            {
                                "type": "Пакет услуг",
                                "group": "Водные программы",
                                "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                                "service": "5 Персональных Тренировок для Особых детей",
                                "serviceId": "1a1c4b50-c934-11eb-b840-b8b990fa28bd",
                                "price": 7600
                            }
                        ]
                    };
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            // Получаем данные из products.json
            let response = await fetch('./data/catalog.json');
            // Парсим данные из JSON формата в JS
            let products = await response.json();
            return products;
        }
    }
}

// UI for displaying products
class UI {
    // pagination & filters
    currentPage = 0;
    page_size = 0;
    curr_group = '';

    static move_to_cart(pic_, cart_) {
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
    }

    static viewCart(cart) {
        cartItems.innerText = cart.length;
    }

    setupAPP() {
        // при старте отобразим состояние корзины пользователя
        cart = Storage.getCart();
        this.setCartValues(cart);
    }

    catalogLogic() {

        let products = Storage.getAllProducts();

        this.page_size = this.getSelectValue('pagination_select');
        this.curr_group = this.getSelectValue('group');

        let pages = '';
        let total = 0;

        if (this.curr_group === 'all') {
            pages = this.paginate(products, this.page_size);
            total = products.length;
        }
        else {
            let arr = products.filter(el => el.group === this.curr_group);
            pages = this.paginate(arr, this.page_size);
            total = arr.length;
        }

        this.renderPagination(pages, this.currentPage, total);
        this.renderProducts(pages[this.currentPage], total);
        this._touch();

        // добавить события фильтров
        const sel = document.getElementById('pagination_select');
        sel.onchange = () => {
            this.page_size = this.getSelectValue('pagination_select');
            this.catalogLogic();
        }

        const sel_group = document.getElementById('group');
        sel_group.onchange = () => {
            this.curr_group = this.getSelectValue('group');
            this.catalogLogic();
        }

    }

    // calc cart
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * 1;
            itemsTotal += 1;
        });
        //cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }

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
    }

    getSelectValue(iD) {
        let sel = document.getElementById(iD);
        return sel.options[sel.selectedIndex].value;
    }

    paginate(arr, size) {
        return arr.reduce((acc, val, i) => {
            let idx = Math.floor(i / size)
            let page = acc[idx] || (acc[idx] = [])
            page.push(val)
            return acc
        }, [])
    }

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

    }

    renderProducts(pageArr, total) {
        let productsContainer = document.querySelector('#products-container');
        productsContainer.innerHTML = "";

        document.getElementById('basic-addon1').innerHTML = `${total} items`;

        pageArr.forEach(function (item) {

            const productHTML = `<div class="col-md-4 mb-3">
                            <div class="card mb-4" data-id="${item.iD}">
                                <img class="product-img" src="img/shop/test.webp" alt="fitness_logo">
                                <div class="card-body text-center">
                                    <h4 class="item-title">${item.title}</h4>
                                    <p><small data-items-in-box class="text-muted">${item.group}</small></p>
    
                                    <div class="details-wrapper">
    
                                        <div class="price">
                                            <div class="price__currency">${item.price} ₽</div>
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
    }

    addEventsBtn() {

        window.addEventListener('click', function (event) {

            // Проверяем что клик был совершен по кнопке "Добавить в корзину"
            if (event.target.hasAttribute('data-cart')) {

                // Находим карточку с товаром, внутри котрой был совершен клик
                const card = event.target.closest('.card');

                // Собираем данные с этого товара и записываем их в единый объект productInfo
                const productInfo = {
                    id: card.dataset.id,
                    imgSrc: card.querySelector('.product-img').getAttribute('src'),
                    title: card.querySelector('.item-title').innerText,
                    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
                    price: card.querySelector('.price__currency').innerText,
                    counter: 1,
                };

                let prod = Storage.getCart();
                let res = prod.filter(el => el.id === productInfo.id);

                if (res.length === 0) {
                    // добавим товар в корзину
                    cart.push(productInfo);
                    Storage.saveCart(cart);

                    // animation to cart
                    let pic1 = card.querySelector('.product-img');
                    let cart1 = this.document.querySelector('.basket');
                    UI.move_to_cart(pic1, cart1);

                    // пересчитаем корзину                    
                    UI.viewCart(cart);
                }

            }

        })

    }

}

//local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
    }

    static getAllProducts() {
        let products = JSON.parse(localStorage.getItem("products"));
        return products;
    }

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }

}

export function catalog_() {

    const products = new Products();
    const ui = new UI();

    //setup application
    ui.setupAPP();

    //get all products
    products
        .getProducts()
        .then(products => {
            // сохраним все продаваемые товары
            Storage.saveProducts(products);
        })
        .then(() => {
            // запустим логику страницы
            ui.catalogLogic();
        });

};