const express = require('express')
const app = express()
const port = 80
const cheerio = require('cheerio')
const axios = require('axios');
const bodyParser = require("body-parser");

// GLOBAL VARIABLES
var hider = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "id-ID",
    "Content-Type": "application/x-www-form-urlencoded",
    "origin": "https://www.codashop.com",
    "referer": "https://www.codashop.com/",
    "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Mobile Safari/537.36",
    "x-session-country2name": "ID",
    "x-xsrf-token": "null"
}
var header = {
    'Content-Type': 'application/json',
    'Host': 'api.duniagames.co.id',
    'Origin': 'https://duniagames.co.id',
    'Referer': 'https://duniagames.co.id/',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Mobile Safari/537.36'
}



app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/trueid/valorant', function (req, res, next) {
    let id = req.body.id;

    let datas = {
        'voucherPricePoint.id': 75224,
        'voucherPricePoint.price': 800000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': id,
        'user.zoneId': '',
        'msisdn': '',
        'msisdn': '',
        'voucherTypeName': 'VALORANT',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': ''
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            console.log(resp.data)
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
});




app.get('/trueid/lmobile', function (req, res, next) {
    let id = req.query.id;

    let datas = {
        'voucherPricePoint.id': 50030,
        'voucherPricePoint.price': 250000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': id,
        'user.zoneId': '1051',
        'msisdn': '',
        'voucherTypeName': 'LORDS_MOBILE',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': ''
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
});






app.get('/trueid/marvelsw', function (req, res, next) {
    let id = req.query.id;

    let datas = {
        'voucherPricePoint.id': 276522,
        'voucherPricePoint.price': 75000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': id,
        'user.zoneId': '1051',
        'msisdn': '',
        'voucherTypeName': 'MARVEL_SUPER_WAR',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': ''
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
});









app.get('/trueid/ragnarok', function (req, res, next) {
    let id = req.query.id;
    let srv = req.query.server;

    var zone = "";
    var exUserInfo = "";

    srv == "EL" ? (
        zone = 90001,
        exUserInfo = "Eternal Love"
    ) : (srv == "MP") ? (
        zone = 90002,
        exUserInfo = "Midnight Party"
    ) : (srv == "MOF") ? (
        zone = 90002003,
        exUserInfo = "Memory of Faith"
    ) : (!0)

    let datas = {
        'voucherPricePoint.id': 127005,
        'voucherPricePoint.price': 15000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': id,
        'user.zoneId': zone,
        'msisdn': '',
        'voucherTypeName': 'GRAVITY_RAGNAROK_M',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': '',
        'exUserInfo': exUserInfo
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
});























app.get('/trueid/draja', function (req, res, next) {
    let id = req.query.id;

    let datas = {
        'voucherPricePoint.id': 75583,
        'voucherPricePoint.price': 75000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': id,
        'user.zoneId': '',
        'msisdn': '',
        'voucherTypeName': 'ZULONG_DRAGON_RAJA',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': ''
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
});
































app.get('/trueid/sausageman', (req, res) => {
    let id = req.query.id;

    axios.get('https://xdg-hk.xd.com/api/v1/user/get_role?client_id=zuRsHFfcY2KtVql3&server_id=global-release&character_id=' + id, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Mobile Safari/537.36'
    }).then(resp => {
        if (resp.data.data !== null) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.name,
                'playerid': id

            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        } else {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    })
})


app.get('/trueid/callofduty', (req, res) => {
    let id = req.query.id;
    let data = {
        "productId": 18,
        "itemId": 95,
        "catalogId": 151,
        "paymentId": 835,
        "gameId": id,
        "product_ref": "REG",
        "product_ref_denom": "REG"
    }
    axios({
        url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
        method: 'POST',
        data: data,
        headers: header
    }).then((resp) => {
        if (resp.data.data.gameDetail.hasOwnProperty("userName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.gameDetail.userName,
                'playerid': id

            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        }
    }).catch(e => {
        if (e.response.status === 400) {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    });

})





app.get('/trueid/freefire', (req, res) => {
    let id = req.query.id;
    let data = {
        "productId": 3,
        "itemId": 16,
        "catalogId": 71,
        "paymentId": 755,
        "gameId": id,
        "product_ref": "REG",
        "product_ref_denom": "REG"
    }
    axios({
        url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
        method: 'POST',
        data: data,
        headers: header
    }).then((resp) => {
        if (resp.data.data.gameDetail.hasOwnProperty("userName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.gameDetail.userName,
                'playerid': id

            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        }
    }).catch(e => {
        if (e.response.status === 400) {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    });

})





app.get('/trueid/mobilelegends', (req, res) => {
    let id = req.query.id;
    let zone = req.query.zone;
    let data = {
        "productId": 1,
        "itemId": 59,
        "catalogId": 114,
        "paymentId": 320,
        "gameId": id,
        "zoneId": zone,
        "product_ref": "REG",
        "product_ref_denom": "REG"
    }
    axios({
        url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
        method: 'POST',
        data: data,
        headers: header
    }).then((resp) => {
        if (resp.data.data.gameDetail.hasOwnProperty("userName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.gameDetail.userName,
                'playerid': id

            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        }
    }).catch(e => {
        if (e.response.status === 400) {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    });

})




app.get('/trueid/aov', (req, res) => {
    let id = req.query.id;
    let data = {
        "productId": 4,
        "itemId": 22,
        "catalogId": 77,
        "paymentId": 350,
        "gameId": id,
        "product_ref": "REG",
        "product_ref_denom": "REG"
    }
    axios({
        url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
        method: 'POST',
        data: data,
        headers: header
    }).then((resp) => {
        if (resp.data.data.gameDetail.hasOwnProperty("userName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.gameDetail.userName,
                'playerid': id

            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        }
    }).catch(e => {
        if (e.response.status === 400) {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    });

})





app.get('/trueid/pointblank', (req, res) => {
    let id = req.query.id;
    let data = {
        "productId": 17,
        "itemId": 87,
        "catalogId": 143,
        "paymentId": 827,
        "gameId": id,
        "product_ref": "REG",
        "product_ref_denom": "REG"
    }
    axios({
        url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
        method: 'POST',
        data: data,
        headers: header
    }).then((resp) => {
        if (resp.data.data.gameDetail.hasOwnProperty("userName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.data.gameDetail.userName,
                'playerid': id

            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        }
    }).catch(e => {
        if (e.response.status === 400) {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    });

})





// HIGGS 
app.get('/trueid/higgsdomino', (req, res) => {
    let id = req.query.id;
    axios({
        url: 'https://www.bosbosgames.com/web/infullRequest.do',
        method: 'POST',
        data: new URLSearchParams(Object.entries({
            'userId': id,
            'costKey': 'com.neptune.domino.berliancard0035',
            'infullType': 13,
            'version': ''
        })).toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': '_ga=GA1.2.298876061.1652097083; _gid=GA1.2.1859066530.1654426776; aliyungf_tc=7f81248f2e832e4a3ea67cf14a5791629061b6016866ffb0391a681cb00325ef',
            'Host': 'www.bosbosgames.com',
            'Origin': 'https://www.bosbosgames.com',
            'Referer': 'https://www.bosbosgames.com/web/webInfull.do',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Mobile Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then(resp => {
        if (resp.data.message.hasOwnProperty("nickName")) {
            let array = {
                'status': 200,
                'nickname': resp.data.message.nickName,
                'playerid': id

            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json(array)
        } else {
            let array = {
                'status': 400,
                'error_msg': 'Invalid ID'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        }
    })
})




// app.get('/trueid/freefire', (req, res) => {
//     let datas = {
//         'voucherPricePoint.id': 270223,
//         'voucherPricePoint.price': 5000000.0,
//         'voucherPricePoint.variablePrice': 0,
//         'n': '6/10/2022-1912',
//         'email': '',
//         'userVariablePrice': 0,
//         'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
//         'user.userId': req.query.id,
//         'user.zoneId': '',
//         'msisdn': '',
//         'voucherTypeName': 'FREEFIRE',
//         'shopLang': 'id_ID',
//         'checkoutId': '',
//         'affiliateTrackingId': '',
//         'impactClickId': '',
//         'anonymousId': ''
//     }

//     axios({
//         url: "https://order-sg.codashop.com/initPayment.action",
//         method: "POST",
//         data: new URLSearchParams(Object.entries(datas)).toString(),
//         headers: hider
//     }).then((resp) => {

//         if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
//             let array = {
//                 'status': 400,
//                 'error_msg': 'Too many attempts, plz wait 5 seconds'
//             }
//             res.set('Content-Type', 'application/json');
//             res.setHeader('Content-Type', 'application/json');
//             res.status(400);
//             res.json(array)
//         } else {
//             if (resp.data.success) {
//                 let array = {
//                     'status': 200,
//                     'nickname': resp.data.confirmationFields.roles[0].role,
//                     'playerid': req.query.id

//                 }
//                 res.set('Content-Type', 'application/json');
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(200);
//                 res.json(array)
//             } else {
//                 let array = {
//                     'status': 400,
//                     'error_msg': 'Invalid ID'
//                 }
//                 res.set('Content-Type', 'application/json');
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(400);
//                 res.json(array)
//             }
//         }



//     }).catch((err) => {
//         console.log(err)
//     })
// })










// // CODA ML

// app.get('/trueid/mobilelegends', (req, res) => {
//     let datas = {
//         'voucherPricePoint.id': 271326,
//         'voucherPricePoint.price': 1332000.0,
//         'voucherPricePoint.variablePrice': 0,
//         'n': '6/10/2022-1912',
//         'email': '',
//         'userVariablePrice': 0,
//         'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
//         'user.userId': req.query.id,
//         'user.zoneId': req.query.zone,
//         'msisdn': '',
//         'msisdn': '',
//         'voucherTypeName': 'MOBILE_LEGENDS',
//         'shopLang': 'id_ID',
//         'checkoutId': '',
//         'affiliateTrackingId': '',
//         'impactClickId': '',
//         'anonymousId': ''
//     }

//     axios({
//         url: "https://order-sg.codashop.com/initPayment.action",
//         method: "POST",
//         data: new URLSearchParams(Object.entries(datas)).toString(),
//         headers: hider
//     }).then((resp) => {

//         if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
//             let array = {
//                 'status': 400,
//                 'error_msg': 'Too many attempts, plz wait 5 seconds'
//             }
//             res.set('Content-Type', 'application/json');
//             res.setHeader('Content-Type', 'application/json');
//             res.status(400);
//             res.json(array)
//         } else {
//             if (resp.data.success) {
//                 let array = {
//                     'status': 200,
//                     'nickname': decodeURIComponent(resp.data.confirmationFields.username),
//                     'playerid': req.query.id

//                 }
//                 res.set('Content-Type', 'application/json');
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(200);
//                 res.json(array)
//             } else {
//                 let array = {
//                     'status': 400,
//                     'error_msg': 'Invalid ID or Zone'
//                 }
//                 res.set('Content-Type', 'application/json');
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(400);
//                 res.json(array)
//             }
//         }



//     }).catch((err) => {
//         console.log(err)
//     })
// })





// CODA BGMI

app.get('/trueid/bgmi', (req, res) => {
    let datas = {
        'voucherPricePoint.id': 211925,
        'voucherPricePoint.price': 7500.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': req.query.id,
        'user.zoneId': '',
        'msisdn': '',
        'msisdn': '',
        'voucherTypeName': 'BATTLE_GROUND',
        'shopLang': 'en_IN',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': ''
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            if (resp.data.confirmationFields.hasOwnProperty("username")) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Zone'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
})




// CODA GENSIN

app.get('/trueid/gensin', (req, res) => {
    let server = req.query.server;
    var reg, zone;
    (server == "ASIA") ? (
        reg = "Asia",
        zone = "os_asia"
    ) : (server == "AME") ? (
        reg = "America",
        zone = "os_usa"
    ) : (server == "EU") ? (
        reg = "Europe",
        zone = "os_euro"
    ) : (server == "CN") ? (
        reg = "TW, HK, MO",
        zone = "os_cht"
    ) : (!0)
    let datas = {
        'voucherPricePoint.id': 116139,
        'voucherPricePoint.price': 1599000.0,
        'voucherPricePoint.variablePrice': 0,
        'n': '6/10/2022-1912',
        'email': '',
        'userVariablePrice': 0,
        'order.data.profile': 'eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ==',
        'user.userId': req.query.id,
        'user.zoneId': zone,
        'msisdn': '',
        'msisdn': '',
        'voucherTypeName': 'GENSHIN_IMPACT',
        'shopLang': 'id_ID',
        'checkoutId': '',
        'affiliateTrackingId': '',
        'impactClickId': '',
        'anonymousId': '',
        'exUserInfo': reg
    }

    axios({
        url: "https://order-sg.codashop.com/initPayment.action",
        method: "POST",
        data: new URLSearchParams(Object.entries(datas)).toString(),
        headers: hider
    }).then((resp) => {

        if (resp.data.hasOwnProperty('RESULT_CODE') && resp.data.RESULT_CODE == 10001) {
            let array = {
                'status': 429,
                'error_msg': 'Too many attempts, plz wait 5 seconds'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(400);
            res.json(array)
        } else {
            console.log(resp.data)
            if (resp.data.success && resp.data.errorMsg.length == 0) {
                let array = {
                    'status': 200,
                    'nickname': decodeURIComponent(resp.data.confirmationFields.username),
                    'playerid': req.query.id

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            } else {
                let array = {
                    'status': 400,
                    'error_msg': 'Invalid ID or Server'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            }
        }



    }).catch((err) => {
        console.log(err)
    })
})


// BANK

app.get('/bank/bni', (req, res) => {
    let norek = req.query.norek;
    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': '009',
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }
    })
})


app.get('/bank/bca', (req, res) => {
    let norek = req.query.norek;
    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': '014',
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }
    })
})





app.get('/bank/mandiri', (req, res) => {
    let norek = req.query.norek;
    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': '008',
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }
    })
})






app.get('/bank/bsi', (req, res) => {
    let norek = req.query.norek;
    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': '451',
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }
    })
})


app.get('/bank/bri', (req, res) => {
    let norek = req.query.norek;
    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': '002',
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }

    })
})




app.get('/bank/all', (req, res) => {
    let norek = req.query.norek;
    let kode = req.query.kode;

    let data = {
        'auth_username': 'renzichwan',
        'requests[send_money][amount]': 10000,
        'app_version_name': '21.12.22',
        'requests[send_money][action]': 'check',
        'requests[send_money][bank]': kode,
        'requests[send_money][account_number]': norek,
        'app_version_code': 211222,
        'auth_token': '671089:mXyZ6sATzWN8b4dRgILUfjlpvJaxBESh',
        'requests[send_money][branch]': '',
        'app_reg_id': ''
    };


    axios({
        url: 'https://app.orderkuota.com/api/v2/get',
        method: 'POST',
        data: new URLSearchParams(Object.entries(data)).toString(),
        headers: {
            'Host': 'app.orderkuota.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'okhttp/4.9.0',
            'Connection': 'close'
        }
    }).then(resp => {
        if (resp.data.send_money.success == false) {
            let array = {
                'status': 501,
                'error_msg': 'Bank sedang gangguan'
            }
            res.set('Content-Type', 'application/json');
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.json(array)
        } else {
            let name = resp.data.send_money.results.account_name;
            if (name === "INVALID_ACCOUNT_NUMBER") {
                let array = {
                    'status': 404,
                    'error_msg': 'Norek tidak terdaftar'
                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(400);
                res.json(array)
            } else {
                let array = {
                    'status': 200,
                    'norek': norek,
                    'nama': name

                }
                res.set('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                res.json(array)
            }
        }

    })
})


// SCRAP



app.get('/goto', async (req, res) => {
    let item = req.query.item;
    let url = req.query.url;
    let user = req.query.user;
    let cookie = req.query.cookie;
    let arrayx = [];
    let data;

    let config = {
        headers: {
            'cookie': 'user=' + user + '; token=' + cookie,
            'referer': 'https://digiit.web.id/search/?q=OVO&page=2&urutan=terbaru',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
        },
        url: url + '/kategori/' + item + '&urutan=murah',
        method: 'GET'
    }

    console.log(config)


    try {
        const res = await axios(config);
        data = res.data;
    } catch (v) {
        console.log(v)
    }


    const $ = cheerio.load(data);

    try {
        for (var vex of $('#first > div.col-12.d-flex.justify-content-center > nav > ul').find('li')) {


            let reqx = await axios({
                headers: {
                    'cookie': 'user=' + user + '; token=' + cookie,
                    'referer': 'https://digiit.web.id/search/?q=OVO&page=2&urutan=terbaru',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
                },
                url: $(vex).find('a').attr('href'),
                method: 'GET'
            })

            console.log("Scraping Page " + $(vex).find('a').attr('href'))

            let imagine = cheerio.load(reqx.data);

            for (const val of imagine('#first > div.row').children()) {
                try {

                    let conf = {
                        headers: {
                            'cookie': 'user=' + user + '; token=' + cookie,
                            'referer': 'https://digiit.web.id/search/?q=OVO&page=2&urutan=terbaru',
                            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
                        },
                        url: url + '' + imagine(val).find('a').attr('href'),
                        method: 'GET'
                    }
                    let resp = await axios(conf);

                    var hypen = cheerio.load(resp.data);
                    let links = imagine(val).find('a').attr('href');
                    let filter1 = hypen('.content-body > hr').get(0);
                    let filter2 = hypen(filter1).get(0);
                    let descpan = filter2.next.data.trim();
                    let descpen = hypen('.content-body > h4').text();
                    let title = imagine(val).find('.title').text();
                    let price = imagine(val).find('.price').text();
                    let img = hypen('#custCarousel > div > div > img').attr('src');
                    let kondisi = hypen('body > div.container > div.row.mt-4.mb-4 > div > div > div > main > article > dl > dd:nth-child(2)').text();
                    let tanggal = hypen('body > div.container > div.row.mt-4.mb-4 > div > div > div > main > article > dl > dd:nth-child(4)').text();

                    let array = {
                        'title': title,
                        'price': price,
                        'desc_pendek': descpen,
                        'desc_panjang': descpan,
                        'img': img,
                        'kondisi': kondisi,
                        'tanggal': tanggal,
                        'checkout': links
                    };

                    arrayx.push(array)

                } catch (s) {
                    console.log(s)
                }
            }





        }
    } catch (e) {
        console.log(e)
    }

    res.send(JSON.stringify(arrayx))

})








app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});









app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
