import { baseApi } from "./base";

// @route    GET /shop
// @desc     Get all shop items
// @access   Public
export function getShop(options) {
  return baseApi.get("shop", options).then((res) => res.data);
}

// @route    GET /shop/item_id
// @desc     Get shop item by ID
// @access   Public
export function getShopItem(id, options) {
  return baseApi.get(`shop/${id}`, options).then((res) => res.data);
}

// @route    POST /shop
// @desc     Create shop item if logged in as ADMIN
// @access   Private
// @role     ADMIN
export function createItem(data, options) {
  return baseApi.post("shop", data, options).then((res) => res.data);
}

// @route    PUT /shop/item_id
// @desc     Update shop item by ID if logged in as ADMIN
// @access   Private
// @role     ADMIN
export function updateItem(id, data, options) {
  return baseApi.put(`shop/${id}`, data, options).then((res) => res.data);
}

// @route    DELETE /shop/item_id
// @desc     Delete shop item by ID if logged in as ADMIN
// @access   Private
// @role     ADMIN
export function deleteItem(id) {
  return baseApi.delete(`shop/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/shop");
  });
}
