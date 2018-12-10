import { connect } from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import Quartier from './Quartier';

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
) ( Quartier );