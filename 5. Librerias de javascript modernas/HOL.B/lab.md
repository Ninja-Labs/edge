#WebCamp Bogotá 2015 - Librerías JavaScript Modernas: Angular.js

[Angularjs](https://angularjs.org/) es uno de los frameworks JavaScript más populares, y no es para menos, Angularjs tiene todas las características
necesarias para el desarrollo de aplicaciones Web Modernas, testeables, enriquecidas, este laboratorio será un Up and Running para
que puedas comenzar con Angularjs desde 0 hasta crear una interesante aplicación Web que se conecte con el API
de GitHub para realizar búsquedas.

### Requisitos

* Para este laboratorio utilizaremos **Visual Studio 2015**, recuerda que puedes descargar la versión [Community](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) que es gratuita
y ofrece las mismas características que la versión Professional.

## Tarea 1: Creación aplicación Web base

En esta primer tarea vamos a crear la aplicación Web base a utilizar en todo el laboratorio.

* En Visual Studio 2015 ir a File -> New Project -> Web -> ASP.NET Web Application asignamos un nombre y una ubicación al proyecto.

![Template](http://res.cloudinary.com/julitogtu/image/upload/v1446024699/Angulajs1_ufiilk.png)

* En la siguiente parte del wizard, seleccionar la plantilla Empty dentro de la sección ASP.NET 4.6 Templates

![Template](http://res.cloudinary.com/julitogtu/image/upload/v1446025387/Angulajs2_hcchod.png)

* Posteriormente, mediante **Nuget** instalar el paquete AngularJS

![AngularJS Nuget Package](http://res.cloudinary.com/julitogtu/image/upload/v1446025726/Angulajs3_g6csty.png)

* Finalmente, dentro de la carpeta scripts, crear una carpeta llamada **app**, y dentro de dicha carpeta  las carpetas
**Controllers** y **Services**

![Folders](http://res.cloudinary.com/julitogtu/image/upload/v1446025974/Angulajs4_odciay.png)

## Tarea 2: Creación del módulo

Para trabajar con AngularJS, necesitamos de al menos 1 módulo, dicho módulo va a ser el contenedor para controladores,
servicios, etc.

* En la carpeta scripts/app, agregar un nuevo item, click derecho, Add -> New Item, luego filtrar por angularjs, en las pantillas
que se muestran seleccionar AngularJs Module y en el nombre asignar app.js

![AngularJS Module](http://res.cloudinary.com/julitogtu/image/upload/v1446026651/Angulajs5_r2ywzv.png)

* Finalmente, editamos el archivo generado eliminando la dependencia al modulo ngRoute

```javascript
(function () {
    'use strict';
    angular.module('app', []);
})();
```

## Tarea 3: Creación del servicio (factory) de búsqueda

Para consumier el API de GitHub vamos a crear un servicio (nombre oficial factory) que se encargue exclusivamente de 
realizar las peticiones HTTP.

* En la carpeta scripts/app/services vamos a agregar un nuevo item (al igual que el paso anterior), pero esta vez seleccionamos
el template **AngularJs Factory**, y le asignamos el nombre **githubService.js**

![AngularJS Factory](http://res.cloudinary.com/julitogtu/image/upload/v1446028234/Angulajs6_frkqom.png)

* Inicialmente, el archivo generado tiene el siguiente código:

```javascript
(function () {
    'use strict';

    angular
        .module('app')
        .factory('githubService', githubService);

    githubService.$inject = ['$http'];

    function githubService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();
```

* En el código anterior, podemos observar que se está referenciando el módulo creado en la tarea anterior `angular.module('app')` y que se 
está creando una factory con el nombre **githubService** `angular.factory('githubService', githubService)`

* Ahora, es momento de modificar dicha factory para agregar los métodos que necesitamos, en este punto haremos dos cosas, cambiar el nombre de la 
función getData por getDataGitHub, y segundo, en dicha función vamos a realizar el llamado
al api de GitHub utilizando el **http factory** y enviando tres parámetros que son: tema a buscar, página actual
y la cantidad de registros por página, modificando el código tenemos ahora:

```javascript
(function () {
    'use strict';

    angular
        .module('app')
        .factory('githubService', githubService);

    githubService.$inject = ['$http'];

    function githubService($http) {
        var service = {
            getData: getDataGitHub
        };

        return service;

        function getDataGitHub(topic, page, pageSize) {
            return $http.get("https://api.github.com/search/repositories?q=" + topic + "&page=" + page + "&per_page=" + pageSize)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
```

## Tarea 4: Creando el controlador

Angularjs permite trabajar el patrón de arquitectura MVC (Model-View-Controller), así que en 
esta tarea nos vamos a centrar en la creación del controlador.

* En la carpeta scripts/app/controllers vamos a agregar un nuevo item (si, igual que en 
los pasos anteriores), sin embargo en esta ocasión seleccionamos el template 
**AngularJs Controller using $scope** y le asignamos el nombre **githubController.js**

![AngularJS Controller](http://res.cloudinary.com/julitogtu/image/upload/v1446083979/angularcontrollerwithscope_dwn0pw.png)

* Inicialmente el código generado por la plantilla es:

```javascript
(function () {
    'use strict';

    angular
        .module('app')
        .controller('githubController', githubController);

    githubController.$inject = ['$scope']; 

    function githubController($scope) {
        $scope.title = 'githubController';

        activate();

        function activate() { }
    }
})();
```
* El primer cambio a realizar en el controlador, consiste en inyectar el factory creado en el punto anterior,
dicha inyección la realizamos en la línea `githubController.$inject = ['$scope'];` y en la función gitHubController
añadimos el parámetro:

```javascript
githubController.$inject = ['$scope', 'githubService'];

function githubController($scope, githubService) {
```

* El siguiente paso consiste en crear una función llamada **search** que se va a encargar de realizar 
la búsqueda llamando a la factory **githubService** (justo después del $scope.title):

```javascript
$scope.search = function (topic) {
    githubService
                .getData(topic, $scope.page, $scope.pageSize)
                .then(onSearchComplete, onError);
};
```
* El siguiente paso es crear las funciones **onSearchComplete** y **onError** (justo después del $scope.title
y antes de la función search):
 
```javascript
var onSearchComplete = function (data) {
    $scope.list = data.items;
    if (data.total_count > 1000)
        $scope.totalResults = 1000;
    else
        $scope.totalResults = data.total_count;

    $scope.totalPage = $scope.totalResults / $scope.pageSize;
    $scope.pages = [];
    for (var i = 1; i <= $scope.totalPage; i++) {
        $scope.pages.push(i);
    }
};

var onError = function (err) {
    console.log(err);
};
``` 

* Finalmente, vamos a crear algunas propiedades que necesitamos como topic, el orden en que vamos a mostrar los datos,
cantidad de registros a mostrar (justo después del $scope.title):

```javascript
$scope.topic = '';
$scope.order = '+owner.login';
$scope.page = 1;
$scope.pageSize = 30;
```

* No olviden eliminar la función activate y su llamado, en este punto el controlador debe verse como:

```javascript
(function () {
    'use strict';

    angular
        .module('app')
        .controller('githubController', githubController);

    githubController.$inject = ['$scope', 'githubService'];

    function githubController($scope, githubService) {
        $scope.title = 'githubController';
        $scope.topic = '';
        $scope.order = '+owner.login';
        $scope.page = 1;
        $scope.pageSize = 30;

        var onSearchComplete = function (data) {
            $scope.list = data.items;
            if (data.total_count > 1000)
                $scope.totalResults = 1000;
            else
                $scope.totalResults = data.total_count;

            $scope.totalPage = $scope.totalResults / $scope.pageSize;
            $scope.pages = [];
            for (var i = 1; i <= $scope.totalPage; i++) {
                $scope.pages.push(i);
            }
        };

        var onError = function (err) {
            console.log(err);
        };

        $scope.search = function (topic) {
            githubService
                        .getData(topic, $scope.page, $scope.pageSize)
                        .then(onSearchComplete, onError);
        };
    }
})();
```

## Tarea 5: Creando la página index.html

En este tarea, vamos a crear la página index.html y así mismo se va a usar los componentes creados anteriormente.

* Primero, utilizando Nuget añadir una referencia a Bootstrap para poder mejorar la presentación del documento:

![Bootstrap Nuget Package Controller](http://res.cloudinary.com/julitogtu/image/upload/v1446096814/bootstrap_uunw2f.png)

* Luego, añadir una nueva página HTML, y referenciar:
     * Bootstrap
     * Angularjs
     * El módulo Angularjs creado
     * La factory creada
     * El controller creado
     
```html
<!DOCTYPE html>
<html>
<head>
    <title>AngularJS</title>
    <meta charset="utf-8"/>
    <link href="Content/bootstrap.css" rel="stylesheet"/>
    <script src="Scripts/angular.js"></script>
    <script src="Scripts/app/app.js"></script>
    <script src="Scripts/app/Services/githubService.js"></script>
    <script src="Scripts/app/Controllers/githubController.js"></script>
</head>
<body>

</body>
</html>
```

* El siguiente paso, es definir el scope en donde Angularjs va a trabajar, esto se hace mendiante la "directiva"
**ng-app** asignándole el valor del módulo que hemos creado, esto lo haremos en la etiqueta `<body>`:

```html
<body ng-app="app"></body>
```

* El siguiente paso consiste en crear la caja de búsqueda, así que agregamos el siguiente código HTML dentro del `<body>`:

```html
<div class="container">
	<div class="row">
		<h1>AngularJS - GitHub Searcher</h1>
		<hr>
		<div class="page">
			<div class="col-md-12">
				<div class="well profile col-md-12">
					<form class="form-horizontal" role="form">
						<div class="form-group">
							<label class="col-sm-2 control-label">Topic:</label>
							<div class="col-sm-10">
								<input type="text" class="form-control" placeholder="Topic to search" autofocus="autofocus" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<input type="button" value="Search" class="btn btn-primary" autofocus="autofocus" />
							</div>
						</div>
					</form>
					<br>
					<div></div>
				</div>
			</div>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-xs-12 col-sm-8">
			<p><strong>@julitogtu</strong> |  <strong>http://julitogtu.com</strong></p>
		</div>
	</div>
</div>
```
   En este punto si ejecutan la aplicación, se debe ver así:
 
![Formulario inicial](http://res.cloudinary.com/julitogtu/image/upload/v1446097829/form1_suajm1.png)   
   
* El siguiente punto, es relacionar el controlador que hemos creado, esto lo haremos en el **div** que tiene 
la clase page utilizando la directiva **ng-controller**:

```html
<div class="page" ng-controller="githubController">
```

* En la caja de texto de búsqueda, con la directiva **ng-model** relacionamos la propiedad del scope:

```html
<input type="text" class="form-control" placeholder="Topic to search" autofocus="autofocus" ng-model="topic" />
```

* En el botón que lanza la búsqueda realizaremos dos acciones, la primera será asociar el llamado de la función
**search** al click con la directiva **ng-click** y la segunda, con la directiva **ng-disable** controlar
que el botón solo este habilitado solo cuando exista algo escrito en la caja de esto (se logra consultando
la longitud de la propiedad topic):

```html
<input type="button" value="Search" class="btn btn-primary" autofocus="autofocus" 
       ng-click="search(topic)" ng-disabled="!topic.length" />
```

* En el div, justo después del tag `<br>` agregar el siguiente código HTML para allí mostrar los resultados:

```html
<form>
	<div class="form-group">
		<label class="col-sm-2 control-label">Total Results: </label>
		<div class="col-sm-3">
			<label class="col-sm-2 control-label">{{totalResults}}</label>
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label">Page: </label>
		<div class="col-sm-2">
			<select class="form-control" ng-change="search(topic)" ng-model="page">
				<option ng-repeat="o in pages" value="{{o}}">{{o}}</option>
			</select>
		</div>
		<label class="col-sm-2 control-label">Order:</label>
		<div class="col-sm-2">
			<select class="form-control" ng-model="order">
				<option value="+owner.login" selected="selected">Username [a-z]</option>
				<option value="-owner.login" selected="selected">Username [z-a]</option>
				<option value="+description" selected="selected">Description [a-z]</option>
				<option value="-description" selected="selected">Description [z-a]</option>
			</select>
		</div>
	</div>
</form>

<table class="table table-hover table-striped">
	<thead>
		<tr class="success">
			<th></th>
			<th>Username</th>
			<th>Description</th>
			<th>URL</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>
```

* En body de la tabla de resultados, haremos uso de la directiva **ng-repeat** para recorrer cada uno de los registros
e irlos mostrando en la tabla:

```html
<tbody>
    <tr ng-repeat="item in list | orderBy:order">
        <td><img ng-src="{{item.owner.avatar_url}}" title="{{item.owner.login}}" class="img-circle img-responsive" height="50" width="50"></td>
        <td><a title="View details of {{item.owner.login}}" ng-click="userDetails(item.owner.login)">{{item.owner.login}}</a></td>
        <td>{{item.description}}</td>
        <td><a ng-href="{{item.html_url}}" target="_blank">{{item.html_url}}</a></td>
    </tr>
</tbody>
```

* Al ejecutar en el browser, si por ejemplo buscamos el término **angularjs** obtenemos:

![Resultados GitHub](http://res.cloudinary.com/julitogtu/image/upload/v1446102648/resultados_bakq4u.png)   

### Excelente! Ya has terminado de construir tu primera aplicación con Angularjs