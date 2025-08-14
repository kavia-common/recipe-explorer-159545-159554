import React from 'react';
import './App.css';
import SignIn from './screens/SignIn';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root application component.
   * For this step, it renders the Sign In screen as the main view.
   */
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
