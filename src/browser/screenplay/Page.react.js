import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.object,
    msg: PropTypes.object,
    users: PropTypes.object
  };

  render() {
    const {msg: {screenplay: msg}} = this.props;

    return (
      <div className="home-page">
        <p>
          <FormattedHTMLMessage defaultMessage={msg.infoHtml} />
        </p>
        <div className="tocheck">
          <h2>{msg.toCheck.h2}</h2>
          <img alt="50x50 placeholder" src="/assets/img/50x50.png"/>
          <ul>
            {msg.toCheck.list.map(({key, text}) =>
              <li key={key}>
                <FormattedHTMLMessage defaultMessage={text} />
              </li>
            )}
            <li>
              {msg.toCheck.isomorphicPage}{' '}
              <Link to="/this-is-not-the-web-page-you-are-looking-for">404</Link>
            </li>
            <li>
              {msg.toCheck.andMuchMore}
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
