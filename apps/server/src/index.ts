import http from "http";
import SocketService from "./services/socketService";


const init = async ()=>{
    const socketService = new SocketService();

    const httpServer = http.createServer();
    const PORT = process.env.PORT || 8000;

    socketService.io.attach(httpServer);

    httpServer.listen(PORT, ()=>{ 
        console.log("server is running on PORT : ",PORT);
    })
}

init();