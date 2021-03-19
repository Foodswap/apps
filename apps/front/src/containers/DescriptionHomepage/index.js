import { connect } from 'react-redux';
import DescriptionHomepage from '../../components/DescriptionHomepage';

const mapStateToProps = (state) => ({
  isLoginOpen: state.user.isLoginOpen,
  isSignUpOpen: state.user.isSignUpOpen,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionHomepage);
