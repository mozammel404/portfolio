import './App.css';
import AppBar from './AppBar';
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-wraper">
      <AppBar/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
