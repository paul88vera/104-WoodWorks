import { baseApi } from "./base";

// @route    GET /user/profile/user_id
// @desc     Get user profile page
// @access   Private
export function getProfile(id, options) {
  return baseApi.get(`user/profile/${id}`, options).then((res) => res.data);
}

// @route    POST /user/profile
// @desc     Create a profile page
// @access   Private
export function createProfile(data, options) {
  return baseApi.post(`user/profile`, data, options).then((res) => res.data);
}
