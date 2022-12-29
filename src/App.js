import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';
import 'flowbite'

function App() {
  return (
    <div  className='relative'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
