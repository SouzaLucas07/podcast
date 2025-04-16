import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from "./controllers/podscats-controller";

const server = http.createServer( 
    async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    // queryString
    //http://localhost:3333/api/episodes?p=flow
    const [baseUrl,queryString] = request.url?.split("?") ?? ["",""];

    if(request.method === "GET" && baseUrl === "/api/list"){
       await getListEpisodes(request, response);
    }

    
    if(request.method === "GET" && baseUrl === "/api/episode"){
        await getFilterEpisodes(request, response);
     }

});

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
});