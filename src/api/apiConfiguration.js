import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
instance.defaults.headers.common["Authorization"] = process.env.VUE_APP_API_KEY;

export default instance;
