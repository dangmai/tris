export interface Server {
  run(): void;
}

export class Site {
  server: Server;
  
  constructor(server: Server) {
    this.server = server;
  }
}