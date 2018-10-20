import {connect} from 'react-redux';
import { pushScrollValues } from './actions/interfaceActions';
import App from './App';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    pushScrollValues: pushScrollValues
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (App)