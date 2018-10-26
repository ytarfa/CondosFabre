import {connect} from 'react-redux';
import { pushCurrentRoute } from '../../actions/routingActions';

import Projet from './Projet';

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
) (Projet);