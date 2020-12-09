import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route,
} from 'react-router-dom';
import Main from 'views/Main';
import User from 'views/User';
import Contact from 'views/Contact';
import About from 'views/About';
import Timer from 'views/Timer';
import Cart from 'views/Cart';
import Globalstyle from 'theme/globalStyle';
import { Provider } from 'react-redux';
import store from 'store';
import { routes } from 'routes';
import Details from 'views/Details';
import FinalForm from 'views/FinalForm';
function Root() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Globalstyle />
            <Switch>
               <Route
                  exact
                  path={routes.Main}
                  component={Main}
               />
               <Route
                  exact
                  strict
                  path={routes.Ona}
                  component={User}
               />
               <Route
                  exact
                  strict
                  path={`${routes.OnaDetails}:id`}
                  component={Details}
               />
               <Route
                  exact
                  strict
                  path={routes.On}
                  component={User}
               />
               <Route
                  exact
                  strict
                  path={`${routes.OnDetails}:id`}
                  component={Details}
               />
               <Route
                  exact
                  path={routes.Okazje}
                  component={User}
               />
               <Route
                  exact
                  path={`${routes.OkazjeDetails}:id`}
                  component={Details}
               />
               <Route
                  exact
                  path={routes.Kontakt}
                  component={Contact}
               />
               <Route
                  exact
                  path={routes.Wizytówka}
                  component={About}
               />
               <Route
                  exact
                  path={routes.Timer}
                  component={Timer}
               />
               <Route
                  exact
                  path={routes.Cart}
                  component={Cart}
               />
               <Route
                  exact
                  path={routes.FinalForm}
                  component={FinalForm}
               />
            </Switch>
         </BrowserRouter>
      </Provider>
   );
}

export default Root;
