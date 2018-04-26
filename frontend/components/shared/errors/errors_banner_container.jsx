import { connect } from 'react-redux';

import ErrorsBanner from './errors_banner';

const mapStateToPropsWithErrorType = errorType => {
  return state => ({
    errors: state.error[errorType]
  });
};

const mapDispatchToPropsWithClearErrors = customClearErrors => {
  return dispatch => ({
    clearErrors: () => dispatch(customClearErrors())
  });
};

export const createErrorsBannerContainer = (errorType, customClearErrors) => {
  return connect(
    mapStateToPropsWithErrorType(errorType),
    mapDispatchToPropsWithClearErrors(customClearErrors)
  )(ErrorsBanner);
};
