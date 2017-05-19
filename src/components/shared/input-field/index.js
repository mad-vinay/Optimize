import React from 'react';
import PropTypes from 'prop-types';
import Render from './Render';

class InputField extends React.Component {
  static propTypes = {
    styles: PropTypes.shape({}),
  };

  render() {
    const options = this.props;

    return Render.bind(this)(options);
  }

}

export default InputField;