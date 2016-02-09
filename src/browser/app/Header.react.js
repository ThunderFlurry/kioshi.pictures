import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const {msg: {app: {links: msg}}, viewer} = this.props;

    return (
        <nav>
          <div activeClassName="nav-wrapper">
            <ul id="nav-mobile" activeClassName="right side-nav">
              <li><Link activeClassName="active" to="/todos">{msg.todos}</Link></li>
              <li><Link activeClassName="active" to="/me">{msg.me}</Link></li>
              {!viewer &&
                <li><Link activeClassName="active" to="/login">{msg.login}</Link></li>
              }
            </ul>
            <a activeClassName="button-collapse" href="#" data-activates="nav-mobile">
              <i activeClassName="mdi-navigation-menu"></i>
            </a>
          </div> 
        </nav>
    );
  }

}
