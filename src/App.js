import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/cart';



function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<CartPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
