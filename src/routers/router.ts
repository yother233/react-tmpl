import Index from "../views/index/index";
import Home from "../views/home/home";
// Route parse
let router: any[] = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/home",
    component: Home,
  },
];

export { router };
