import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://car-api2.p.rapidapi.com/api',
    headers : {
        'x-rapidapi-host' : 'car-api2.p.rapidapi.com',
        'x-rapidapi-key' : 'eeee91a42amsheb3cbbd57f29e7cp165debjsn524f5deb8325'
    }
})

export const GetAllCarMakes = async () => {
    const response = await instance.get('/makes?direction=asc&sort=id')
    return response.data;
}

export const GetModelsByMakeName = async (makeName) => {
    const response = await instance.get(`models?make=${makeName}&sort=id&direction=asc&year=2020&verbose=yes`);
    console.log(response.data);
    return response.data;
}

export const GetAllMakeByMakeNameContanning = async (makeContainning) => {
    const response = await instance.get(`makes?limit=8&&direction=asc&sort=id&make=${makeContainning}`);
    return response.data;
} 

export const GetAllCarModelsByMakeId = async (makeId) => {
    const response = await instance.get(`/models?verbose=yes&year=2020&sort=id&make_id=${makeId}&direction=asc`)
    console.log(response.data.data);
    return response.data;
}

