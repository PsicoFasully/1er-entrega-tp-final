class Producto{
    constructor(nombre, marca, precio ){

        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        


    }
}

function buscarProducto(productos){
    let nombreProducto = prompt("ingrese un nombre de producto")

    let productoBuscado =  productos.find(producto => producto.nombre == nombreProducto )
    if (productoBuscado == undefined){

        console.log("producto no encontrado")

    }else{
        console.log(productoBuscado)
    }
}






const productos = []




let nombre, marca, precio, siguiente

do{
    do{
        nombre = prompt("ingrese un nombre del producto")
        marca = prompt("ingrese marca del producto")


    }while((nombre.length == 0 || marca.length == 0))

    do{
        precio = parseFloat(prompt("ingrese un precio de producto"))
    


    }while ((isNaN(precio)) || (precio <=0))

    const producto =new Producto(nombre, marca, precio, )
    productos.push(producto)

    siguiente = prompt("¿desea ingresar otro producto?")

}while(siguiente!="no")

let respuesta
do{
    respuesta = parseInt(prompt("ingrese para 1-buscar un producto "
    
    ))


}while(respuesta <1 || respuesta >1)

switch(respuesta){

    case 1:
        buscarProducto(productos)
        break
        
    default:
        alert("opcion no valida")
        break


}