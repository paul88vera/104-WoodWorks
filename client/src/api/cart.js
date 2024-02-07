import { baseApi } from "./base";

export function getCart(options) {
  return baseApi.get("cart", options).then((res) => res.data);
}
