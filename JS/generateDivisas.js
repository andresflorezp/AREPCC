
function perfomGetRequestT() {

    var resultElement = document.getElementById('getResultF');
    resultElement.innerHTML = '';

    axios.get('https://lpsi3nehyg.execute-api.us-east-1.amazonaws.com/ConsumirCurrency')
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