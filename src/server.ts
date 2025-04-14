import * as http from "http";

import {getListEpisodes} from "./controllers/podscats-controller";

const server = http.createServer( 
    async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    if(request.method === "GET"){
       await getListEpisodes(request, response);
    }

});

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
});