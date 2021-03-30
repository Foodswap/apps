import { connect } from 'react-redux';
import MyDishes from '../components/MyDishes';
import { deleteOneDish, getAllDishesFromAUser } from '../actions/dishes-actions';
import { clearDishInformations } from '../actions/dishesForm-actions';

const mapStateToProps = (state) => ({
  userDishes: state.dishes.userDishes,
  deleteMessage: state.dishes.deleteMessage,
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
  clearDishInformations: () => {
    const action = clearDishInformations();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDishes);
