import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CollectionPage = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[]);
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;


  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// const mapStateToprops = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
//   // this is necessary because unlike other selectors, this selelector needs a part of the state depending on the URL parameter
// });

// export default withRouter(connect(mapStateToprops)(CollectionPage));\
export default CollectionPage;
