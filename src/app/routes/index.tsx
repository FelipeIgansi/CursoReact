import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Dashboard} />
                <Route path="*" component={() => <Redirect to="/home" />} />            
            </Switch>
        </BrowserRouter>
    );
}
