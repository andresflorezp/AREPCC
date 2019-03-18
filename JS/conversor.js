function perfomGetRequest1() {

    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        })
}

function genereateSuccesHTMLOutput(response) {

    return '<h4>Result:</h4>' +
        '<h5>Status:</h5>' +
        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Body:</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'

}

function genereateErrorHTMLOutput(error) {

    return '<h4>Result:</h4>' +
        '<h5>Message: </h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5>' +
        '<pre>' + error.status + ' ' + error.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.headers, null, '\t') + '</pre>' +
        '<h5>Body:</h5>' +
        '<pre>' + JSON.stringify(error.data, null, '\t') + '</pre>'


}


function perfomGetRequest2() {

    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            id: todoId
        }
    })
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        })
}