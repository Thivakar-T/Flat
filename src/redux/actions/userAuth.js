import * as types from "../types";
export function getUserAuth() {
  return {
    type: types.GET_AUTH_REQUESTED,
  };
}

// refernece for post
// export function postDog(dog) {
//   return {
//     type: "types.XXXXX",
//     payload: dog,
//   };
// }
