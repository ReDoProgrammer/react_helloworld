import './App.css';
import About from './components/About';
import Category from './components/Category';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Navbar/>
        <Course/>
        <About/>
        <Category/>
        <Registration/>
        <Team/>
        <Testimonial/>
    </div>
  );
}

export default App;
