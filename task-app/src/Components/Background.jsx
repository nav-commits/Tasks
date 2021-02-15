import '../App.css';
import React, { useState } from 'react';

function Background() {
const [names, setNames] = useState('');
  return (
    <div>
       <div className="Back-ground">
          <h1 className="Tasks-header">Tasks</h1>
          <input onChange={(e)=>{ setNames(e.target.value)}} value={names} className="input-task" type="text"/>
          {names}
      </div>
    </div>
  );
}

export default Background;