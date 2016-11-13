import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginTop: '100px',
  margin: '200px',

};

const Home = () => (
  <div>
    <p style={{}}>Welcome to ScheduleMe</p>
    <RaisedButton label="Sign Up" primary style={style} />
  </div>
);

export default Home;
