import axios from "axios"

const AXIOS = axios.create({
    baseUrl: "/api",
    timeout: 2000
})

export default {
    getEvents() {
        return AXIOS.get("/api/events");
    }
}