import { Link, Routes,Route} from 'react-router-dom'
import View_user from './pages/View_user';
import Adduser from './pages/Adduser';
function App() {
  return (
    
      <Routes>
        <Route path='/'  element={<View_user/>} />
        <Route path='/add_user' element={<Adduser/>} />
      </Routes>
  );
}

export default App;
