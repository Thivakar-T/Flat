import * as types from "../types";
export function getDog() {
  return {
    type: types.GET_DOG_REQUESTED,
  };
}

// refernece for post
// export function postDog(dog) {
//   return {
//     type: "types.XXXXX",
//     payload: dog,
//   };
// }
