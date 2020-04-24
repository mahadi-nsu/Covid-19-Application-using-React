import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        // const { data } = await axios.get(url);
        // return response.data;
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.death,
        //     lastUpdate: data.lastUpdate,
        // }

        const response = await axios.get(url);
        const modifiedData = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate
        }
        return modifiedData;
    } catch (eror) {

    }
}