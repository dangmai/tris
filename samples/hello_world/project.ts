import { Site } from "../../src/index";
import { ExpressServer as Server } from "../../src/server/express";
import helloWorldApp from "./apps/hello_world/app";

const site = new Site(new Server());
site.apps = [
  {
    path: "/",
    app: helloWorldApp
  }
];
site.server.run();
