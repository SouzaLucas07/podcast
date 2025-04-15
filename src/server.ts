import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from "./controllers/podscats-controller";

const server = http.createServer( 
    async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    if(request.method === "GET" && request.url === "/api/list"){
       await getListEpisodes(request, response);
    }

    
    if(request.method === "GET" && request.url === "/api/episode"){
        await getFilterEpisodes(request, response);
     }

});

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
});