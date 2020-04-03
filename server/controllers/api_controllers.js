require('dotenv').config()
const axios = require('axios')

class APIControllers {

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
}

module.exports = APIControllers