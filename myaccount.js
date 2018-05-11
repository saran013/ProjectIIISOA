$(function () {
    $.ajax({

        url: 'https://customer-api-shopping.herokuapp.com/api/customers/',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="edit.html?id=' + data[i].name + '">' + data[i].lastname + '</a></td><td>' + data[i].email + '</td><td>' + data[i].address + '</td><td>' + data[i].telno + '</td><td>'+ data[i].id + '</td> </tr>';
            $('#accountlist').append(row);
        }
        
    }

});