import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import ShopActionsTypes from './shop.types';

export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield fetchCollectionsFailure(error.message);
    }

}


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FECTH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}