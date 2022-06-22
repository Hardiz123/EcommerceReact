import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // }); this is a observable based approach


    // const res = await fetch("https://firestore.googleapis.com/v1/projects/crwn-db-40123/databases/(default)/documents/collections")
    // const collections = await res.json();
    // console.log(collections);
    // this is the async/await approach

  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
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
      </div>
    );
  }
}

const mapdispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapdispatchToProps)(ShopPage);
