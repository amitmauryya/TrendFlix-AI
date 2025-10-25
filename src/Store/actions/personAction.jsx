export {removepeople} from "../reducers/peopleSlice"
import axios from "../../Utils/axios"
import { loadpeople } from "../reducers/peopleSlice"

export const asyncloadpeople = (id) => async (dispatch, getstate) => {
    try {
        const detail =  await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
       
        let theultimatedetails = {
            detail : detail.data,
            externalid: externalid.data,
            combinedCredits:combinedCredits.data,
            movieCredits:movieCredits.data,
            tvCredits:tvCredits.data
           
        }
        dispatch(loadpeople(theultimatedetails));
        // console.log(theultimatedetails);
    }
    catch (error) {
        console.log("Error: " ,error);
    }
}
