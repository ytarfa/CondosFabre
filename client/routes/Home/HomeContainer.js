import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import Home from './Home';

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
) (Home);