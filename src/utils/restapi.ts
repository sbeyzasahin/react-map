import axios from "axios";

const url = "https://kampus.ankageo.com";

function setToken(token: string) {
  localStorage.setItem("TOKEN", token);
}
function getToken() {
  return localStorage.getItem("TOKEN");
}
function sleep() {
  return new Promise(((res) => setTimeout(res, 100)));
}
async function getAllLayers() {
    await sleep()
    return axios.get(url + '/geoserver/kampus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=kampus:Fakulte_usr&maxFeatures=50&outputFormat=application/json');
}


export const RestApi = {
    setToken,
    getToken,
    getAllLayers
}