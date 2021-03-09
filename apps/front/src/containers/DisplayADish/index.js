import { connect } from 'react-redux';
import DisplayADish from '../../components/DisplayADish';

const mapStateToProps = (state) => ({
  dish: state.recipes.dishSelect,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayADish);
