import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY,
} from "./types";

export function filterProductsWithQuery(fields) {
  return {
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields,
  };
}

export function filterProductsWithCategoryId(_id) {
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id,
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,
    payload: [
      {
        _id: 0,
        title: "All",
      },
      {
        _id: 1,
        title: "JavaScript",
      },
      {
        _id: 2,
        title: "UI/UX",
      },
      {
        _id: 3,
        title: "Linux",
      },
      {
        _id: 4,
        title: "Python",
      },
      {
        _id: 5,
        title: "UML",
      },
      {
        _id: 6,
        title: "Ruby",
      },
    ],
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 1,
        title: "Graph Database",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 6],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 2,
        title: "Full Stack Development",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 1, 4],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 3,
        title: "JavaScript Development",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 4,
        title: "User Interface Design",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 2],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 5,
        title: "User Experience Design",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 2],
        imageUrl: "http://via.placeholder.com/80x80",
      },
      {
        _id: 6,
        title: "Advanced Object Oriented Programming",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
        price: "1.99",
        belongsTo: [0, 6],
        imageUrl: "http://via.placeholder.com/80x80",
      },
    ],
  };
}
