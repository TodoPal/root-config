import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@TodoPal/welcome-page",
  app: () => System.import("http://localhost:8081/TodoPal-welcome-page.js"),
  activeWhen: ["/", "/login", "/signup"],
});

start({
  urlRerouteOnly: true,
});
