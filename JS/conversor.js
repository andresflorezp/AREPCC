
function perfomGetRequestCC() {

    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';

    axios.get('https://lpsi3nehyg.execute-api.us-east-1.amazonaws.com/ConsumirCurrency')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        })
}

function genereateSuccesHTMLOutput(response) {
    var S = '<select id="inputState" class="form-control">';
    let obj = response.data.currencies;
    Object.keys(obj).forEach(key => {
        let value = obj[key];
       S+= '<option>'+value+'</option>';
    });
    S+='</select>'
    return S;
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

perfomGetRequestCC()


