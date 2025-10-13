import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjc4ZTQ5NDllZDY5YWE2ZTk2Mzc5MTUyZWU5ZTI3MCIsIm5iZiI6MTc1OTU2NjA5Ny4zNTAwMDAxLCJzdWIiOiI2OGUwZDkxMTlhYjcxYjhhYTgyNWFhM2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8VMum90GZeoV24pKMozxWzbS9we87PQNezLVXDog_3g'
  }
})


export default instance;
