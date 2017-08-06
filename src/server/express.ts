import { Server} from "../index";

import * as express from "express";

export class ExpressServer implements Server {
  app: express.Express;

  constructor() {
    this.app = express();
  }

  run() {
    const port = parseInt(process.env.PORT) || 3000;
    const hostname = process.env.IP || "0.0.0.0";
    this.app.listen(
      port,
      hostname,
      function () {
        console.log(`Example app listening on port ${port}!`)
      },
    );
  }
}
