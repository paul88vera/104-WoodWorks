import { baseApi } from "./base";

// @route    GET /cart
// @desc     Get all items in cart
// @access   Public
export function getCart(options) {
  return baseApi.get(`cart`, options).then((res) => res.data);
}
