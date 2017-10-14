import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import PlacesAutocomplete from 'react-places-autocomplete'
import AutoComplete from 'material-ui/AutoComplete'
import { WithContext as ReactTags } from 'react-tag-input'
import {  } from '../actions'
import { skillList, positionList } from '../constants'

class JobFinder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      skills: [],
      lookingFor: '',
      lookingForSet: false,
    }
  }

  setAddress = (address) =>
    this.setState({
      ...this.state,
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

    handleDrag = (tag, currPos, newPos) => {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

  render() {
    const {

      skills
    } = this.state
    const styles = {
      width: 150,
    }
    const inputProps = {
      value: this.state.address,
      onChange: this.setAddress
    }

    return (
      <div>
        <h2>Vehicle</h2>
        <h3>Tell us about yourself:</h3>
        <h5>What are you looking for?</h5>
        <AutoComplete
          hintText='Start Typing...'
          dataSource={ positionList }
          onNewRequest={ console.log }
          filter={AutoComplete.fuzzyFilter}
          floatingLabelText='Your desired position'
          fullWidth={true}
        />
        <br />
        <h5>Arround which area are you looking for work?</h5>
        <PlacesAutocomplete inputProps={inputProps} />
        <br />
        <ReactTags tags={skills}
          suggestions={skillList}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag} />
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
