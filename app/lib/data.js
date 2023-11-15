import { Product, User } from "./models";
import { connectToDB } from "./utils";
import userData from "../data/userData.json";
import productData from "../data/productData.json";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const filterUser = async (id) => {
  try {
    const user = await userData.filter(function (u) {
      return u.id === id;
    });

    return user.length > 0
      ? user[0]
      : {
          id,
          username: "-",
          email: "-",
          createdAt: "-",
          isAdmin: false,
          isActive: false,
          img: "",
        };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to filter user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const filterProduct = async (id) => {
  try {
    const product = await productData.filter(function (p) {
      return p.id === id;
    });

    return product.length > 0
      ? product[0]
      : {
          id,
          title: "",
          price: "",
          stock: "",
          color: "",
          size: "",
          cat: "",
          desc: "",
        };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to filter product!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
