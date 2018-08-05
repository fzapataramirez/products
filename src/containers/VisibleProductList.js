import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, filter) => {
    switch (filter) {
        case 'All':
            return products;
        default:
            return products.filter(p=> p.categories.includes(filter));
    }
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products, state.categoryFilter),
    totalCount: state.products.length,
    categoryFilter: state.categoryFilter
})

export default connect(
    mapStateToProps    
)(ProductList)