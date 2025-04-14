import {IncomingMessage, ServerResponse} from "http";
import {servicesListEpisodes} from "../services/list-episodes-services";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) =>{
    const content = await servicesListEpisodes();

    response.writeHead(200,{'content-type': "application/json"});
    response.end(JSON.stringify(content));
};