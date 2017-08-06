import { Site } from "../../src/index";
import { ExpressServer as Server } from "../../src/server/express";

const site = new Site(new Server());
site.server.run();
