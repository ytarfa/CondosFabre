import { connect } from 'react-redux';

import ContactOverlay from './ContactOverlay';
import { closeOverlay } from '../actions/contactActions';

const mapStateToProps = state => {
    return {
        open: state.contactReducer
    }
};

const mapDispatchToProps = {
    closeOverlay: closeOverlay
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ContactOverlay)