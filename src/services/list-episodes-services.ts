import { repositoryPodcast } from "../repositories/podcasts-repository";


export const servicesListEpisodes = async () => {

    const data = await repositoryPodcast();
    return data;
};


