$(document).ready(function(){


    // AJAX HOLIDAY
    $.ajax({
        url: 'http://localhost:3000/api/holidays/ID/2020',
        type: 'GET',
        // headers: 
    })
        .done(holiday => {
            console.log(holiday);
            holiday.forEach(el => {
                console.log(el.name);
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