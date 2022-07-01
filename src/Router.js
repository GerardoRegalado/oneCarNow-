// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState';
import UsersState from './context/Users/UsersState';


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Profile from './components/profile/Profile'
import Admin from './components/admin/Admin';

import Auth from './routes/Auth'
import Public from './routes/Public';
import navAdmin from './components/admin/nav-admin/nav-admin';





function Router() {
  return (
    <>
      <PetsState>
      <UsersState>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route index element={ <Public component={Home}/>} />

                {/* localhost:3000/registro */}
                <Route path="registro"  element={ <Auth component={Register}/>} />

                {/* localhost:3000/login */}
                <Route path="login"     element={ <Auth component={Login} /> } />                

                {/* localhost:3000/profile */}
                <Route path="profile"   element={<Auth component={Profile} />} /> 

                {/* localhost:3000/admin */}
                <Route path="admin"     element={<Auth component={navAdmin} />}  /> 

  
            </Route>

          </Routes>
      </BrowserRouter>

      </UsersState>
      </PetsState>

    </>
  );
}

export default Router;