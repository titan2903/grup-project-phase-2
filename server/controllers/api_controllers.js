const axios = require('axios');
require('dotenv').config();

class APIControllers {
    static omdb(req, res) {
        const title = req.params.title

        axios({
                method: 'get',
                url: `http://www.omdbapi.com/?apikey=${process.env.API_OMDb}&s=${title}`
            })
            .then((result) => {
                console.log(result)
                res.status(200).json(result.data)
            })
            .catch(err => {
                res.status(500).json({
                    message: err
                })
            })
    }

    static googleSearch(req, res) {
        const search = req.params.search
            // console.log(search)
        axios({
                method: 'get',
                url: `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH}&cx=013133766359376989566:ftzqfhbtzlw&q=${search}`
            })
            .then((result) => {
                console.log(result.data.items)
                res.status(200).json(result.data.items)
            })
            .catch(err => {
                res.status(500).json({
                    message: err
                })
            })
    }

    static holiday(req, res) {
        const country = req.params.ISOcountry
        const year = req.params.year

        axios({
                method: 'GET',
                url: `https://calendarific.com/api/v2/holidays?&api_key=${process.env.HOLIDAY_API}&country=${country}&year=${year}`
            })
            .then(({ data }) => {
                res.status(200).json(data.response.holidays)
            })
            .catch(err => {
                res.status(500).json({
                    messege: 'Server failed to response'
                })
            })
    }
}

module.exports = APIControllers