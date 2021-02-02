import axios from "axios"

const AXIOS = axios.create({
    baseUrl: "/api",
    timeout: 2000
})

export default {
    getEvents(date) {
        // TODO : get the events from the user UUID (should be in cookies or smtg)
        return AXIOS.get(`/api/events?date=${date}`);
    }
}