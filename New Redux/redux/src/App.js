import {Routes, Route} from "react-router-dom"
import Viewuser from './pages/Viewuser';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';


function App() {
  return (

    <Routes>
        <Route path="/" element={<Viewuser/>}/>
        <Route path="/add_user" element={<Adduser/>}/>
         <Route path="/edit_user/:id" element={<Edituser/>}/>
     </Routes>
  );
}

export default App;
