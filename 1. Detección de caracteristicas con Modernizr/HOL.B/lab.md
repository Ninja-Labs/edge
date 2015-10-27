#WebCamp Bogotá 2015 - Feature Detection

Los exploradores antiguos, todavía tienen una representación importante en el mercado, lo cual dificulta en parte la adopción de nuevas
tecnologías como lo son **HTML5** y **CSS3**, para solucionar dicho problema se usaban en esencia dos diferentes técnicas:

* User Agent: El user agent es un texto que permite identificar el navegador.
* Hacks para Internet Explorer: Existen ciertas etiquetas (hacks) que permiten detectar la versión de Internet Explorer e incluir scripts/estilos exclusivos para solucionar problemas
de compatibilidad.

Sin embargo, las dos técnicas anteriores tienen el problema de estar trabajando contra browsers y versiones específicas, aumento 
la cantidad de código necesario y dificultando la manteniblidad del mismo. Para solucionar dicho problema, la idea es dejar de pensar
en browsers y versiones para comenzar a pensar en características.

Para trabajar orientados al soporte de características, una de las líbrerias más populares es [Modernizr](https://modernizr.com/),
la cual permite entre otras cosas, determinar si determinada característica de HTML5 y/o CSS3 está soportada en el browser y
así poder "degradar" esa característica y simular dicha funcionalidad ofreciendo la misma funcionalidad sin importar
la versión del explorador que se este utilizando.

## Tarea 1: Implementar Video con HTML5

En esta primer tarea, vamos a implementar el uso de multimedia (video) aprovechando la nueva API de HTML5.

* Crear un documento HTML con la siguiente estrucutra, para implementar video en HTML5 se tiene el nuevo tag `<video>`:

```html
<!DOCTYPE html>

<html>
<head>
    <title>Video HTML5</title>
</head>
<body>
    <h1>Video en HTML5</h1>
    <hr>
	<div id="videoContainer">
		<video src="https://sec.ch9.ms/ch9/9060/3c2c8d35-dd14-4c4e-a454-6f490f799060/VScodegettingstarted_high.mp4" 
			controls="controls" autoplay="autoplay" 
			height="600px" width="600px">
		</video>
	<div>
    <hr>
    <a href="https://twitter.com/julitogtu">@julitogtu</a>
</body>
</html>
```
* Abrir la página HTML creada en Internet Explorer 11, luego cambiar a modo IE 8 y observar como el video ya no se reproduce

## Tarea 2: Utilizando hacks para Internet Explorer

Anteriormente se comentó el uso de hacks para Internet Explorer, así que inicialmente solucionaremos el problema utilizando unos de ellos.

* Los hacks de Internet Explorer con comentarios con una condición específica, añadir el siguiente código en el `<head>` para validar si
el browser es IE 8 o inferior:

```html
<!--[if lte IE 8]>
//TODO: Add some code to fix problems 
<![endif]-->
```

*  Para solucionar el problema, se va a "degradar" el soporte de video y en lugar de utilizar el video nativo de HTML5 se implementará un objeto flash, agregando el código
al hack anterior:

```html
<!--[if lte IE 8]>
<script type="text/javascript">
	var addFlash = function(){
		var videoContainer = document.getElementById("videoContainer");
		var flashVideo = "<iframe src='https://channel9.msdn.com/Blogs/BeLux-Developer/Getting-Started-with-Visual-Studio-Code/player?format=flash#autoplay' width='600' height='600' allowFullScreen frameBorder='0'></iframe>";
		videoContainer.innerHTML = flashVideo;
	};
	window.onload = addFlash;
</script> 
<![endif]-->
```

* Validar nuevamente en Internet Explorer en modo IE 8 y ver que el video se carga en Flash.

## Tarea 3: Degradando características con Modernizr

**Modernizr** permite detectar soporte por parte del browser a una determinada característica de HTML5 y/o CSS3 de una forma bastante sencilla,
adicionalmente, la prueba toma apenas unos milisegundos por lo que el performance del sitio no se ve afectado, adicioalmente
Modernizr cuenta con opciones avanzadas para el cargue de recursos.

La sintaxis básica para usar Modernizr es la siguiente:

```javascript
if (Modernizr.feature) {
    GoToHeavenWithTheCoolFeature();
} else {
    GoToHellWithAnyOtherWay();
}
```

* El primer paso es descargar la librería [Modernizr](https://modernizr.com/), en la pestaña de download seleccionar

![Modernizr Features](http://res.cloudinary.com/julitogtu/image/upload/v1445953612/modernizr-features_hdux2v.png) 

![Modernizr Download](http://res.cloudinary.com/julitogtu/image/upload/v1445953726/modernizr-download_xylwjq.png)

* Ahora, en el `<head>` del documento HTML, referenciar el archivo js descargado:

```html
<head>
    <title>Video HTML5</title>
    <script type="text/javascript" src="/scripts/modernizr-custom.js"></script>
</head>
```

* Una vez referenciada la librería, al visualizar la página HTML en el browser, al tag html se le añaden nuevas clases css
las cuales permiten identificar si determinada feature es soportada o no (abre el archivo y con las herramientas de desarrollador F12
revisa el tag html):

![Modernizr Video](http://res.cloudinary.com/julitogtu/image/upload/v1445955093/modernizr-class_ext7kf.png)

En el caso en que video no sea soportado o alguna otra característica, se antepone el prefijo **no-feature**

![Modernizr no-video](http://res.cloudinary.com/julitogtu/image/upload/v1445955349/modernizr-novideo_c6k2o5.png)

* Para detectar el soporte de video utilizando Modernizr, simplemente es necesario llamar **Modernizr.video** el cual retorna true
si el video es soportado, en caso contrario el valor retornado es false, por lo tanto, en el head del documento, vamos a
adicionar el siguiente código JavaScript justo después de la referencia de la librería Modernizr:

```javascript
<script type="text/javascript">
	var testVideoSupport = function(){
		if (Modernizr.video){
			alert('El browser soporta video HTML5');
		}
		else{
			alert('El browser NO soporta video HTML5');
		}
	}
	window.onload = testVideoSupport;
</script>
```

* En el caso que el browser no soporte video, se muestra el alert indicando que no existe soporte por parte del browser, y es necesario implementar un camino
alternativo, en ese caso utilizaremos un archivo Flash tal como se hizo en el ejemplo de los hacks de Internet Explorer:

```javascript
 <script type="text/javascript">
	var testVideoSupport = function(){
		if (Modernizr.video){
			alert('El browser soporta video HTML5');
		}
		else{
			alert('El browser NO soporta video HTML5, usar Flash en este caso');
			var videoContainer = document.getElementById("videoContainer");
			var flashVideo = "<iframe src='https://channel9.msdn.com/Blogs/BeLux-Developer/Getting-Started-with-Visual-Studio-Code/player?format=flash#autoplay' width='600' height='600' allowFullScreen frameBorder='0'></iframe>";
			videoContainer.innerHTML = flashVideo;
		}
	}
	window.onload = testVideoSupport;
</script>
```

#### Hemos visto como Modernizr es totalmente independiente del browser, así pensamos en soporte de caraterísticas y no en browsers ni versiones de cada uno.

## Tarea 4: Cargando scripts externos con Modernizr y Require.js

Require.js es una de las librerías más utilizadas para cargar scripts externos, y la idea es aprovechar
dicha librería para cargar un script externo en el caso que determinada característica no este soportada, 
para verlo en funcionamiento vamos a utilizar el tipo de almacenamiento **sessionStorage** que trabaja con 
un modelo de diccionario (key - value).

La sintaxis (no la única posible) para leer/escribir de sessionStorage es:

```javascript
//Write
sessionStorage.setItem('key', 'value');

//Read
sessionStorage.getItem('key');
```

* Primero, vamos a crear un nuevo documento HTML, la página simplemente va a tener una caje de texto y un botón para ir
guardando lo que se va escribiendo, así mismo una lista para ir mostrando los diferentes items almacenados:

```html
<!DOCTYPE html>

<html>
<head>
    <title>sessionStorage HTML5</title>
</head>
<body>
    <h1>sessionStorage en HTML5</h1>
    <hr>
    <div>
		<input type="text" placeholder="Type something" id="task">
		<input type="button" value="Add taks" id="addTask">
        <ul id="items"></ul>
	<div>
    <hr>
    <a href="https://twitter.com/julitogtu">@julitogtu</a>
</body>
</html>
```

* La idea, es ir guardando cada tarea en sessionStorage, por lo cual se debe agregar un manejador para el evento click del
botón y allí hacer el llamado a **sessionStorage.setItem**, para ello, dentro del `<head>` adicional el siguiente script:

```javascript
<script type="text/javascript">
    var init = function()
    {
        var i = 1;
        var button = document.getElementById("addTask");
        button.onclick = function(){
            var task = document.getElementById("task");
            var items = document.getElementById("items");
            sessionStorage.setItem('Task ' + i,task.value);
            var li = document.createElement("li");
            li.textContent = 'Task ' + i + " - " + task.value;
            items.appendChild(li);
            task.value = "";
            i++;
        }
    }
    window.onload = init;
</script>
```

* Ahora, abrir el documento en un browser e ir agregando tareas, en las herramientas de desarrollo de Firefox se tiene la posibilidad de 
visualizar ese sessionStorage:

![sessionStorage HTML5](http://res.cloudinary.com/julitogtu/image/upload/v1445963171/sessionStorage1_utirhe.png)

* Al igual que el demo anterior, vamos a agregar la referencia a la líbreria Modernizr en el `<head>` del documento (en este punto, descargar de nuevo Modernizr agregando la característica de sessionStorage),
luego de adiciona la librería, si validamos nuevamente en Internet Explorer 11 o inferior, efectivamente no se tiene soporte a sessionStorage:

![Modernizr no-sessionStorage](http://res.cloudinary.com/julitogtu/image/upload/v1445964430/sessionStorage2_shph3p.png)

* Como primer paso para dar soporte a sessionStorga, nos vamos a aportar el la librería [jStorage](http://www.jstorage.info/), así que descargar la 
librería y adicionarla en la carpeta de scripts. (el archivo se encuentra en la carpeta Tarea 4 - index2.html)

* Adicionalmente, descargamos y referencias la librería [Require.js](http://requirejs.org/) y la referenciamos en el archivo HTML.

* Y finalmente referenciamos la librería [jQuery](https://jquery.com/) ya que es utilizada por el plugin jStorage.

* En el momento, las referencias a las librerías en el `<head>` deben verse así: 

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="../scripts/modernizr-custom.js"></script>
<script type="text/javascript" src="../scripts/require.js"></script>
```

* El siguiente paso, nuestro código JavaScript, primero con **Modernizr.sessionstorage** identificamos si tenemos soporte
o no a sessionstorage, en caso negativo cargamos explicitamente el plugin **jStorage** aprovechando
que tenemos **Require.js**, y finalmente, creamos un objeto llamado **customSessionStorage**
el cual va a ser un "wrapper" para el plugin referenciado en caso de no tener soporte de sessionStorage,
y en caso de si tener soporte simplemente le asignamos lo que tiene actualmente sessionStorage, así
tenemos un único objeto con el cual trabajar:

```javascript
<script type="text/javascript">
var init = function()
{
	if (!Modernizr.sessionstorage){
		require(["../scripts/jstorage.js"], function(){
			console.log("jstorage.js loaded!");
			window.customSessionStorage = $.jStorage;
			customSessionStorage.setItem = customSessionStorage.set;
			customSessionStorage.getItem = customSessionStorage.get;
		});
	}
	else
	{
		customSessionStorage = window.sessionStorage;
	}
	
	var i = 1;
	var button = document.getElementById("addTask");
	button.onclick = function(){
		var task = document.getElementById("task");
		customSessionStorage.setItem('Task ' + i,task.value);
		$("#items").append("<li> Task " + i + " - " + task.value + "</li>");
		task.value = "";
		i++;
	}
}
window.onload = init;
</script>
```

#### Este ejemplo tiene como fin ejemplificar el uso de Modernizr junto con Require.js, pero no es una versión para entornos de producción.