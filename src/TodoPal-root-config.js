import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";

registerApplication({
  name: "@TodoPal/welcome-page",
  app: () => System.import("http://localhost:8081/TodoPal-welcome-page.js"),
  activeWhen: ["/", "/login", "/signup"],
});

registerApplication({
  name: "@TodoPal/todo-page",
  app: () => System.import("http://localhost:4200/main.js"),
  activeWhen: ["/todos/:id", "/todos"],
});

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start({
  urlRerouteOnly: true,
});
