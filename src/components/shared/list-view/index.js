import React from 'react';
import PropTypes from 'prop-types';
import Render from './Render';

const {string, array, object, func} = PropTypes;

class List extends React.Component {
  static propTypes = {
    data: array,
    renderItem: func,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const props = this.props;

    return Render.bind(this)(props);
  }

}

export default List;
