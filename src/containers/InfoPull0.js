import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class InfoPull extends Component {
  render() {
    return (
      <div>
        <h4>Report Vehicle Exit:</h4>
        <RaisedButton label='Enter your CV Details Manually' primary={true} fullWidth={true} onClick={console.log}/>
        <a
         href='https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=78uajvv7dsudha&redirect_uri=http://localhost:3000/signin-linkedin/&state=DCEeFWf45A53sdfKef424' >Pull data from LinkedIn.</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(InfoPull)
