# bstaleTestApi
  En caso de estar trabajando local favor de cambiar 
  urlProduccion = https://backend-bsaletest.herokuapp.com/bsaletest/v1/products/ 
  urlLocal = http://localhost:5000/bsaletest/v1/products/


     Al ahacer esta peticion GET https://backend-bsaletest.herokuapp.com/bsaletest/v1/products/
     deberia devolver el siguiente formato json
      "data": "ok",
      "resultado": [
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
      y filtrar los productos por la palabra ingresada.
      por ejemplo si lo que ingreso fue pis, deberia devolver:
      "data": "ok",
      "resultado": [
        {
            "id": 8,
            "name": "PISCO ALTO DEL CARMEN 35º",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
            "price": 7990,
            "discount": 10,
            "category": 2
        },
        {
            "id": 9,
            "name": "PISCO ALTO DEL CARMEN 40º ",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
            "price": 5990,
            "discount": 0,
            "category": 2
        },
        {
            "id": 10,
            "name": "PISCO ARTESANOS 35º ",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
            "price": 3990,
            "discount": 0,
            "category": 2
        },{etc},{etc},...
        ]}
      
      
