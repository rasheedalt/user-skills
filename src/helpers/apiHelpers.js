import axios from "axios";

let getUserWithUserName = (username) => {
    return axios.get(`https://bio.torre.co/api/bios/${username}`);
}

let getOpportnitiesWithId = (id) => {
    return axios.get(`https://torre.co/api/suite/opportunities/${id}`);
}

let searchForJobs = (keyword) => {
    return axios.post(`https://search.torre.co/opportunities/_search/?${keyword}`);
}

let searchForJobsAndPeopleInGeneral = (keyword) => {
    return axios.post(`https://search.torre.co/people/_search/?${keyword}`);
}

export {
    getUserWithUserName,
    getOpportnitiesWithId,
    searchForJobs,
    searchForJobsAndPeopleInGeneral
};