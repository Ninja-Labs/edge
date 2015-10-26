# Angular.JS herramientas no atadas a ningun browser

Angularjs es un framework web JavaScript tuvo como objetivo hacer que las aplicaciones web sencillas de construir y fácil de mantener.

### Nuestra Primera APP

Vamos a empezar por la construcción de una aplicación angularjs simple. Después de hacer esta aplicación, vamos a generalizar algunos pasos que se pueden utilizar para construir aplicaciones más complejas. Al final de este taller, usted será capaz de utilizar esta secuencia de pasos para poner en marcha sus propios aplicaciones angular.js.

### Tech

En estre workshop vamos a trabajar con una serie de tecnologias open source

* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system

### Prerequisitospara el workshop

* [node.js] - evented I/O for the backend
* [Gulp] - Necesario estar instalado de forma global en el sistema.

```sh
$ sudo npm install -g gulp
```

Ahora clonamos el respositorio, instalamos las dependencias y ejecutamos una tarea con gulp.

```sh
$ git clone [git-repo-url] workshop-angular-devcamp
$ cd workshop-angular-devcamp
$ npm install
$ gulp
```

## Instruciones

  1. Vamos a empezar por hacer una aplicación angularjs simple. Vamos a explicar cada paso en el siguiente ejercicio. En el archivo app.js, escriba el contenido exactamente como se ve aquí: ![Alt text](/assets/demo1.png?raw=true "Demo 1")
  2. Abrir index.html. Modifique la etiqueta <body> por lo que se ve así: ![Alt text](/assets/demo3.png?raw=true "Demo 3")
  3. Incluir la referencia de Angular.JS en nuestro archivo index.html, como se ve aca: ![Alt text](/assets/demo2.png?raw=true "Demo 2")
  4. Abrir  main/main.controller.js. Escriba el contenido tal y como se puede ver aquí: ![Alt text](/assets/demo4.png?raw=true "Demo 4")
  5. Ir a index.html. Modificar la etiqueta ```<div class="main">```  por lo que se ve aquí: ![Alt text](/assets/demo5.png?raw=true "Demo 5")
  6. En el mismo archivo index.html vamos a incluir el archivo app.js que contiene nuestro módulo y el controller que acabamos de modificar llamado main.controller.js quedando de esta manera: ![Alt text](/assets/demo6.png?raw=true "Demo 6")
  7. Dentro del index.html en ```<div class="main">``` modifique el elemento H1 para que se vea asi: ![Alt text](/assets/demo7.png?raw=true "Demo 7")
  8. Para ver la aplicación angularjs en el navegador, vamos abrir una consola ubicados en la carpeta de nuestro proyecto y escribiremos la instrucción gulp. ![Alt text](/assets/demo8.png?raw=true "Demo 8")
  9. En el navegador visitar  http://localhost:8080. ![Alt text](/assets/demo10.png?raw=true "Demo 10")
  10. Ahora que vimos que nuestra aplicación está funcionando hasta ahora, vamos a realizar un Refactor de nuestro código para empezar a utilizar las mejores prácticas en la construcción de aplicaciones con Angular.js. Abrir index.html y modificar la etiqueta ```<div class="main" ng-controller="MainController">``` agregando un alias al control para usar de una forma mas comoda como se muestra a continuación: ![Alt text](/assets/demo11.png?raw=true "Demo 11")
  12. Dentro del index.html  en ```<div class="main">```, modifique el elemento ```<h1>``` para que se vea asi: ![Alt text](/assets/demo12.png?raw=true "Demo 12")
  13. Abrir main/main.controller.js y modificar el archivo para que se vea de la siguente manera, si quieres saber porque realizamos esta modificación visita [Angular Style Guide de Jonh Papa](https://github.com/johnpapa/angular-styleguide) ![Alt text](/assets/demo13.png?raw=true "Demo 13")

#### ¡Impresionante! Haz construido una aplicación angularjs. ¿Cómo funciona?

1. En app.js, hemos creado un nuevo módulo llamado DemoAngular. Un módulo contiene los diferentes componentes de una aplicación angularjs.
2. Luego, en index.html agregamos ```<body ng-app="DemoAngular">```. El ng-app es llamada una directiva. Usamos la directiva ng-app para definir el ámbito de la aplicación.
3. En main.controller.js hemos creado un nuevo controlador llamado MainController. Un controlador maneja los datos de la aplicación. Aquí utilizamos una propiedad título para almacenar una cadena, y agregarlo al $scope (el alcance, que al final lo reemplazamos por this).
4. Luego, enn index.html, añadimos ```<div class="main" ng-controller="MainController as main">```. ng-controller es una directiva que define el alcance del controlador.
5. Dentro de ```<div class="main">``` accedimos a $scope.title usando {{ title }}. Luego lo cambiamos por vm.title y {{ main.title }}. Las expresiones se utilizan para mostrar los valores en la página.
6. El valor del título se presentó cuando vimos la aplicación en el navegador.

### Ahora haz tu estos pasos siguentes para practicar

1. Tanto el MainController y la vista index.html tienen acceso a $scope. Esto significa que podemos usar $scope para la comunicación entre el controlador y la vista. En el controlador, cambie el valor del título por otra cadena de texto. 
2. Del mismo modo, las nuevas propiedades unidas a $scope estarán disponibles para utilizar en la vista. En el controlador, vamos agregar una nueva propiedad llamada promo y establezca su valor con una cadena de texto. 
3. En la vista debajo del elemento ```<h1>```, adicionar un elemento ```<h2>``` que use una expresión para mostrar la promo en la página.

Hasta ahora este es nuestro flujo de trabajo típico al hacer una aplicación angularjs:
+ Crear un módulo y utilizar ng-app con el fin de definir el alcance de la aplicación.
+ Crear un controlador, y utilizar ng-controller con el fin de definir el alcance del controlador.
+ Añadir datos al $scope en el controlador de modo que se puede mostrar con expresiones en la vista.


## Filtros

1. Vamos a añadir más datos al controlador y los mostraremos en la vista. En el controlador, agregue una propiedad llamada product. Hagalo igual a un objeto con las siguientes propiedades: ![Alt text](/assets/demo16.png?raw=true "Demo 16")
2. Luego en el index.html debajo del elemento ```<h2>``` vas agregar el siguiente código:  ![Alt text](/assets/demo17.png?raw=true "Demo 17")
3. Actualmente el precio del producto se muestra como un número. Sería mejor darle formato como moneda. En lugar de cambiar los datos en el controlador, vamos a usar un filtro de angularjs para dar formato a los datos en la vista. En index.html en ```<p class = "price">```, cambiar la expresión de este aspecto: ![Alt text](/assets/demo18.png?raw=true "Demo 18")
4. ¡Excelente! El precio del producto ha cambiado de un número a una moneda con formato. ¿Cómo funciona?

+ Angularjs obtiene el valor de product.price
+ Envía este número en el filtro currency. El símbolo de canalización (|) toma la salida en la "tubos" a la derecha e izquierda.
+ De esta manera, los filtros ayudan a separar el contenido en el controlador de su presentación en la vista.

5. En main.controller.js  dentro vm.product, añadir una tercera propiedad denominada pubdate:  pubdate: new Date('2014', '03', '08')
6. En index.html dentro ```<p class="date">```, mostrar la propiedad pubdate.
7. Formatear la propiedad pubdate del producto con el filtro date y el nombre del producto con el filtro uppercase.

## ng-repeat
1. Eliminemos en el MainController la propiedad product.
2. Agregamos una propiedad products tal y como se muestra acá: 
![Alt text](/assets/demo19.png?raw=true "Demo 19")
3. En la vista reemplace el contenido del elemento ```<div class="col-md-6">``` por esto: ![Alt text](/assets/demo20.png?raw=true "Demo 20")

Hasta ahora hemos hecho una aplicación angularjs estática mediante la adición de propiedades en el controlador y mostrando en la vista. Angularjs es un framework para la creación de aplicaciones web dinámicas, así que vamos a empezar a hacer esta aplicación interactiva.

## ng-click

1. En el controlador en el array vm.products, añadir una nueva propiedad llamada likes en cada uno de los elementos de este array. 
2. Establecer la propiedad likes en 0
3. En la vista debajo de ```<p class="date">```, escriba un elemento para rating: ![Alt text](/assets/demo21.png?raw=true "Demo 21")
4. Dentro ```<p class="likes">```, mostrar los likes del producto usando una expresión.
5. De vuelta en el controlador después de vm.products, adjunte una nueva propiedad a con el nombre plusOne. Hacer esta propiedad a la siguiente función. ![Alt text](/assets/demo22.png?raw=true "Demo 22")
6. Modificar en la vista ```<p class="likes">``` por el siguiente codigo y luego ir al browser refrescar y hacer click en los likes: ![Alt text](/assets/demo23.png?raw=true "Demo 23")

¡Excelente! Cada vez que haga clic en el número de likes, el número aumenta. ¿Cómo funciona?

1. El ng-click es una directiva. Cuando ```<p class="likes">``` se hace click, ng-click le dice a AngularJS que ejecute la función plusOne() en el controlador.
2. La funcion plusOne() obtiene el índice del producto que se hizo clic y a continuación, suma la propiedad likes en 1 a los gustos de ese producto.
3. Observe que el plusOne() no interactúa con la vista en absoluto; sólo actualiza el controlador. Cualquier cambio realizado en el controlador aparece en la vista.

Ahora vamos adicionar un nuevo evento para hacer click en los "No me gusta"

1. En el controlador, añadir una nueva propiedad dislikes para cada elemento donde este valor sea igual a 0.
2. En la vista debajo  ```<p class="likes">```, adicionar un elemento para ```<p class="dislikes">```. Mostrar los dislikes usando una expresión.
3. De vuelta en el controlador después vm.plusOne agregue una función igual a esta pero llamada minusOne. donde aumente lo dislikes.
4. En la vista, use el ng-click para llamar a la función minuOne() cuando ```<p class="dislikes">``` se hace clic.

##### ¡Felicidades! Haz construido una aplicación angularjs desde cero. ¿Qué podemos generalizar hasta ahora?

1. Un usuario visita la aplicación de angular.js.
2. La vista representan los datos de la aplicación a través de la utilización de expresiones, filtros y directivas. Las directivas agregan nuevos comportamientos a los elementos HTML.
3. Un usuario hace clic en un elemento en la vista. Si el elemento tiene una directiva, angularjs ejecuta la función.
4. La función en el controlador actualiza el estado de los datos.
5. La vista cambia automáticamente y muestra los datos actualizados. La página no necesita ser recargada.

![Alt text](/assets/lean.png?raw=true "Learn")

## Contribución

* CodeAcademy
* Angular Guide Style

### License
* MIT



