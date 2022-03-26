import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Flowers from './Components/Flowers/Flowers';

function App() {
  return (
    <div>
      <h1 className='text-success text-center mt-5'>"Life is the flower for which love is honey"</h1>
            <h3 className='text-danger text-center mt-3'>Please Choose Flower</h3>
      <Flowers></Flowers>
    </div>
  );
}

export default App;
