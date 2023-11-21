
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Header';
import UserTable from './UserTable';
import EditUser from './EditUser';
import AddUser from './AddUser';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<UserTable />} ></Route>
        <Route path='/addUser' element={<AddUser />}></Route>
        <Route path='/editUser/:id' element={<EditUser />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
