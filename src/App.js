import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header';
import LeftDrawer from './components/LeftDrawer';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import JobFinder from './containers/JobFinder'
import JobResults from './containers/JobResults'
import InfoPull from './containers/InfoPull'
import Register from './containers/Register'
import LoginTest from './containers/LoginTest'
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        navDrawerOpen: false
      };
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.width !== nextProps.width) {
        this.setState({navDrawerOpen: nextProps.width === LARGE});
      }
    }

    handleChangeRequestNavDrawer() {
      this.setState({
        navDrawerOpen: !this.state.navDrawerOpen
      });
    }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };


    return (
      <div>
        <Header styles={styles.header}
                handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

          <LeftDrawer navDrawerOpen={navDrawerOpen}
                      menus={[
                        { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
                        { text: 'Form Page', icon: <Web/>, link: '/form' },
                        { text: 'Table Page', icon: <GridOn/>, link: '/table' },
                        { text: 'Login Page', icon: <PermIdentity/>, link: '/login' },
                      ]}
                      username="User Admin"/>

          <div style={styles.container}>
          <Router>
            <div className={'main-bounding-box'}>
              <Route exact path='/' component={Register}/>
              <Route path='/jobFinder' component={JobFinder}/>
              <Route path='/infoPull' component={InfoPull}/>
              <Route path='/jobResults' component={JobResults}/>
              <Route path='/test' component={LoginTest}/>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
