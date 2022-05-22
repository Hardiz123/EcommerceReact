import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    const collectioRef = firestore.collection("collections");
    collectioRef.onSnapshot(async (snapshot) => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => {
            return (
              <CollectionsOverviewWithSpinner
                isLoading={this.state.loading}
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
                isLoading={this.state.loading}
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
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapdispatchToProps)(ShopPage);
