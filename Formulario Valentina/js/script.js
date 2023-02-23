function capturar() {
    var nombre = document.getElementById('nombre').value
    var art = parseInt(document.getElementById('art').value) 
    var cant = parseInt(document.getElementById('cant').value)  

    var total = cant * art
    var porc =(total * 0.19)+ total

    var mostrar =document.getElementById('resultado')
    mostrar.innerHTML=("Nombre del producto: "+ nombre + "<br>"+ "Precio sin IVA: " + art +"<br>"+ "El total a pagar es de: " + parseInt(porc))
}