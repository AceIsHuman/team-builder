import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <Form />
      <ul>
        {teamMembers.map(member => <li>member.name</li>)}
      </ul>
    </div>
  );
}

export default App;
