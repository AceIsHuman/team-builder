import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <ul>
        {teamMembers.map(member => <li>member.name</li>)}
      </ul>
    </div>
  );
}

export default App;
