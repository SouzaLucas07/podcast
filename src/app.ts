import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podscats-controller";
import { Routes } from "./routes/routes";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    // queryString
    //http://localhost:3333/api/episodes?p=flow
    const [baseUrl,queryString] = request.url?.split("?") ?? ["",""];

    if(request.method === "GET" && baseUrl === Routes.LIST){
       await getListEpisodes(request, response);
    }

    
    if(request.method === "GET" && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
     }
    };