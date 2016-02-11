import Button from './Button.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

if (process.env.IS_BROWSER)
  require('./Page.css');

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  };

  render() {
    const {msg: {home: msg}} = this.props;
    

    return (
      <div className="container"></div>
    );
  }

}
