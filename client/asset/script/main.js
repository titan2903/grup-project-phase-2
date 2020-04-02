$(document).ready(() => {
    console.log(localStorage.getItem('token'))
    if (!localStorage.getItem('token') || localStorage.getItem('token') !== '') {
        $('#link_search').hide()
        $('#register').hide()
        $('#search_movie').hide()
        $('#movie-list').hide()
    } else {
        $('#link_search').show()
        $('#link_register').hide()
        $('#link_login').hide()
        $('#register').hide()
        $('#login').hide()
        $('#search_movie').show()
        $('#movie-list').show()
    }

    register = () => {
        $('#register').show()
        $('#login').hide()
        $('#search_movie').hide()
        $('#movie-list').hide()
    }

    login = () => {
        $('#register').hide()
        $('#login').show()
        $('#search_movie').hide()
        $('#movie-list').hide()
    }

    movie = () => {
        $('#register').hide()
        $('#login').hide()
        $('#search_movie').show()
        $('#movie-list').show()
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

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil ditambhakan </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err} </div>`)
            })
    })

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

                localStorage.setItem('token', result.token)

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil masuk </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error login dari server: ${err} </div>`)
            })
    })
})