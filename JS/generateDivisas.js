divisas = [];
function ObtenerData() {

    var resultElement = document.getElementById('getResultFinal');
    resultElement.innerHTML = '';

    axios.get('http://www.apilayer.net/api/live?access_key=358f46478f3fc7ee0ad75639aaf732f5')
        .then(function (response) {
            divisas = JSON.parse(JSON.stringify(response).replace("/",""));
            console.log(divisas);
            resultElement.innerHTML = genereateSucces();
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLValues(error);
        })
}
function ObtenerDataActualizar() {

    var resultElement = document.getElementById('getActualizar');
    resultElement.innerHTML = '';

    axios.get('http://www.apilayer.net/api/live?access_key=358f46478f3fc7ee0ad75639aaf732f5')
        .then(function (response) {
            divisas = JSON.parse(JSON.stringify(response).replace("/",""));
            resultElement.innerHTML = Actualizar();
        })
        .catch(function (error) {
            resultElement.innerHTML = genereateErrorHTMLValues(error);
        })
}

function genereateSucces() {
    var data1 =$("#inputState1").val();
    var data2=$("#inputState2").val();
    var index1 = data1.split("-");
    var index2 = data2.split("-");
    var key1="USD"+index1[0];
    var key2="USD"+index2[0];
    var data1 = divisas.data.quotes[key1];
    var data2 = divisas.data.quotes[key2];
    var digitado = $("#todoId").val();
    console.log(digitado);
    console.log(data1);
    console.log(data2);
    var divisa = (data2/data1);
    var resp = divisa*digitado;
    return "<pre>El cambio de divisas es "+resp+"</pre>";
}


function Actualizar(){
    var fecha = new Date();
    return "<pre>"+"Se actualizaron los datos a la fecha : "+(fecha.getMonth()+1)+" mes"+"   - "+(fecha.getDay()+24)+" dia "+" - "+fecha.getHours()+" horas "+" - "+fecha.getMinutes()+" minutos "+" - "+fecha.getSeconds()+" segundos "+"</pre>";

}