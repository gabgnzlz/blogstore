import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/Create';
import View from './pages/View';
import Store from './store/Store';

function App() {
  return (
    <>
    <Store>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:frameId' element={<View />} />
      </Routes>
    </BrowserRouter>
    </Store>
    </>
  );
}

export default App;
