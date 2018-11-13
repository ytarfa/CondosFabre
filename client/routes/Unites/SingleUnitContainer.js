import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';
import { openOverlay } from '../../actions/contactActions';

import SingleUnit from './SingleUnit';

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
) (SingleUnit);