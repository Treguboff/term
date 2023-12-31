import { controller } from "../MVC/Controller.js";

export var model = {

    // get запросы к 1С
    async getDebt() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        "debt_list": [

                            {
                                "date": "2022-11-15T14:21:53",
                                "debt_amount": 97.65,
                                "id": "ec85dbb9-1427-4567-8588-d982ff35e964",
                                "org_id": "e1222cb7-3ea0-11e9-ada5-0050568b5c63",
                                "description": "Стакан с крышкой: 1, Бон-Аква (0,5) негазированная: 1"
                            },
                            {
                                "date": "2022-11-15T14:21:53",
                                "debt_amount": 97.65,
                                "id": "ec85dbb9-1427-4567-8588-d982ff35e964",
                                "org_id": "e1222cb7-3ea0-11e9-ada5-0050568b5c63",
                                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam repellendus dolorum perferendis maxime dicta asperiores quas harum tempore rerum, quis accusantium iste itaque, architecto in, temporibus officiis aspernatur конец."
                            },
                            {
                                "date": "2022-11-15T14:21:53",
                                "debt_amount": 97.65,
                                "id": "ec85dbb9-1427-4567-8588-d982ff35e964",
                                "org_id": "e1222cb7-3ea0-11e9-ada5-0050568b5c63",
                                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam repellendus dolorum perferendis maxime dicta asperiores quas harum tempore rerum, quis accusantium iste itaque, architecto in, temporibus officiis aspernatur конец."
                            },


                        ],
                        "total_amount": 20
                    };
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            let user_id = {
                user_id: controller.getUserFromLocalSrorage().id
            };
            let r = await SendData('API_get_data_debts', user_id, 1);
            let res = await JSON.parse(r);
            return res.debts;
        }
    },

    async getMemberships() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = [
                        {
                            "type": "service",
                            "title": "Солярий 1 мин",
                            "status": "active",
                            "end_date": null
                        },
                        {
                            "type": "service",
                            "title": "ТЗ 1 ПТ Проведение Персональной тренировки",
                            "status": "active",
                            "end_date": null
                        },
                        {
                            "type": "membership",
                            "title": "020_Индивидуальное дневное M12",
                            "status": "active",
                            "end_date": "2024-04-19"
                        },
                        {
                            "type": "membership",
                            "title": "020_Индивидуальное дневное M12",
                            "status": "active",
                            "end_date": "2023-04-19"
                        },
                        {
                            "type": "membership",
                            "title": "020_Индивидуальное дневное M12",
                            "status": "active",
                            "end_date": "2022-04-19"
                        },
                        {
                            "type": "membership",
                            "title": "020_Индивидуальное дневное M12",
                            "status": "active",
                            "end_date": "2021-04-19"
                        },
                        {
                            "type": "membership",
                            "title": "020_Индивидуальное дневное M12",
                            "status": "active",
                            "end_date": "2020-04-19"
                        },


                    ]
                        ;
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            let user_id = {
                user_id: controller.getUserFromLocalSrorage().id
            };
            let r = await SendData('API_get_data_tickets', user_id, 1);
            let res = await JSON.parse(r);
            return res.tickets.ticket_list;
        }
    },

    async getDeposits() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = [
                        {
                            "id": "96781f4b-8e1d-11eb-b83f-ec461e090621",
                            "name": "Основной",
                            "relatives_account": false,
                            "type_id": "7169a29e-7e3b-11e5-a280-60a44c3f2e8e",
                            "type_name": "deposit",
                            "balance": 10
                        },
                        {
                            "id": "2",
                            "name": "Основной 2",
                            "relatives_account": false,
                            "type_id": "7169a29e-7e3b-11e5-a280-60a44c3f2e8e",
                            "type_name": "deposit",
                            "balance": 20
                        },
                        {
                            "id": "3",
                            "name": "Основной 3",
                            "relatives_account": false,
                            "type_id": "7169a29e-7e3b-11e5-a280-60a44c3f2e8e",
                            "type_name": "deposit",
                            "balance": 100
                        }
                    ];
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            let user_id = {
                user_id: controller.getUserFromLocalSrorage().id
            };
            let r = await SendData('API_get_data_deposits', user_id, 1);
            let res = await JSON.parse(r);
            return res.deposits.deposit_list;
        }
    },

    async getBonuses() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = [
                        {
                            "id": "3504ba2e-ddd4-11ed-887e-18602486f03f",
                            "name": "б/с Основной",
                            "balance": 50
                        }
                    ];
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            let user_id = {
                user_id: controller.getUserFromLocalSrorage().id
            };
            let r = await SendData('API_get_data_bonuses', user_id, 1);
            let res = await JSON.parse(r);
            return res.bonuses.bonus_list;
        }
    },

    async getTrainings() {
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        "bonus_list": [
                            {
                                "id": "3504ba2e-ddd4-11ed-887e-18602486f03f",
                                "name": "б/с Основной",
                                "balance": 50
                            }
                        ],
                        "total_balance": 50
                    };
                    resolve(obj);
                }, 10);
            })
            return await promise;
        }
        else {
            // в разработке
            let obj = {
                "bonus_list": [],
                "total_balance": 0
            };
            return obj;
        }
    },

    async getCatalog() {

        if (isTest) {

            /*
            const response = await fetch("../data/catalog.json");
            const jsonData = await response.json();
            return jsonData;
            */

            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = [
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
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "5 Персональных Тренировок НЧК для Особых детей",
                            "serviceId": "613eb519-c934-11eb-b840-b8b990fa28bd",
                            "price": 8100
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Грудничковое плавание, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "541ca383-c937-11eb-b840-b8b990fa28bd",
                            "price": 6100
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Грудничковое плавание, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "6e26b6c5-c937-11eb-b840-b8b990fa28bd",
                            "price": 3660
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Грудничковое плавание, 2 раза в неделю, Абонемент на 3 месяца",
                            "serviceId": "a337a358-c937-11eb-b840-b8b990fa28bd",
                            "price": 16470
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Спортивное плавание, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "69c8886f-c939-11eb-b840-b8b990fa28bd",
                            "price": 9000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Спортивное плавание, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "0eed84b1-c93a-11eb-b840-b8b990fa28bd",
                            "price": 5400
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Спортивное плавание, 3 раза в неделю, Абонемент на 3 месяца",
                            "serviceId": "24357444-c93a-11eb-b840-b8b990fa28bd",
                            "price": 24300
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Синхронное плавание, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "d19f9de4-c93b-11eb-b840-b8b990fa28bd",
                            "price": 0
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Школа плавания, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "65b99118-c93c-11eb-b840-b8b990fa28bd",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Школа плавания, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "81b60cd8-c93c-11eb-b840-b8b990fa28bd",
                            "price": 3600
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Водные программы",
                            "groupId": "adec2822-e8bc-11ec-a79c-be828dd5501b",
                            "service": "Школа плавания, 2 раза в неделю, Абонемент на 3 месяца",
                            "serviceId": "9dee2396-c93c-11eb-b840-b8b990fa28bd",
                            "price": 16200
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия TRX Class,Абонемент на полмесяца.",
                            "serviceId": "a722c3fd-d02f-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия TRX Class, Абонемент на 1 МЕСЯЦ",
                            "serviceId": "b754dcf8-d02f-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Prenatal, Абонемент на 1 месяц",
                            "serviceId": "b3821c26-d030-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Танцевальные программы Абонемент на полмесяца",
                            "serviceId": "282070c6-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Body&Mind Абонемент на полмесяца",
                            "serviceId": "3e7cdf61-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия AeroDance Абонемент на полмесяца",
                            "serviceId": "555ed23e-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия BodyBallet Абонемент на полмесяца",
                            "serviceId": "719e0f95-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Yoga Prof Абонемент на полмесяца",
                            "serviceId": "8b526a26-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия CycleConnect Абонемент на полмесяца",
                            "serviceId": "9c1d1aaa-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Единоборства Prof  Абонемент на полмесяца",
                            "serviceId": "d766d51c-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия AntiGravity® Абонемент на полмесяца",
                            "serviceId": "f2858a2e-d051-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Body Transformation, Абонемент на полмесяца",
                            "serviceId": "056fca99-d052-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Step prof Абонемент на полмесяца",
                            "serviceId": "2bfe4e7a-d052-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Танцевальные программы Абонемент на 1 МЕСЯЦ",
                            "serviceId": "553ddc5c-d052-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия AeroDance Абонемент на 1 месяц",
                            "serviceId": "9a2d9c09-d052-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия BodyBallet Абонемент на 1 месяц",
                            "serviceId": "d2622cc5-d052-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Yoga Prof Абонемент на 1 месяц",
                            "serviceId": "ef8186d2-d052-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия CycleConnect Абонемент на 1 месяц",
                            "serviceId": "0418f61f-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Pump,Абонемент на 1 месяц",
                            "serviceId": "15882820-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Единоборства Prof  Абонемент на 1 месяц",
                            "serviceId": "27a0a1b7-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия AntiGravity® Абонемент на 1 месяц",
                            "serviceId": "82a5492e-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Body Transformation, Абонемент на 1 месяц ",
                            "serviceId": "9dd25788-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "Студия Step prof Абонемент на 1 месяц",
                            "serviceId": "c54ce8a3-d053-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Dance Mix, 2 раза в неделю, Абонемент на 1 месяц.",
                            "serviceId": "7179293d-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team ОФП, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "84dd09af-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Сайкл, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "971ba93d-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Здоровая спина, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "adb614cc-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Yoga, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "c4364712-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Единоборства, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "d379f4e3-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team TRX, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "eb5b02a9-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Total Body, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "fff9996f-d29f-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Step, 2 раза в неделю, Абонемент на 1 месяц ",
                            "serviceId": "230086d8-d2a0-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Body&mind, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "3de3ac98-d2a0-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Body&mind, 3 раза в неделю. Абонемент на полмесяца",
                            "serviceId": "5bd010d0-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team TRX, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "6b26d175-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Dance Mix 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "811cbc2d-d2a0-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Step, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "91264d0d-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Yoga, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "9d468305-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Бальные танцы, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "acd1b9a9-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Единоборства, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "cfc7f4e1-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Здоровая спина, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "dda13dcd-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team ОФП, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "e9ec5dcb-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Сайкл, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "f42631ee-d2a0-11eb-b841-c5c73f51df46",
                            "price": 3500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Body&mind, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "17be890d-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые программы",
                            "groupId": "51600136-4baf-11ed-a7a7-a78db2def573",
                            "service": "TF Team Dance Mix  3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "2774a890-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Step, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "343239ed-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team TRX, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "3ed9bc66-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Yoga, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "4ddd0bc2-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Total Body, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "5aadafc4-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Единоборства, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "68b42546-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Здоровая спина, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "76818323-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team ОФП, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "8a63bfc3-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Групповые занятия",
                            "groupId": "508f33a9-e89f-11ec-a79c-be828dd5501b",
                            "service": "TF Team Сайкл, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "9ce2c068-d2a1-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                            "serviceId": "b283583c-d2a2-11eb-b841-c5c73f51df46",
                            "price": 6650
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Персональных Тренировок\r\nКатегория тренера: Инструктор",
                            "serviceId": "9f8fee9f-d2a3-11eb-b841-c5c73f51df46",
                            "price": 18000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Сплит-тренировок\r\nКатегория тренера: Инструктор",
                            "serviceId": "d072844d-d2a3-11eb-b841-c5c73f51df46",
                            "price": 9975
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Сплит-тренировок\r\nКатегория тренера: Инструктор",
                            "serviceId": "e4c00b9b-d2a3-11eb-b841-c5c73f51df46",
                            "price": 18900
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Персональных тренировок\r\nКатегория тренера: Персональный тренер",
                            "serviceId": "332d4717-d2a4-11eb-b841-c5c73f51df46",
                            "price": 7600
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Персональных Тренировок\r\nКатегория тренера: Персональный тренер",
                            "serviceId": "4949563c-d2a4-11eb-b841-c5c73f51df46",
                            "price": 14400
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                            "serviceId": "7b7c1b02-d2a4-11eb-b841-c5c73f51df46",
                            "price": 0
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Сплит-тренировок\r\nКатегория тренера: Персональный тренер",
                            "serviceId": "93d45e0c-d2a4-11eb-b841-c5c73f51df46",
                            "price": 21600
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер 1",
                            "serviceId": "dd2e3976-d2a4-11eb-b841-c5c73f51df46",
                            "price": 9500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Персонильных Тренировок\r\nКатегория тренера: Мастер-тренер 1",
                            "serviceId": "f06bf302-d2a4-11eb-b841-c5c73f51df46",
                            "price": 18000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                            "serviceId": "1e42ea5e-d2a5-11eb-b841-c5c73f51df46",
                            "price": 0
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер",
                            "serviceId": "35aa6164-d2a5-11eb-b841-c5c73f51df46",
                            "price": 24300
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер",
                            "serviceId": "bf1e91b3-d2a5-11eb-b841-c5c73f51df46",
                            "price": 16200
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Персональных Тренировок\r\nКатегория тренера: Мастер-тренер",
                            "serviceId": "ccdffe67-d2a5-11eb-b841-c5c73f51df46",
                            "price": 8550
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "5 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер 1",
                            "serviceId": "142654ad-d2a6-11eb-b841-c5c73f51df46",
                            "price": 14250
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "10 Сплит-тренировок\r\nКатегория тренера: Мастер-тренер 1",
                            "serviceId": "30527ef9-d2a6-11eb-b841-c5c73f51df46",
                            "price": 27000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Start 5 Персональных Тренировок",
                            "serviceId": "aa2d345a-d2a6-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Танцевальная академия, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "0205f90e-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Танцевальная академия, 2 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "151ff114-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Break Dance Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "2505bf79-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Break Dance Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "3be5505c-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Hip-hop Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "4f1be551-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Hip-hop Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "5bf14df3-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Бальные Танцы Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "72e18f53-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Бальные Танцы Pro, 2 раза в неделю, Абонемент на  1 месяц",
                            "serviceId": "7b9dedb3-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Contemporary Dance, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "9043ac48-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Contemporary Dance, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "9ded4723-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Ballet Kids, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "b37f0d7b-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Ballet Kids, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "c503b6cc-d2a9-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Подготовка к мероприятиям, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "e3f8c0ac-d2a9-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Творческая группа, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "0e055c8b-d2aa-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Творческая группа, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "1b971f55-d2aa-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Художественная гимнастика Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "319eb097-d355-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Художественная гимнастика Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "57354206-d355-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Художественная гимнастика Pro, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "67cddf96-d355-11eb-b841-c5c73f51df46",
                            "price": 7500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Акробатика Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "78e73d0d-d355-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Акробатика Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "8ce3b2cb-d355-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Акробатика Pro, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "a6a8bd1a-d355-11eb-b841-c5c73f51df46",
                            "price": 7500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Cheerleading, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "ba7a4897-d355-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Cheerleading, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "ccacfb23-d355-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Малыш+, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "d5e667bb-d356-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Малыш+, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "e2fc39fb-d356-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Юный Гений, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "04a4beed-d357-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Юный Гений, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "154e1480-d357-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Шахматы Kids, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "c10d6b37-d35e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Шахматы Kids, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "cd7eb17c-d35e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Творческая Мастерская,1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "e14b78a0-d35e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Творческая Мастерская, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "f21fca7c-d35e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Бокс Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "66c01d14-d37d-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Карате Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "907e555d-d37d-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Карате Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "ad0c415d-d37d-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Дзюдо, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "cb107e8d-d37d-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Дзюдо, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "dd11221e-d37d-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Саибо, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "ee910559-d37d-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Самбо, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "fff44cd1-d37d-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Рукопашный бой, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "3ff20ffb-d37e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Рукопашный бой, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "6b2b1468-d37e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "TaeKwondo, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "859bc943-d37e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "TaeKwondo, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "92bd7e6e-d37e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "ММА Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "a7ed9c66-d37e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "ММА Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "bb7c68bb-d37e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Айкидо, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "d81f9e88-d37e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Айкидо, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "e6dfec6d-d37e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Кикбоксинг, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "0ba1c5f1-d37f-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Кикбоксинг, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "1aa02171-d37f-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Football Kids, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "fdcc06cc-d43d-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Football Kids, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "0b352590-d43e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Здоровые ножки, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "260e9246-d43e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Здоровые ножки, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "33ac28fd-d43e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Здоровая Спина, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "54a8c524-d43e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Здоровая Спина, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "64e6b62e-d43e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Roller Kids, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "7ac70eec-d43e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Roller Kids, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "93db9514-d43e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Spinning Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "ab85b901-d43e-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Spinning Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "ba2e62b7-d43e-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TerFit Kids, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "63700ac8-d43f-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TerFit Kids, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "738cab05-d43f-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Yoga Pro, 1 раз в неделю, Абонемент на 1 месяц",
                            "serviceId": "9ddbfb10-d43f-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "Yoga Pro, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "aa520282-d43f-11eb-b841-c5c73f51df46",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детские групповые занятия",
                            "groupId": "853ba8d8-4bb3-11ed-a7a7-a78db2def573",
                            "service": "Фитнес-каникулы",
                            "serviceId": "089dd8e1-d444-11eb-b841-c5c73f51df46",
                            "price": 9000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Functional, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "258bdee7-d446-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Functional, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "61d252ba-d446-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Functional, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "7d06857b-d446-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Functional, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "babc2398-d446-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Dance, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "04f87824-d447-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Dance, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "12f7e1a8-d447-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Dance, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "21aee4ae-d447-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Dance, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "36655231-d447-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Fight, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "b39f14b5-d447-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Fight, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "c10f761d-d447-11eb-b841-c5c73f51df46",
                            "price": 5250
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Fight, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "ce7fd710-d447-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Fight, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "dcc92e2e-d447-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Boxing, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "1acd7957-d448-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Boxing, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "22a29314-d448-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Boxing, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "2d6dd850-d448-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Boxing, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "4935dec5-d448-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Boxing Free, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "546546e1-d448-11eb-b841-c5c73f51df46",
                            "price": 0
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Kickboxing, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "7207c1b6-d448-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Kickboxing  3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "7d300274-d448-11eb-b841-c5c73f51df46",
                            "price": 5250
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Kickboxing 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "8e6ac076-d448-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Kickboxing  3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "9a9943e5-d448-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Team Школа шпагата, 2 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "b9387823-d448-11eb-b841-c5c73f51df46",
                            "price": 4500
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Школа шпагата, 3 раза в неделю, Абонемент на 1 месяц",
                            "serviceId": "c8323dab-d448-11eb-b841-c5c73f51df46",
                            "price": 6000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Школа шпагата, 2 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "cf43d69d-d448-11eb-b841-c5c73f51df46",
                            "price": 3000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "Детский фитнес",
                            "groupId": "22712c4c-e7d6-11ec-a7a5-a245e236df61",
                            "service": "TF Школа шпагата, 3 раза в неделю, Абонемент на полмесяца",
                            "serviceId": "f57a26bf-d448-11eb-b841-c5c73f51df46",
                            "price": 4000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "",
                            "groupId": "00000000-0000-0000-0000-000000000000",
                            "service": "Солярий 30 мин",
                            "serviceId": "fca0e934-d819-11eb-b843-b59ca3907358",
                            "price": 1222
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "",
                            "groupId": "00000000-0000-0000-0000-000000000000",
                            "service": "Солярий 100 мин",
                            "serviceId": "0eab15d9-d81a-11eb-b843-b59ca3907358",
                            "price": 3906
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "",
                            "groupId": "00000000-0000-0000-0000-000000000000",
                            "service": "Аренда \"Шкаф\" 1 мес+ \"Чистая форма\" 12 стирок",
                            "serviceId": "9835b7ce-d822-11eb-b843-b59ca3907358",
                            "price": 5000
                        },
                        {
                            "type": "Пакет услуг",
                            "group": "",
                            "groupId": "00000000-0000-0000-0000-000000000000",
                            "service": "Солярий 60 мин",
                            "serviceId": "8edc4321-f38a-11eb-b844-a1a76668f13c",
                            "price": 2394
                        }
                    ];
                    resolve(obj);
                }, 10);
            })
            return await promise;


        }
        else {
            // в разработке
            let obj = {
                "cart_list": []
            };
            return obj;
        }

    },

    // QR-код процесс
    async get_QR_pay_link(data) {
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
            let r = await SendData('QR_pay_debt', data, 1);
            let res = await JSON.parse(r);
            return res;
        }
    },

    async get_QR_inc_deposit(data) {
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
    },

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
    },

    async get_QR_pay_status(order_1c, signal) {

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

    },

    async get_QR_pay_calcel(order_1c) {
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
    },

    // POS-terminal
    async get_POS_pay_debt(data) {

        // начинаем ожидание оплаты картой
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        result: false,
                        error: "не открыта смена терминала"
                    };
                    resolve(obj);
                }, 1000);
            })
            return await promise;
        }
        else {
            let r = await SendData('POS_pay_debt', data, 1);
            let res = await JSON.parse(r);
            return res;
        }

    },

    async get_POS_inc_deposit(data) {

        // начинаем ожидание оплаты картой
        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        result: false,
                        error: "не открыта смена терминала"
                    };
                    resolve(obj);
                }, 1000);
            })
            return await promise;
        }
        else {
            let r = await SendData('POS_inc_deposit', data, 1);
            let res = await JSON.parse(r);
            return res;
        }

    },

    // deposit pay
    async get_deposit_pay_debt(data) {

        if (isTest) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let obj = {
                        result: false,
                        error: "Ошибка при списании с лицевого счета."
                    };
                    resolve(obj);
                }, 1000);
            })
            return await promise;
        }
        else {
            let r = await SendData('deposit_pay_debt', data, 1);
            let res = await JSON.parse(r);
            return res;
        }

    },

    saveLogOperation(data) {
        SendData('SaveLogOperation', data, 0);
    },



}