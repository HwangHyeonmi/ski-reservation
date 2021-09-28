var express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
// 3000 포트로 서버 오픈

var db;
var url = process.env.DB_URL;
MongoClient.connect(url, { useUnifiedTopology: true }, function (에러, client) {
  if (에러) return console.log("에러를보여주세영", 에러);
  db = client.db("ski-reservation"); //todoapp이라는 database(폴더)에 연결!

  app.listen(process.env.PORT, function () {
    console.log("listening on 8080");
  });
});

app.get("/confirmReservation", function (req, res) {
  let id = req.body.id;
  let Orders = db.collection("payment-result");

  Orders.findOne({ _id: id }, function (에러, 결과) {
    console.log(결과);
    res.send(결과);
  });
});

app.post("/payments/complete", async (req, res) => {
  let Orders = db.collection("payment-result");
  try {
    const { imp_uid, merchant_uid } = req.body;
    /* 
    db.collection("payment-result").insertOne(
      { _id: merchant_uid, amout: amount, name: name },
      function (에러, 결과) {
        res.redirect("/");
        if (에러) {
          console.log("에러", 에러);
        } else {
          console.log("결과", 결과);
        }
      }
    ); */

    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
      data: {
        imp_key: "1756536913427822", // REST API 키
        imp_secret:
          "88ab18114c4c99e170f733d16a1aa6fd48a9e000361bbc8e8933cef9ff97a716fb431b1b7714aaa0", // REST API Secret
      },
    });
    const { access_token } = getToken.data.response; // 인증 토큰

    // imp_uid로 아임포트 서버에서 결제 정보 조회

    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`,
      method: "get", // GET method
      headers: { Authorization: access_token },
    });
    const paymentData = getPaymentData.data.response; // 조회한 결제 정보

    console.log("paymentData", paymentData);
    //DB에서 결제되어야 하는 금액 조회

    //결제 검증하기

    const { amount, status } = paymentData;

    //결제금액 일치. 결제 된 금액 ===결제 되어야 하는 금액

    switch (status) {
      case "paid":
        await Orders.insertOne(
          {
            _id: merchant_uid,
            amount: paymentData.amount,
            name: paymentData.buyer_name,
          },
          function (에러, 결과) {
            if (에러) {
              console.log(에러);
            } else {
              console.log(결과);
            }
          }
        );
        res.send({ status: "success", message: "일반결제성공" });
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
