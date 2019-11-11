import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../pages/Main';
import DetailView from '../pages/DetailView';

const Router = () => (

    <BrowserRouter>

        <Switch>

            <Route path="/" component={Main} exact />
            <Route path="/detailView/:id" component={DetailView} />

        </Switch>
       
    </BrowserRouter>
   

);


export default Router;

