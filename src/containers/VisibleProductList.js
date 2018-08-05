import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, filter) => {
    switch (filter) {
        case 'All':
            return products;
        default:
            return products.filter(p => p.categories.includes(filter));
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: getVisibleProducts(state.products, ownProps.filter),
    totalCount: state.products.length,
    categoryFilter: ownProps.filter
})

export default connect(
    mapStateToProps
)(ProductList)