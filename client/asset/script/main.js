$(document).ready(() => {
    console.log(localStorage.getItem('token'))
    if (!localStorage.getItem('token') || localStorage.getItem('token') === null) {
        $('#link_search').hide()
        $('#link_search_google').hide()
        $('#link_logout').hide()
        $('#link_holiday').hide()
        $('#register').hide()
        $('#search_movie').hide()
        $('#movie-list').hide()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
        $('#login').show()
    } else {
        $('#link_search').show()
        $('#link_search_google').show()
        $('#link_holiday').show()
        $('#link_register').hide()
        $('#link_login').hide()
        $('#link_logout').show()
        $('#register').hide()
        $('#login').hide()
        $('#search_movie').show()
        $('#movie-list').show()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
    }

    register = () => {
        $('#register').show()
        $('#login').hide()
        $('#search_movie').hide()
        $('#movie-list').hide()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
    }

    login = () => {
        $('#register').hide()
        $('#login').show()
        $('#search_movie').hide()
        $('#movie-list').hide()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
    }

    movie = () => {
        $('#register').hide()
        $('#login').hide()
        $('#search_movie').show()
        $('#movie-list').show()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
    }

    google = () => {
            $('#register').hide()
            $('#login').hide()
            $('#search_movie').hide()
            $('#movie-list').hide()
            $('#search_google').show()
            $('#search_list').show()
            $('#holiday').hide()
        }
        //Regisster

    $('#formRegister').submit((e) => {
        e.preventDefault()

        let username = $('#register_username').val()
        let password = $('#register_password').val()
        let email = $('#register_email').val()

        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/users/register',
                data: {
                    username: username,
                    password: password,
                    email: email
                }
            })
            .done(result => {
                $('#register').hide()
                $('#login').hide()
                $('#search_movie').show()
                $('#movie-list').show()
                $('#holiday').hide()

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil ditambhakan </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err} </div>`)
            })
    })

    //Login
    $('#formLogin').submit((e) => {
        e.preventDefault()

        let username = $('#login_username').val()
        let password = $('#login_password').val()

        console.log({
            username,
            password
        })

        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    username: username,
                    password: password
                }
            })
            .done(result => {
                $('#register').hide()
                $('#login').hide()
                $('#search_movie').show()
                $('#movie-list').show()
                $('#holiday').hide()

                localStorage.setItem('token', result.token)

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil masuk </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error login dari server: ${err} </div>`)
            })
    })

    //search
    search_google = () => {
        let key = $('#search_input').val()
            // console.log(key)

        $.ajax({
                method: 'GET',
                url: `http://localhost:3000/api/google_search/${key}`
            })
            .done(result => {
                let data = ``
                for (let i = 0; i < result.length; i++) {
                    data += `<hr>
                    <div class="row mt-3 justify-content-center">
                        <div class="col-md-8">
                            <a href="${result[i].link}"> <h5 class="card-title">${result[i].title}</h5> </a>
                            <p class="card-text"> ${result[i].snippet} </p>
                        </div>
                    </div>`
                }
                $('#search_list').append(data)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error login dari server: ${err} </div>`)
            })
    }

    // AJAX HOLIDAY
    holiday = () => {

        $.ajax({
                url: 'http://localhost:3000/api/holidays/ID/2020',
                method: 'GET',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .done(holiday => {
                // console.log(holiday);

                $('#register').hide()
                $('#login').hide()
                $('#search_movie').hide()
                $('#movie-list').hide()
                $('#holiday').show()

                holiday.forEach(el => {
                    // console.log(el.name);
                    let date = new Date(el.date.iso).toDateString()
                    $('#list_holiday').append(`
                        <tr>
                            <td>${date}</td>
                            <td>${el.name}</td>
                        </tr>
                    `)
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    
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

function onSignIn(googleUser) {

    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: 'http://localhost:3000/users/google-login',
        method: 'POST',
        data: {
            token: id_token
        },
        statusCode: {
            200: function(response) {
                console.log('>> response Signin Google', response.token);
                localStorage.setItem('token', response.token)
            }
        }
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2) {
        auth2.signOut().then(function() {
            console.log('User signed out.');

            $('#link_search').hide()
            $('#link_search_google').hide()
            $('#register').hide()
            $('#search_movie').hide()
            $('#movie-list').hide()
            $('#search_google').hide()
            $('#search_list').hide()
            $('#holiday').hide()
            $('#login').show()

            localStorage.removeItem('token')
        });
    } else {
        $('#link_search').hide()
        $('#link_search_google').hide()
        $('#register').hide()
        $('#search_movie').hide()
        $('#movie-list').hide()
        $('#search_google').hide()
        $('#search_list').hide()
        $('#holiday').hide()
        $('#login').show()

        localStorage.removeItem('token')
    }
}