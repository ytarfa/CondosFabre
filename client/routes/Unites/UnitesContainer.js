import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import Unites from './Unites';

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
) (Unites);