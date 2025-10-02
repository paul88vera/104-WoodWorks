import { baseApi } from "./base";

// @route    GET /cart
// @desc     Get all items in cart
// @access   Public
export function getCart(options) {
  return baseApi.get(`cart`, options).then((res) => res.data);
}

// @route    POST /cart
// @desc     Create an item in cart
// @access   Public
export function createCart(options) {
  return baseApi.post(`cart`, options).then((res) => res.data);
}

// @route    PUT /cart:id
// @desc     Update an item in cart by id
// @access   Public
export function updateCart(id, options, data) {
  return baseApi.put(`cart/${id}`, options, data).then((res) => res.data);
}

// @route    DELETE /cart:id
// @desc     Delete an item in cart by id
// @access   Public
export function deleteItemInCart(id) {
  return baseApi.delete(`cart/${id}`, { METHOD: "DELETE" }).then(() => {
    window.location.replace("/shop");
  });
}
