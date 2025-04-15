import {IncomingMessage, ServerResponse} from "http";
import {servicesListEpisodes} from "../services/list-episodes-services";
import { syncBuiltinESMExports } from "module";
import { serviceFilterEpisodes } from "../services/filter-episodes-server";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) =>{
    const content = await servicesListEpisodes();

    response.writeHead(200,{'content-type': "application/json"});
    response.end(JSON.stringify(content));
};


export const getFilterEpisodes = async(
    request: IncomingMessage, 
    response: ServerResponse
)   =>{
    const content = await serviceFilterEpisodes("flow");

    response.writeHead(200,{'content-type': "application/json"});
    response.end(JSON.stringify(content));
};