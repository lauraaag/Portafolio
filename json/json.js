// buscar la respuesta 

fetch('json.json')
.then(response => response.json())
.then(json =>{
    document.getElementById('verso1').innerHTML=json.uno;
    document.getElementById('verso2').innerHTML=json.dos;
    document.getElementById('verso3').innerHTML=json.tres;
    document.getElementById('verso4').innerHTML=json.cuatro;
    console.log(json)

})