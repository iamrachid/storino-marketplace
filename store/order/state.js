export default () => ({
  data: {
    "customer": {
      "firstname": "rachid",
      "lastname": "aissaoui",
      "email": "ra.elaissaoui@gmail.com"
    },
    "shipping": {
      "price": 0,
      "address": {
        "address1": "FERDOUSS 166,Ain Aouda",
        "country": {
          "_id": "5fe34e832c340e031376e650",
          "name": "Maroc"
        },
        "province": {
          "_id": "5fe34e832c340e031376e651",
          "name": "Tanger-Tétouan-Al Hoceïma"
        },
        "city": {
          "name": "RABAT"
        }
      }
    },
    "details": [
      {
        "product": {
          "_id": "623115497053dc0bfeb70c19"
        },
        "quantity": 1
      }
    ],
    "method": {
      "_id": "5feb408a2ef4130539efb9e0",
      "name": "CashOnDelivery"
    }
  },
  orderComplete: false,
});
