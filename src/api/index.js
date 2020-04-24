import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate,
        }

        // const response = await axios.get(url);
        // const modifiedData = {
        //     confirmed: response.data.confirmed,
        //     recovered: response.data.recovered,
        //     deaths: response.data.deaths,
        //     lastUpdate: response.data.lastUpdate
        // }
        return modifiedData;
    } catch (eror) {

    }
}