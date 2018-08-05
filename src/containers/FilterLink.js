import { connect } from 'react-redux';
import Link from '../components/Link';
import { setCategoryFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({    
    selected: ownProps.filter === state.categoryFilter
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setCategoryFilter(ownProps.filter))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)