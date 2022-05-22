import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchColeectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";




const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    const {fetchColeectionsStartAsync} = this.props;
    fetchColeectionsStartAsync();

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
    const { match, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => {
            return (
              <CollectionsOverviewWithSpinner
                isLoading={!isCollectionsLoaded}
                {...props}
              />
            );
          }}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => {
            return (
              <CollectionPageWithSpinner
                isLoading={!isCollectionsLoaded}
                {...props}
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapdispatchToProps = (dispatch) => ({
  fetchColeectionsStartAsync: () => dispatch(fetchColeectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapdispatchToProps)(ShopPage);
