import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
        {teamMembers.map(member => (
        <div>
          <h2>Name: {member.name}</h2>
          <h3>Email: {member.email}</h3>
          <h3>Role: {member.role}</h3>
        </div>)
        )}
    </div>
  );
}

export default App;
