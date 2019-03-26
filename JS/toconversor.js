function perfomGetRequestCC() {

    var resultElement = document.getElementById('getResult3');
    resultElement.innerHTML = '';

    axios.get('https://f6k116t4v2.execute-api.us-east-1.amazonaws.com/ConsumirCurrency')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesValues(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLValues(error);
        })
}

function genereateSuccesValues(response) {
    var S = '<select id="inputState1" class="form-control">';
    let obj = JSON.parse(response.data);
    for (var i in response) {
        console.log(response[i].keys)
    }
    Object.keys(obj).forEach(key => {
        let value = obj[key];
       S+= '<option>'+key+"-"+value+'</option>';
    });
    S+='</select>'
    return S;

}


function genereateErrorHTMLValues(error) {

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