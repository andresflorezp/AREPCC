function perfomGetRequestCC() {

    var resultElement = document.getElementById('getResult3');
    resultElement.innerHTML = '';

    axios.get('http://www.apilayer.net/api/list?access_key=358f46478f3fc7ee0ad75639aaf732f5')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesValues(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLValues(error);
        })
}

function genereateSuccesValues(response) {
    var S = '<select id="inputState" class="form-control">';
    let obj = response.data.currencies;
    Object.keys(obj).forEach(key => {
        let value = obj[key];
       S+= '<option>'+value+'</option>';
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