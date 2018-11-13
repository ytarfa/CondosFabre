import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import ENSingleUnit from './ENSingleUnit';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    pushCurrentRoute: pushCurrentRoute
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ENSingleUnit);