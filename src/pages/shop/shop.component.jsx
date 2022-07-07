import React, { lazy, Suspense, useEffect } from "react";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
// import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";
const CollectionsOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview.container"));
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));
const ShopPage = ({fetchCollectionsStart, match}) =>  {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // }); this is a observable based approach


    // const res = await fetch("https://firestore.googleapis.com/v1/projects/crwn-db-40123/databases/(default)/documents/collections")
    // const collections = await res.json();
    // console.log(collections);
    // this is the async/await approach

    return (
      <div className="shop-page">
        <Suspense fallback={<div>Loading...</div>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={(props) => {
          //   return (
          //     <CollectionPageWithSpinner
          //       isLoading={!isCollectionsLoaded}
          //       {...props}
          //     />
          //   );
          // }}
          component={CollectionPageContainer}
        />
        </Suspense>
      </div>
    );

    }
const mapdispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapdispatchToProps)(ShopPage);
