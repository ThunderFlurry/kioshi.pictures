import AuthLogout from '../auth/Logout.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

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
