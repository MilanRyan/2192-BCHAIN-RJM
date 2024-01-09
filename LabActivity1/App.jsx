import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import React from 'react'
import ParentComponent from './component/Parentcomponent';

function App() {

return (
// <>
// <div>
// <Hello/>
// <Welcome/>
// </div>
// </>
<div>
<h1>RYAN JOSHUA MILAN</h1>
 <Hello/>
 <Welcome/>
<h1>React Props Example</h1>
<ParentComponent/>
</div>
)
}

export default App;