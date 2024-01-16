import { Server } from "socket.io";

class SocketService {
  private _io: Server;

  constructor() {
    console.log('Init socket server');
    this._io = new Server();
  }

  public initListeners(){
    const io = this._io;
    io.on('connect', socket=>{
        console.log('New socket connection created');
    })
  }

  get io(){
    return this._io;
  }
}

export default SocketService;