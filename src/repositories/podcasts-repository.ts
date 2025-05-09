import fs from "fs";
import path from "path";
import { json } from "stream/consumers";
import { PodcastModel } from "../models/podcast-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async(
    podcatsName?: string)
    : Promise<PodcastModel[]>=> {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile =JSON.parse(rawData);

    if(podcatsName){
        jsonFile = jsonFile.filter((podcast: PodcastModel)=> podcast.podcastName === podcatsName)
    }

    return jsonFile;
}