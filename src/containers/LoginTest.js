import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class InfoPull extends Component {
  switchPage = () => this.props.history.push('/foo')
  render() {
    return (
      <div>
        <h4>Report Vehicle Exit:</h4>
        <RaisedButton label='Enter your CV Details Manually' primary={true} fullWidth={true} onClick={console.log}/>
        <a href='https://www.facebook.com/v2.10/dialog/oauth?client_id=1490935697626897&redirect_uri=http://localhost:3000/infoPull/' >Pull data from LinkedIn.</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(InfoPull)
