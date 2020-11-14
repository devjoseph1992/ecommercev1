import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionIsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionIsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps), 
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
