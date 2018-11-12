import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import SingleUnit from './SingleUnit';

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
) (SingleUnit);