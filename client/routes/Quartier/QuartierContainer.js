import { connect } from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';
import * as quartierActions from '../../actions/quartierActions';

import Quartier from './Quartier';

const mapStateToProps = state => {
    return {
        position: state.interfaceReducer.ypos,
        center: state.quartierReducer.center,
        zoom: state.quartierReducer.zoom,
        feature: state.quartierReducer.feature
    }
}

const mapDispatchToProps = {
    pushCurrentRoute: pushCurrentRoute,
    ...quartierActions
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) ( Quartier );