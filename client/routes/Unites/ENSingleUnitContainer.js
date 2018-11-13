import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';
import { openOverlay } from '../../actions/contactActions';

import ENSingleUnit from './ENSingleUnit';

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
) (ENSingleUnit);