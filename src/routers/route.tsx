import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { router } from "./router"

// 自定义路由组件
function BasicRoute() {
  let routers: () => object[] = function () {
    let route: object[] = []
    for (const i of router) {
      route.push(<Route exact path={i.path} component={i.component} />)
    }
    return route
  }
  return (
    <Router>
      <Switch>
        {routers()}
      </Switch>
    </Router>
  );
}
export default BasicRoute
