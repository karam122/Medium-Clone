import { Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/navbar.component';
import UserAuthForm from './pages/userAuthForm.page';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/signin' element={<UserAuthForm type='sign-in' />} />
        <Route path='/signup' element={<UserAuthForm type='Sign Up' />} />
      </Route>
      {/* <Route path='/editor' element={<h3>Write here ...</h3>} /> */}
    </Routes>
  );
};

export default App;
