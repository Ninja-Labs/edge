# WebCamp Medellin 2015

## Tarea 1: Instalando Modernizr en nuestras aplicaciones web

1. Ingresar a la [página de descarga](https://modernizr.com/download) de [Modernizr](https://modernizr.com/). Allí seleccionar las características que deseamos que la librería incluya para nuestra aplicación.

 ![Descarga de Modernizr](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Instalacion/01.png?raw=true "Descarga de Modernizr")

1. Una vez seleccionadas las características, ir a la opción *Build* y luego descargar la librería.

 ![Build Modernizr](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Instalacion/02.png?raw=true "Build Modernizr")

 **NOTA: Para efectos de estos Hands on lab, podemos descargar la versión de desarrollo que contiene todas las características de Modernizr desde este [enlace](https://modernizr.com/download?do_not_use_in_production).**

1. Ahora, vamos a crear un archivo HTML con el siguiente código en la misma carpeta donde descargamos el archivo de Modernizr.

	```html
	<!DOCTYPE html>
	
	<html>
	<head>
		<title>Modernizr test</title>
	</head>
	
	<body>
		<h1>Modernizr test - Hello World!</h1>
	</body>
	</html>
	```

1. Si abrimos la página en un navegador Chrome, podremos entrar a inspeccionar el código con las developer tools y veremos algo como esto:

 ![Navegador](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Instalacion/03.png?raw=true "Navegador")

1. Ahora vamos a agregar una referencia a Modernizr con la siguiente línea en el elemento `<head>` 

	```html
	<script src = "modernizr-custom.js"></script>
	```

1. Al guardar los cambios y recargar la página de nuevo en el navegador, veremos el mismo texto, pero al inspeccionar los elementos veremos un montón clases agregadas al elemento `<html>` por Modernizr. Estas son las características que soporta Google Chrome.

 Para tener en cuenta: Las features que no soporta el navegador se reconocen porque se agregan con el prefijo __no-*__ 

 ![Navegador](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Instalacion/04.png?raw=true "Navegador")
 
## Tarea 2: Detectando features mediante Javascript con Modernizr

El concepto para detectar features mediante Javascript con Modernizr es bastante sencillo y la librería nos simplifica bastante el trabajo. Todo consiste en verificar si está soportada la característica que usamos mediante el uso del objeto **Modernizr**, de la siguiente forma (ejemplo tomado de la documentación oficial):

```javascript
if (Modernizr.awesomeNewFeature) {
    showOffAwesomeNewFeature();
} else {
    getTheOldLameExperience();
}
```

Ahora, vamos a hacer un ejemplo para que veamos esta detección de features en funcionamiento, mediante los siguientes pasos:

1. En primer lugar, vamos a crear un archivo html en la misma carpeta donde tenemos el archivo de la librería Modernizr con el siguiente código:

	```html
	<!DOCTYPE html>
	
	<html>
	<head>
		<script src = "modernizr-custom.js"></script>
		<title>Modernizr test</title>
	</head>
	
	<body>
		<h1>Modernizr test - Javascript feature detection</h1>
	</body>
	</html>
	```

1. Luego de esto, adicionamos el siguiente script luego de la etiqueta `<body>` en el html:

	```html
	<script>
		if ( Modernizr.htmlimports ) {
			alert("Feature disponible :)");
		} 
		else {
			alert("Feature no disponible :(");
		}
	</script>
	```

1. Ahora, podemos abrir la página web que creamos en diferentes navegadores y podemos comparar los resultados.

 Esto sucede al abrir en Google Chrome:

 ![Chrome feature detection](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Js/01.png?raw=true "Chrome feature detection")

 Y esto sucede al abrir en Mozilla Firefox:

 ![Mozilla feature detection](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Js/02.png?raw=true "Mozilla feature detection")

 Ahora, inténtalo con algunas otras características. ¿Qué resultados obtienes al comparar diferentes navegadores?
 
## Tarea 3: Detectando features mediante CSS con Modernizr
 
 Además de Javascript, también podemos aprovechar las clases que Modernizr genera para personalizar nuestros estilos CSS. A continuación veremos un ejemplo de esto:
 
1. En primer lugar, vamos a crear un archivo HTML en la misma carpeta donde tenemos el archivo de la librería Modernizr con el siguiente código:

	```html
	<!DOCTYPE html>
	
	<html>
	<head>
		<script src = "modernizr-custom.js"></script>
		<title>Modernizr test</title>
	</head>
	
	<body>
		<h1>Modernizr test - Css feature detection</h1>
	</body>
	</html>
	```

1. Luego de esto, creamos un archivo de estilos CSS en la misma ubicación donde está la librería Modernizr y el archivo HTML creado en el paso anterior. La idea es agregar un estilo para navegadores que soporten efectos de reflejo y otro estilo para navegadores que no soporten estos efectos. Al archivo CSS le agregamos el siguiente código:

	```css
	h1 {
		color: #c0ccdb;
	}
	
	.cssreflections h1 {
		-webkit-box-reflect: below -.45em -webkit-gradient(linear, left top, left bottom,  from(transparent), color-stop(0%, transparent), to(rgba(255, 255, 255, 0.75)));
	}
	
	.no-cssreflections h1 {
		text-shadow: 0 1px 0 #136ed1,
		0 2px 0 #126ac9,
		0 3px 0 #1160b6,
		0 4px 0 #105cad,
		0 5px 0 #0f56a2,
		0 6px 1px rgba(0,0,0,.1),
		0 0 5px rgba(0,0,0,.1),
		0 1px 3px rgba(0,0,0,.3),
		0 3px 5px rgba(0,0,0,.2),
		0 5px 10px rgba(0,0,0,.25),
		0 10px 10px rgba(0,0,0,.2),
		0 20px 20px rgba(0,0,0,.15);
	}
	```

1. Finalmente, agregamos una referencia al archivo CSS dentro de la etiqueta `<head>` del código HTML del archivo que creamos anteriormente:

	```html
	<link rel="stylesheet" type="text/css" href="style.css">
	```
 Asegúrate de agregar en el atributo `href` el mismo nombre que le diste a tu archivo CSS.
 
1. Ahora lo que haremos es comparar el funcionamiento en dos navegadores.
 Al abrir Google Chrome, que actualmente soporta efectos de reflejo, el resultado que veremos es este:
  
 ![Chrome feature detection](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Css/01.png?raw=true "Chrome feature detection")
  
 Luego probamos en Microsoft Edge, y el resultado es el siguiente:
  
 ![Edge feature detection](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/Css/02.png?raw=true "Chrome feature detection")

## Tarea 4: Creando tests personalizados para detectar features

Así como Modernizr es capaz de detectar las características para las que tiene soporte, nosotros también podemos crear nuestros tests personalizados para casos específicos que necesitemos. A continuación, vamos a ver un ejemplo de ello: 

1. En primer lugar, vamos a crear un archivo html en la misma carpeta donde tenemos el archivo de la librería Modernizr con el siguiente código:

	```html
	<!DOCTYPE html>
	
	<html>
	<head>
		<script src = "modernizr-custom.js"></script>
		<title>Modernizr test</title>
	</head>
	
	<body>
		<h1>Modernizr test - Custom tests</h1>
	</body>
	</html>
	```

1. Luego de esto, adicionamos el siguiente script luego de la etiqueta `<body>` en el html:

	```html
	<script>
		// Este es el test que creamos.
		Modernizr.addTest('martes', function() {
			var d = new Date();
			return d.getDay() === 2;			
		});
		
		// Ahora probamos el test anterior.
		if ( Modernizr.martes ) {
			alert("Es martes!");
		} 
		else {
			alert("No es martes!");
		}
	</script>
	```

1. Ahora, podemos abrir la página web que creamos en el navegador y ver el resultado de nuestro test.

 ![Chrome feature detection](/1. Detección de caracteristicas con Modernizr/HOL.A/Img/CustomTest/01.png?raw=true "Chrome feature detection")
  
## Enlaces recomendados

* Página oficial de [Modernizr](https://modernizr.com)
* [Qué es Modernizr](http://www.arkaitzgarro.com/html5/capitulo-4.html)
* [Getting started with Modernizr](http://www.hongkiat.com/blog/modernizr/)
* [Using Modernizr to detect HTML5 features and provide fallbacks](http://html5doctor.com/using-modernizr-to-detect-html5-features-and-provide-fallbacks/)
* [CSS Feature Detection: Modernizr or Feature Queries?](http://webdesign.tutsplus.com/tutorials/css-feature-detection-modernizr-or-feature-queries--cms-23508)