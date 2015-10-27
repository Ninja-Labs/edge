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

### Hemos visto como Modernizr es totalmente independiente del browser, así pensamos en soporte de caraterísticas y no en browsers y versiones de cada uno.