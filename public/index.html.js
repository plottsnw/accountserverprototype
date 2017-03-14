function createAccount() {
    let account = {};
    account.email = $("input[name='email']").val();
    account.password = $("input[name='password']").val();
    //alert(JSON.stringify(account));

    $.ajaxSetup({
        accepts: 'application/json',
        contentType: 'application/json'
    })

    $.post('http://localhost:3000/createaccount', JSON.stringify(account), (data, status, jqXHR) => {
        //alert(data);
        alert(status);
    });
}

function login() {
    let account = {};
    account.email = $("input[name='email']").val();
    account.password = $("input[name='password']").val();
    //alert(JSON.stringify(account));

    $.ajaxSetup({
        accepts: 'application/json',
        contentType: 'application/json'
    })

    $.post('http://localhost:3000/login', JSON.stringify(account), (data, status, jqXHR) => {
        //alert(data);
        alert(status);
    });
}