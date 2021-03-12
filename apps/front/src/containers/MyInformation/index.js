import { connect } from 'react-redux';
import MyInformation from '../../components/MyInformation';

const mapStateToProps = (state) => ({
  username: state.user.pseudonym,
  email: state.user.email,
  city: state.user.city,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyInformation);
