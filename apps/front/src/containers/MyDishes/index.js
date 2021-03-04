import { connect } from 'react-redux';
import MyDishes from '../../components/MyDishes';

const mapStateToProps = (state) => ({
  userDishes: state.recipes.userDishes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyDishes);
