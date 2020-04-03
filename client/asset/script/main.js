$(document).ready(function(){


    // AJAX HOLIDAY
    $.ajax({
        url: 'http://localhost:3000/api/holidays/ID/2020',
        method: 'GET',
        headers: { 
            token: localStorage.getItem('token')
        }
    })
        .done(holiday => {
            // console.log(holiday);
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
            200: function(response){
                console.log('>> response Signin Google', response.token);
                localStorage.setItem('token', response.token)
            }
        }
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.removeItem('token')
    });
  }