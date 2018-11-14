import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';
import { openOverlay } from '../../actions/contactActions';

import Home from './Home';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    pushCurrentRoute: pushCurrentRoute,
    openContactOverlay: openOverlay
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Home);