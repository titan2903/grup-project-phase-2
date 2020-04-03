$(document).ready(function () {

    function searchMovies() {
        $('#movie-list').html('')

        let id = $('#search-input').val()
        $.ajax({
            url: `http://localhost:3000/api/movies/${id}`,
            type: 'GET'
        })
            .done(function (result) {
                // console.log(result)
                let movies = result.Search
                // console.log(movies)
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="container col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="`+ data.Poster + `" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">`+ data.Title + `</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID + `"><button type="button" class="btn btn-outline-info">See Detail</button></a>
                            </div>
                        </div>
                    </div>
                    `)
                })

                $('#search-input').val('')
            })
            .fail(function (err) {
                $('#message').text(`Error GET Movies form Server: ${err}`)
            })
    }


    $('#search-button').on('click', function () {
        searchMovies()
    })

    $('#search-input').on('keyup', function (event) {
        if (event.which === 13) {
            searchMovies()
        }
    })


    $('#movie-list').on('click', '.see-detail', function () {
        let imdbid = $(this).data('id')
        $.ajax({
            url: `http://localhost:3000/imdbid/movies/${imdbid}`,
            type: 'GET'
        })
            .done(function (movie) {
                if (movie.Response === "True") {

                    $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div align="center" class="col-md-12">
                                <img src="`+ movie.Poster + `" class="img-fluid"
                            </div>
                            <br><br>
                            <div calss="col-md-12">
                                <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                <li class="list-group-item"><h6>Rating: `+ movie.Ratings[0].Value + `</h6></li>
                                    <li class="list-group-item"><h6>Runtime: `+ movie.Runtime + `</h6></li>
                                    <li class="list-group-item"><h6>Released: `+ movie.Released + `</h6></li>
                                    <li class="list-group-item"><h6>Language: `+ movie.Language + `</h6></li>
                                    <li class="list-group-item"><h6>Genre: `+ movie.Genre + `</h6></li>
                                    <li class="list-group-item"><h6>Director: `+ movie.Director + `</h6></li>
                                    <li class="list-group-item"><h6>Actors: `+ movie.Actors + `</h6></li>
                                    <li class="list-group-item"><h6>Writer: `+ movie.Writer + `</h6></li>
                                    <li class="list-group-item"><h6>Plot: `+ movie.Plot + `</h6></li>
                                    <li class="list-group-item"><h6>Production: `+ movie.Production + `</h6></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    `)
                }
            })
    })
})