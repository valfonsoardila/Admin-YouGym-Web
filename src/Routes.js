import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashCatchTweets from "./pages/dashboards/CatchTweets/DashCatchTweets";
import DashYouGym from "./pages/dashboards/YouGym/DashYouGym";
import CashRegister from "./pages/class/CashRegister";
import Coach from "./pages/class/Coach";
import Client from "./pages/class/Client";
import Progress from "./pages/class/Progress";
import Tasks from "./pages/class/Tasks";
import Services from "./pages/class/Services";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/menudash/dash-catch-tweets">
                <DashCatchTweets />
            </Route>
            <Route exact path="/menudash/dash-yougym">
                <DashYouGym />
            </Route>
            <Route exact path="/caja-registradora">
                <CashRegister />
            </Route>
            <Route exact path="/usuarios/entrenador">
                <Coach />
            </Route>
            <Route exact path="/usuarios/cliente">
                <Client />
            </Route>
            <Route exact path="/body-center/progreso">
                <Progress />
            </Route>
            <Route exact path="/body-center/tareas">
                <Tasks />
            </Route>
            <Route exact path="/servicio">
                <Services />
            </Route>
        </Switch>
    );
};

export default Routes;
