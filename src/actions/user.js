import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
          price: "1.99",
          belongsTo: [0, 1],
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
          price: "1.99",
          belongsTo: [0, 6],
        },
        quantity: 1,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 12.74,
        orderNumber: "UHG453NLLGJ",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Dr. B-Money",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 1.88,
        orderNumber: "ASFD7GH788S",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "casMULA",
          shippingAddress: "6969 Freemont Lane",
        },
      },
      {
        _id: 2,
        total: 6.49,
        orderNumber: "KJN34576BLKJ",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Melo",
          shippingAddress: "213 Seed Boulevard",
        },
      },
      {
        _id: 3,
        total: 19.32,
        orderNumber: "HGLJ3456KJH",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Cookie Monster",
          shippingAddress: "123 Sessame Street",
        },
      },
      {
        _id: 4,
        total: 9.66,
        orderNumber: "23L4NLK232K",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Dr. Watson",
          shippingAddress: "221b Baker Street",
        },
      },
      {
        _id: 5,
        total: 6.66,
        orderNumber: "KJ23B423KJN",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Dave",
          shippingAddress: "1154 N Western Avenue",
        },
      },
      {
        _id: 6,
        total: 4.2,
        orderNumber: "KJB3K4JB",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Dr. B-Money",
          shippingAddress: "420 Baker Street",
        },
      },
      {
        _id: 7,
        total: 4.69,
        orderNumber: "745CXHGC34",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Dave",
          shippingAddress: "1154 N Western Avenue",
        },
      },
    ],
  };
}
