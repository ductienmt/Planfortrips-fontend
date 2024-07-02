import axios from "axios"


export const GetAllProvinces = async () => {
    const response = await axios.get('https://vapi.vnappmob.com/api/province/');
    console.log(response.data);
    return response.data;
}