import { Site } from "../../src/index";
import { ExpressServer } from "../../src/server/express";

const site = new Site(new ExpressServer());
site.server.run();