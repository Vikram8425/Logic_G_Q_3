import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Appjs from '../src/Compoents/Appjs'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="test/" element={<Appjs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
