
function perfomGetRequestT() {

    var resultElement = document.getElementById('getResultF');
    resultElement.innerHTML = '';

    axios.get('http://www.apilayer.net/api/list?access_key=358f46478f3fc7ee0ad75639aaf732f5')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesHTML(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTML(error);
        })
}

function genereateSuccesHTML(response) {
   
    return '<h4>Result:</h4>' +
        '<h5>Body:</h5>' +
        '<pre>' + Object.keys(response.data.currencies) + '</pre>'

}

function genereateErrorHTML(error) {

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