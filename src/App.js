import React from 'react';
import Example from './Example';
import Example1 from './Example1';
import NameForm from './NameForm';
import UseScreenWidth from './UseScreenWidth';
import LifeCycle from './LifeCycle';

const App = () => (
  <div className='container'>
    <h1>CRUD App with Hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        <h2>Add user</h2>
      </div>
      <div className='flex-large'>
        <h2>View users</h2>
      </div>
    </div>
    <Example />
    <Example1 />
    <NameForm />
    <UseScreenWidth />
    <LifeCycle />
  </div>
);

export default App;
