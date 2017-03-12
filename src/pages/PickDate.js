import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDate } from '../stores/date-reducer/actionCreators';

import DatePicker from "react-datepicker";
require('react-datepicker/dist/react-datepicker.css');

class PickDate extends Component {
  constructor (props) {
    super(props);
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //to access router for next page
  static contextTypes = {
    router: PropTypes.object
  };

  handleChangeStart(date) {
    if (this.props.endDate && date > this.props.endDate) {
      this.props.setDate({startDate: this.props.endDate,
               endDate: date})
    } else {
      this.props.setDate({startDate: date,
               endDate: this.props.endDate});
    }
  }

  handleChangeEnd(date) {
    if (date < this.props.startDate) {
      this.props.setDate({startDate: date,
               endDate: this.props.startDate})
    } else {
      this.props.setDate({startDate: this.props.startDate,
               endDate: date});
    }
  }

  handleSubmit() {
    if (this.props.endDate) {
      //use router to go to next page
    }
  }

  render () {
    return (

    <div>
      <h2>When is your trip?</h2>
      <DatePicker
        selected={this.props.startDate}
        selectsStart  startDate={this.props.startDate}
        endDate={this.props.endDate}
        onChange={this.handleChangeStart} />
        <DatePicker
        selected={this.props.endDate}
        selectsEnd  startDate={this.props.startDate}
        endDate={this.props.endDate}
        onChange={this.handleChangeEnd} />
      <button
        onSubmit={this.handleSubmit}>
        Submit
      </button>
  </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    startDate: state.dates.startDate,
    endDate: state.dates.endDate
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setDate}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PickDate);
