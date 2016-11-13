import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import axios from 'axios';

class DayStartEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isReady = this.isReady.bind(this);
  }

  handleChange(prop) {
    return (e, date) => {
      this.setState({ [prop]: date });
    };
  }

  isReady() {
    const { start, end } = this.state;
    return start && end;
  }

  handleSubmit() {
    const { start, end } = this.state;
    axios.get('/update', {
      params: {
        start: start.toLocaleTimeString(),
        end: end.toLocaleTimeString(),
      }
    })
      .then(() => { console.warn('yayyy'); })
      .catch(e => { console.warn(e); });
  }

  render() {
    const { start, end } = this.state;

    return (
      <div style={{ position: 'absolute', top: '35%', left:'40%'}}>
        <p>When does your day start?</p>
        <TimePicker
          value={start}
          onChange={this.handleChange('start')}
        />
        <p>When does your day end?</p>
        <TimePicker
          value={end}
          onChange={this.handleChange('end')}
        />
        <RaisedButton
          onClick={this.handleSubmit}
          label="Submit"
          primary
          disabled={!this.isReady()}
          style={{ position: 'relative', left: '30%' }}
        />
      </div>
    );
  }
}

export default DayStartEnd;
