import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Profile from './Profile.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Profile />
      </div>
    );
  }
}
export default App;
