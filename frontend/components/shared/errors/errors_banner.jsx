import React from 'react';

class ErrorsBanner extends React.Component {
  
  closeBanner() {
    return e => {
      this.props.clearErrors();
    }
  }

  willRender () {
    return Boolean(this.props.errors.length);
  }

  renderErrorsList () {
    return (
      <div className="errors-banner">
        <ul className="errors-banner-list">
          { this.props.errors.map(error => <li key={ error }>{ error }</li>)}
        </ul>
        <button className="errors-banner-close" onClick={ this.closeBanner() }>✕</button>
      </div>
    );
  }

  render () {
    return (
      <div>
        { this.willRender() ? this.renderErrorssList() : ""}
      </div>
    );
  }
}

export default ErrorsBanner;
