import Category from '../components/Category';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';

function mapStateToProps (state) {
  return {
    options: state.category.options,
    category: state.category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
