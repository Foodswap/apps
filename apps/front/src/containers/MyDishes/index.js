import { connect } from 'react-redux';
import MyDishes from '../../components/MyDishes';
import { deleteOneDish } from '../../actions/dishes';

const mapStateToProps = (state) => ({
  userDishes: state.recipes.userDishes,
  deleteMessage: state.recipes.deleteMessage,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDish: (id) => {
    const action = deleteOneDish(id);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDishes);
