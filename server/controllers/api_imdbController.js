const axios = require('axios');
require('dotenv').config();

class ImdbId {
    static imdbId(req, res) {
        const title = req.params.title

        axios({
            method: 'get',
            url: `http://www.omdbapi.com/?apikey=${process.env.API_OMDb}&i=${title}`
        })
            .then((result) => {
                // console.log(result)
                res.status(200).json(result.data)
            })
            .catch(err => {
                res.status(500).json({
                    message: `internal server error`
                })
            })

    }
}

module.exports = ImdbId