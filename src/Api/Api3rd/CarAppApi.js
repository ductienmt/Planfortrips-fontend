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
    console.log(response);
    return response.data;
}

export const GetAllCarModelsByMakeId = async (makeId) => {
    const response = await instance.get(`/models?verbose=yes&year=2020&sort=id&make_id=${makeId}&direction=asc`)
    console.log(response.data.data);
    return response.data;
}

