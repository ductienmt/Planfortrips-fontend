import axios from "axios"


export const GetAllProvinces = async () => {
    const response = await axios.get('https://vapi.vnappmob.com/api/province/');
    console.log(response.data);
    return response.data;
}

export const GetAllDistrictByProvinceId = async (province_id) => {
    const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${province_id}`);
    console.log(response.data);
    return response.data
}

export const GetAllWardByDistTrictId = async (district_id) => {
    const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${district_id}`)
    console.log(response);
    return response.data;
}