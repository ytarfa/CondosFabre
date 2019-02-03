import { connect } from 'react-redux';

import MapElements from './MapElements';

const mapStateToProps = state => {
    return {
        feature: state.quartierReducer.feature
    }
}

const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) ( MapElements );