$(function () {
    
    $('#alert').hide();

    $('#add1').click(function () {

        var formdata = {
            Address: $('#address').val(),
            Email: $('#email').val(),
            Lastname: $('#lastname').val(),
            Name: $('#name').val(),
            Password: $('#password').val(),
            TelephoneNumber: $('#telno').val()
      
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'https://customer-api-shopping.herokuapp.com/api/customers/',
                type: 'POST',
                data: formdata
            }).then(function (data) {

                $('#alert').show();
                $('#address').val('');
                $('#email').val('');
                $('#lastname').val('');
                $('#name').val('');
                $('#password').val('');
                $('#telno').val('');
                console.log('Added');

            });
        });
    });
});