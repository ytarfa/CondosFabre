import { connect } from "react-redux";

import Navbar from './Navbar';
import { openOverlay } from '../actions/contactActions';

const mapStateToProps = state => {
    return {
        ypos: state.interfaceReducer.ypos,
        route: state.routingReducer.route
    }
}

const mapDispatchToProps = {
    openContactOverlay: openOverlay
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Navbar);