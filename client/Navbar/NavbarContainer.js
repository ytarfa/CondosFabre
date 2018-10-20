import { connect } from "react-redux";
import Navbar from './Navbar';

const mapStateToProps = state => {
    return {
        ypos: state.interfaceReducer.ypos
    }
}

const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Navbar);