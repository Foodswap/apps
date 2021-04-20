import { connect } from 'react-redux';
import MyDishes from '../components/MyDishes';
import {
  deleteOneDish,
  getAllDishesFromAUser,
  updateDishIdSelect,
  updateOpenDeleteModal,
} from '../actions/dishes-actions';
import { clearDishInformations } from '../actions/dishesForm-actions';

const mapStateToProps = (state) => ({
  userDishes: state.dishes.userDishes,
  deleteMessage: state.dishes.deleteMessage,
  userId: state.user.infos.id,
  dishIdSelect: state.dishes.dishIdSelect,
  openDeleteModal: state.dishes.openDeleteModal,
});

const mapDispatchToProps = (dispatch) => ({
  updateOpenDeleteModal: (openDeleteModal) => {
    const action = updateOpenDeleteModal(openDeleteModal);
    dispatch(action);
    console.log(`modal delete ${openDeleteModal}`);
  },

  updateDishIdSelect: (dishIdSelect) => {
    const action = updateDishIdSelect(dishIdSelect);
    dispatch(action);
    console.log(`dish Id select ${dishIdSelect}`);
  },

  canceldeletion: () => {
    const updateAction = updateDishIdSelect(null);
    const closeAction = updateOpenDeleteModal(false);
    dispatch(updateAction);
    dispatch(closeAction);
  },

  agreeToDelete: (dishIdSelect) => {
    const action = deleteOneDish(dishIdSelect);
    dispatch(action);
    console.log(`delete dish select is ${dishIdSelect}`);
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
