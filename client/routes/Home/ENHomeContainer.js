import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import ENHome from './ENHome';

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
) (ENHome);