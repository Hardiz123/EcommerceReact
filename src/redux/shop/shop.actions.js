import ShopActionsTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FECTH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionsTypes.FECTH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsTypes.FECTH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchColeectionsStartAsync = () => {
//   return (dispatch) => {
//     dispatch(fetchCollectionsStart());
//     const collectionRef = firestore.collection("collections");
//     collectionRef
//       .get()
//       .then((snapShot) => {
//         const collectionMap = convertCollectionsSnapshotToMap(snapShot);
//         dispatch(fetchCollectionsSuccess(collectionMap));
//       })
//       .catch((error) => {
//         dispatch(fetchCollectionsFailure(error.message));
//       }); // this is a promise based call approach
//   };
// };
// this is for the normal redux-thunk approach