import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

class DayStartEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop) {
    return (e) => {
      e.preventDefault();
      console.warn(e.value);
      this.setState({ [prop]: e.target.value });
    };
  }

  handleSubmit() {
    console.warn(this);
  }

  render() {
    const { start, end } = this.state;

    return (
      <div style={ { position: 'absolute', top: '35%', left:'40%'} }>
        <p style={{ fontFamily: 'Helvetica Neue', color: "#333333" }}> Enter your wakeup time: </p>
        <TimePicker hintText="12hr Format" value={start} onChange={this.handleChange('start')} /> <br />
        <p style={{ fontFamily: 'Helvetica Neue', color: "#333333"}}> Enter your bed time: </p>
        <TimePicker hintText="12hr Format" value={end} onChange={this.handleChange('end')} /> <br />
        <br />
        <br />
        <RaisedButton onClick={this.handleSubmit} label="Submit" primary={true} style={{ position: 'relative', left: '30%' }}/>
      </div>
    );
  }
}

export default DayStartEnd;
