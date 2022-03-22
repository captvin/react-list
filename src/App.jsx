import React from 'react';
import Utama from './Pages/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div> <hr />
        <Link to="/">Agenda</Link> &nbsp;
        <Link to="/keranjang">Keranjang</Link><hr />
        <p><Utama/></p>
      </div>
    )    
  }
}

export default App;
