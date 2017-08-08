export interface Server {
  run(): void;
}

export interface Route {
  path: string;
  action(): void;
}

export interface App {
  routes: Route[];
}

export interface MountPoint {
  path: string;
  app: App;
}

export class Site {
  server: Server;
  apps: MountPoint[];
  
  constructor(server: Server) {
    this.server = server;
  }
}
