import './App.css';
import CarCard from './components/CarCrad/CarCrad';
import Navbar from './components/Navbar/Navbar';
import ProgressBar from './components/ProgressBar/ProgressBar';

const App = () => {
  return (
    <>
      <div className="grid-container">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <Navbar/>
      <ProgressBar/>
    </>
  );
};

export default App;
