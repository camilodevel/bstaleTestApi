# bstaleTestApi

     Al ahacer esta peticion GET https://backend-bsaletest.herokuapp.com/bsaletest/v1/products/
     deberia devolver el siguiente formato json
      [
        {
          "id": numero unico,
          "name": "Nombre producto",
          "url_image": "Url de la imagen",
          "price": $precio,
          "discount": descuento,
          "category": y el numero de la categoria por ejemplo 1
        },
        {etc},{etc}...
      ]
      
      Al hacer esta peticion GET https://backend-bsaletest.herokuapp.com/bsaletest/v1/products/buscar/texto/:palabra
      deberia llamar a la funcion buscarProductos, la cual carga todo los productos que que se cargan al llamar por primera vez a los productos.
      y filtrar los productos por laa palabra ingresada.
      
      
