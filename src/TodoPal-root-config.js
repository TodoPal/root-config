import { registerApplication, start } from "single-spa";

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

start({
  urlRerouteOnly: true,
});
