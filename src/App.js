import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<h1>Test shop</h1>} />
      </Route>
    </Routes>
  );
};

export default App;