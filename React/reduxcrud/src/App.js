import { Link,BrowserRouter, Routes,Route} from 'react-router-dom'
import Adduser from './redux/user/Adduser';
import View_user from './redux/user/View_user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View_user/>} />
        <Route path='/add_user' element={<Adduser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
