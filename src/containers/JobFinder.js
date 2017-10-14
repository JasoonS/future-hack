import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import GooglePlaceAutocomplete from 'material-ui-places'
import AutoComplete from 'material-ui/AutoComplete'
import ChipInput from 'material-ui-chip-input'
import {  } from '../actions'
import { skillList, positionList } from '../constants'

class JobFinder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      isSelected: false,
      skills: [],
      lookingFor: '',
      lookingForSet: false,
    }
  }

  setAddressSearch = (event, other) =>
    this.setState({
      ...this.state,
      isSelected: false,
      address: event.target.value,
    })
  setAddress = (fullInfo, address) =>
    this.setState({
      ...this.state,
      isSelected: true,
      address,
    })
  setLookingFor = (event, lookingFor) =>
    this.setState({
      ...this.state,
      lookingFor,
      lookingForSet: true,
    })
  onTagAdded(tag) {
    this.setState({
      tags: [...this.state.tags, tag]
    })
  }

  onTagRemoved(tag, index) {
    this.setState({
      tags: this.state.tags.filter((tag, i) => i !== index)
    })
  }

  handleDelete = (i) => {
        let skills = this.state.skills
        skills.splice(i, 1)
        this.setState({ ...this.state, skills })
    }

    handleAddition = (tag) => {
        let skills = this.state.skills
        skills.push({
            id: skills.length + 1,
            text: tag
        });
        this.setState({ skills });
    }

  render() {
    const {
      skills,
      address
    } = this.state
    const inputProps = {
      value: this.state.address,
      onChange: this.setAddress
    }

    return (
      <div>
        <h3>Tell us about yourself:</h3>
        <AutoComplete
          hintText='Start Typing...'
          dataSource={ positionList }
          onNewRequest={ console.log }
          filter={ AutoComplete.fuzzyFilter }
          floatingLabelText='Your desired position. What kind of work are you looking for'
          fullWidth={true}
        />
        <br />
        <GooglePlaceAutocomplete
          hintText='Start Typing...'
          floatingLabelText='Around which area are you looking for work?'
          fullWidth={true}
          searchText={address}
          onChange={this.setAddressSearch}
          onNewRequest={this.setAddress}
          name={'location'}
        />
        <br />
        <ChipInput
          hintText='Start Typing...'
          floatingLabelText='Please select skills you have to match your job selection.'
          fullWidth={true}
          dataSource={skillList}
          onRequestDelete={this.handleDelete}
          onRequestAdd={this.handleAddition}
        />
        <br />
        <RaisedButton
          label='Enter'
          primary={true}
          fullWidth={true}
          onClick={this.submitEntryDeposit}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // user: state.user,
  }
}

export default connect(mapStateToProps)(JobFinder)
