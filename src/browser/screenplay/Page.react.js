import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.object,
    msg: PropTypes.object,
    users: PropTypes.object
  }

  render() {

    return (
      <div className="me-page">
      </div>
    );
  }

}
