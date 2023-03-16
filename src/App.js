import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Course from './components/Course';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Category />
      <Course />
      <Registration />
      <Team />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
