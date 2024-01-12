import { baseApi } from "./base";

export function getShop(options) {
  return baseApi.get("shop", options).then((res) => res.data);
}

export function getShopItem(options, itemId) {
  return baseApi.get(`shop/${itemId}`, options).then((res) => res.data);
}
