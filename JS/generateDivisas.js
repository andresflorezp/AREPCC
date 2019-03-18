function perfomGetRequest1() {

    var resultElement = document.getElementById('inputState');
    resultElement.innerHTML = '';

    axios.get('http://www.apilayer.net/api/list?access_key=358f46478f3fc7ee0ad75639aaf732f5')
        .then(function (response) {

            resultElement.innerHTML = genereateSuccesHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLOutput(error);
        })
}

function genereateSuccesHTMLOutput(response) {
   
    var respuesta=Object.keys(response.data.currencies).forEach(key => {
        let value = obj[key];
        respuesta+='<option>'+value+'</option>';
      });


}

function generateListaD(){
    
    var resultElement = document.getElementById('inputState');
    var ocurrencies =  Object.keys(response.data.currencies);
    Object.keys(response.data.currencies).forEach(key => {
        let value = obj[key];
        resultElement.innerHTML+='<option>'+value+'</option>';
      });


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