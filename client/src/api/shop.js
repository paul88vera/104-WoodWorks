import { baseApi } from "./base";

export function getShop(options) {
  return baseApi.get("shop", options).then((res) => res.data);
}

export function getShopItem(id, options) {
  return baseApi.get(`shop/${id}`, options).then((res) => res.data);
}

export function createItem(data, options) {
  return baseApi.post("shop", data, options).then((res) => res.data);
}

export function updateItem(id, data, options) {
  return baseApi.put(`shop/${id}`, data, options).then((res) => res.data);
}

export function deleteItem(id) {
  return baseApi.delete(`shop/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/shop");
  });
}
