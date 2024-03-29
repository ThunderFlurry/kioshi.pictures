import './App.styl';
import Component from 'react-pure-render/component';
import Footer from './Footer.react';
import Header from './Header.react';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  };

  render() {
    const {location: {pathname}, msg, users: {viewer}} = this.props;

    return (
      // Pass data-pathname to allow route specific styling.
      <div className="page" data-pathname={pathname}>
        <Helmet
          meta={[{
            name: 'description',
            content: 'Kioshi Pictures is a film company'
          }]}
          titleTemplate="%s - Kioshi Pictures"
        />
        {/* Pathname enforces rerender so activeClassName is updated. */}
        <Header msg={msg} pathname={pathname} viewer={viewer} />
        <RouterHandler {...this.props} />
        <Footer msg={msg.app.footer} />
      </div>
    );
  }

}

// // logRenderTime is useful for app with huge UI to check render performance.
// import logRenderTime from '../lib/logRenderTime';
// App = logRenderTime(App)

export default connect(mapStateToProps, mapDispatchToProps)(App);
