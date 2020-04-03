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
}

module.exports = APIControllers