import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        // return response.data;
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.death,
            lastUpdate: data.lastUpdate,
        }

        return modifiedData;
    } catch (eror) {

    }
}