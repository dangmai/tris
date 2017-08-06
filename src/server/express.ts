import { Server} from "../index";

import * as express from "express";

export class ExpressServer implements Server {
  app: any;

  constructor() {
    this.app = express();
  }

  run() {
    this.app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
      console.log('Example app listening on port 3000!')
    });
  }
}