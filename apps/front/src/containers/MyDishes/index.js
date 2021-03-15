import { connect } from 'react-redux';
import MyDishes from '../../components/MyDishes';
import { deleteOneDish, getAllDishesFromAUser } from '../../actions/dishes';

const mapStateToProps = (state) => ({
  userDishes: state.recipes.userDishes,
  deleteMessage: state.recipes.deleteMessage,
  userId: state.user.infos.id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDish: (id) => {
    const action = deleteOneDish(id);
    dispatch(action);
  },
  getAListAllDishes: (userId) => {
    const action = getAllDishesFromAUser(userId);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDishes);
