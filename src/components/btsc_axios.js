import Axios from "axios";

const btsc_service_url = "https://btsc.gowyth.com";
//const btsc_service_url = "http://192.168.229.130:8080";

const btsc_axios = Axios.create({
    baseURL: btsc_service_url
});

export default btsc_axios;
