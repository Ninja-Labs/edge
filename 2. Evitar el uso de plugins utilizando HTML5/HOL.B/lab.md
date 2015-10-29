#Trabajar proyectos interactivos multimedia con Html5 sin usar plugIns

En este laboratorio aprenderemos a crear un juego interactivo para niños que permita dibujar líneas entre dos columnas de objetos y reproducir sonidos de acuerdo a las acciones del usuario.
Debemos partir de la idea que trabajas con un disenador gráfico que dejó listo gran parte del código HTML y las hojas de estilo en cascada

## Tecnologías que usaremos

* Html5: como tecnología base para nuestra implementación, estructura semántica y controles de multimedia
* CSS 3.0: Para controlar la apariencia visual (diseño) de la interfaz y mejorar la experiencia de usuario 
* SVG: Para trabajar ilustraciones vectoriales de los íconos
* Buzz: Para facilitar el trabajo con la etiqueta audio
* PaperJS: para facilitar el trabajo con la etiqueta canvas

## Editor de código

* Para este laboratorio podrás usar tu editor de código preferido incluso Bloc de notas si lo deseas, yo personalmente prefiero usar Visual Studio Code

## Vídeos y audios de muestra

* Para el laboratorio puedes usar los audios de muestra que encontrarás en este repositorio de GitHub, o puedes usar tus propios archivos multimedia si lo deseas

## Para cuando termines de implementar el laboratorio tendrás una interfaz interactiva como la siguiente

![Resultado final](./ResultadoFinal/ResultadoFinal.PNG?raw=true "Resultado final")

## Tarea 1 - Finalicemos el HTML

1. Busca los archivos SVG que se encuentran dentro de la carpeta /SVG del repositorio
1. Ubica la lista de items que va a tener los íconos de la lista de la izquierda. En este momento debe verse mas o menos así:
		
		<div class="columnaOpcionesA">
			<li class="itemColumna">
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">

					<!-- Aquí va el SVG avion.svg -->
					</div>
				</div>
			</li>
			<li class="itemColumna" >
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">

					<!-- Aquí va el SVG carro.svg -->
					</div>
				</div>
			</li>
			<li class="itemColumna" >
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">

					<!-- Aquí va el SVG metro.svg -->
					</div>
				</div>
			</li>
			<li class="itemColumna" >
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">

					<!-- Aquí va el SVG moto.svg -->
					</div>
				</div>
			</li>
			<li class="itemColumna" >
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">
					
					<!-- Aquí va el SVG helicoptero.svg -->
					</div>
				</div>
			</li>
			<li class="itemColumna" >
				<div id="columnaConectableA-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableA">
					
					<!-- Aquí va el SVG bici.svg -->
					</div>
				</div>
			</li>

1. Asigna los nombres de los medios de transporte en los Items de lista de la Columna B

	<div class="columnaOpcionesB">
		<ul>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>AUTOMÓVIL</strong> </div>
				</div>
			</li>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>MOTOCICLETA</strong> </div>
				</div>
			</li>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>METRO</strong> </div>
				</div>
			</li>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>HELICÓPTERO</strong> </div>
				</div>
			</li>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>AVIÓN</strong> </div>
				</div>
			</li>
			<li class="itemColumna">
				<div id="columnaConectableB-objeto-" class="conectable">
					<div class="contenidoItemColumnaConectableB"> <strong>BICICLETA</strong> </div>
				</div>
			</li>
		</ul>
	</div>

1. Para la Columna A, crea dentro del item de lista (y para cada una de los items de lista) un atributo llamado data-answer, que usaremos para definir cual esl número del item de su pareja
		
		<li class="itemColumna" data-answer="">
			<div id="columnaConectableA-objeto-" class="conectable">
				<div class="contenidoItemColumnaConectableA">

				<!-- Aquí va el SVG avion.svg -->
				</div>
			</div>
		</li>

1. Repite este punto para cada item de lista para la culumna B: Asigna un valor numérico consecutivo (empezando por el 1) al ID de cada DIV dentro del item de la lista.

		<div class="columnaOpcionesB">
			<ul>
				<li class="itemColumna">
						<div id="columnaConectableB-objeto-1" class="conectable">
						<div class="contenidoItemColumnaConectableB"> <strong>AUTOMÓVIL</strong> </div>
					</div>
				</li>

1. Asigna el número de la pareja que le corresponde a cada item de la Columna A
		
		<li class="itemColumna" data-answer="5">
			<div id="columnaConectableA-objeto-" class="conectable">
				<div class="contenidoItemColumnaConectableA">

				<!-- Aquí va el SVG avion.svg -->
				</div>
			</div>
		</li>

1. Asigna un valor numérico consecutivo (empezando por el 1) al ID de cada DIV dentro del item de la lista. Recuerda repetir este proceso para cada item de lista para la culumna A
		
		<li class="itemColumna" data-answer="5">
			<!-- al ID de este div -->
			<div id="columnaConectableA-objeto-1" class="conectable">
				<div class="contenidoItemColumnaConectableA">

				<!-- Aquí va el SVG avion.svg -->
				</div>
			</div>
		</li>


1. Abre cada archivo SVG en el editor código y copia el código de cada ícono para pegarlo dentro de cada etiqueta de item de lista para que reemplace el comentario asegúrate de que se mantenga el orden de asignado (si quieres cambiarlos, debes prestar atención a los valores registrados en el atributo data-answer del punto anterior)
1. Visita http://buzz.jaysalvat.com/ y descarga la librería de Buzz Audio. Con ella trabajaremos fácilmente sobre la etiqueta audio
1. Visita http://www.paperjs.org/ y descarga la librería PaperJS para trabajar fácilmente dibujo en vectores sobre la etiqueta canvas
1. Visita jQuery y descarga el último build de la versión 2.0 de jQuery que usaremos para acceder al DOM y poder asignar propiedades o apuntadores a los elementos de HTML
1. Incluye las librerías descargadas en el head de la página

	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="js/paper-full.min.js"></script>
	<script type="text/javascript" src="js/jquery.pep.js"></script>
	<script type="text/javascript" src="js/buzz.min.js"></script>
	
_Nota por favor que incluimos la librería PEP (descargada de http://pep.briangonzalez.org/ ) la cual sirve para extender funcionalidades de drag&drop de los objetos html_

## Tarea 2 - Preparar el entorno de dibujo
1. Incluye la etiqueta canvas en el HTML (debes buscar en el HTML la etiqueta Div con el class="lineas")
		
		<div class="lineas">
			<canvas id="Lineas-pregunta" width="574" height="324">
			</canvas>
		</div>

1. Crear la etiqueta script para las funciones del paperJS. Presta especial atención a que el atributo **Type** es diferente a las etiquetas normales de script.
		
		<head>
		...
		...
			<script type='text/paperscript'>
			</script>
		...
		...
		</head>


1. Asignar el Canvas para PaperJS

		<head>
		...
		...
			<script type='text/paperscript' canvas='Lineas-pregunta' resize>
			</script>
		...
		...
		</head>

1. Asigna los estilos del Canvas. Puedes agregar estos estilos, puedes buscar los apuntadores dentro de la hoja de estilos, o simplemente copiarlos al final de la hoja de estilos.

		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .lineas{
			margin-left: 54px;
			margin-right: 88px;
			height: 324px;
		}
		
			#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .lineas canvas{
				cursor:crosshair !important;
			}


## Tarea 3 - Crear los métodos para el MouseDown, MouseMove, MouseUp de PaperJS para dibujar lineas
1. Dentro de la etiqueta script para PaperJS, incluye estos métodos 

		<script type='text/paperscript' canvas='Lineas-pregunta' resize>
			//Variables
			
			//Custom Functions
				function crearBotonBorrar(){
					
				}
				
				function borrar(){
					
				}
				
			//Métodos de PaperJS
				function onMouseMove(a){

				}
				function onMouseDown(a){
					path=new Path({segments:[a.point],strokeColor:'brown',fullySelected:false})
				}
				
				function onMouseDrag(a){

					path.add(a.point)

				}
				function onMouseUp(a){
					
					path.fullySelected=false;

				}
				
				function onKeyUp(event){

				}
				
				paper.setup(canvas);
		</script>

## Tarea 4 - Crear las variables que se usarán en la validación
Para poder validar si el usuario seleccionó las parejas correctas, debemos hacer la validación con javascript y para realizarlas, necesitaremos unas variables de trabajo
1. Incluye estas variables dentro de la etiqueta script en la que se trabajarán los métodos de PaperJS
	
		<script type='text/paperscript' canvas='Lineas-pregunta' resize>
		//Variables
			var path;
			var canvas=paper.view.element;
			var canvasAlto;
			var canvasAncho;
			canvasAlto=$(canvas).parent().innerHeight();
			canvasAncho=$(canvas).parent().innerWidth();
			var numeroItems;
			var moduloItems;
			var Xinicial;
			var Yinicial;
			var positionItem;
			var objetivoItem;
			var Xfinal;
			var Yfinal;
			var i;
			var j;
			var draw=false;
			var valorItemInicial;
			var mostrarBotonBorrar=true;

## Tarea 5 - Editar los estados Activo, Correcto e Incorrecto
Los items de las columnas necesitan demostrar una apariencia durante la interacción con la interfaz. Estos estados serán asignados por medio de validaciones de javascript en los métodos de PaperJS
1. Tenemos dos opciones: o pegas este código al final de la hoja de estilos... o ubicas los apuntadores y le agregas las propiedades aquí asignadas

		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumnaActivo{
			background-color: #e5f607;
		}
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumnaCorrecto{
			border: 2px solid #9C0;
			background-color: #FFF;
		}
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumnaInCorrecto{
			border: 2px solid #A00;
			background-color: #FDD;
		}
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumna .conectable .contenidoItemColumnaConectableA{
			width: 40px;
			height: 40px;
			border: 2px solid transparent;
		}
		
		/* */
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesB .itemColumnaActivo{
			background-color: #FC0;
		}
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesB .itemColumnaCorrecto{
			background-color:#9C0;
			color: #FFF;
		}
		
		#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesB .itemColumnaInCorrecto{
			background-color:#900;
			color: #FFF;
		}

## Tarea 6 - Borrar las líneas en cualquier momento
Los métodos de PaperJS se integran limpiamente con jQuery. Esto es muy útil al momento de trabajar con objetos que no fueron creados CON paperJS y resultan necesarios. 

**Función para borrar las lineas**
Dentro de la etiqueta script para trabajar con PaperJS encuentras dos funciones con el comentario //Custom Functions usaremos estas como ejemplo para trabajar los métodos de dibujo de PaperJS
1. Dentro de la función crearBotonBorrar() debemos escribir los siguientes comandos para dibujar objetos vectoriales en el canvas
	
	...
	...
		//Custom Functions
		function crearBotonBorrar(){
			//Obtener la altura del canvas
			canvasAlto=$(canvas).parent().parent().find('.columnaOpcionesA').innerHeight();
			//Obtener el ancho del canvas
			canvasAncho=$(canvas).parent().innerWidth();
			//Arreglo con los valores para las esquinas redondeadas del botón
			var esquinas=new Size(3,3);
			//Crear objeto dónde guardaremos los parámetros del rectángulo
			//Utiliza la altura del canvas para asignar las medidas en pixeles del objeto
			var rectanguloBlanco=new Rectangle(new Point((canvasAncho/2)-75,(canvasAlto-25)),new Point((canvasAncho/2)+75,canvasAlto-3));
			//El botón tendrá 150 pixeles de ancho por 22 pixeles de alto
			
			//Invocar el método de dibujo de rectángulos y usaremos los objetos
			var fondoBoton=new Path.RoundRectangle(rectanguloBlanco,esquinas);
			//Asignar el color de fondo
			fondoBoton.fillColor='white';
			//Asignar el color de borde
			fondoBoton.strokeColor='grey';
			//Crear nuevo objeto con parámetros para un nuevo rectángulo
			var rectangulo=new Rectangle(new Point((canvasAncho/2)-72,(canvasAlto-15)),new Point((canvasAncho/2)-62,canvasAlto-12));
			//Invocar el método de dibujo de rectángulos y usaremo el nuevo objeto
			var equisA=new Path.RoundRectangle(rectangulo,esquinas);equisA.fillColor='red';
			//Duplicar el rectángulo recién creado 
			var equisB=equisA.clone();
			//Rotar los rectángulos en ambos sentidos para convertirlos en la "X" como ícono del botón 
			equisA.rotate(45);
			equisB.rotate(-45);
			//Crear el contenedor de texto para el mensaje del botón
			var textItem=new PointText({content:'Click aquí para borrar',point:new Point((canvasAncho/2)-56,(canvasAlto-10)),fillColor:'black',});
			//Convertir todos los elementos en un grupo que soporte asignar eventos e invocar funciones propias
			var boton=new Group([fondoBoton,equisA,equisB,textItem]);
			boton.onClick=function(){borrar()}
		}
	...
	...
	... 
_En este momento, el canvas debe dibujar el botón de borrar (aun no hace nada)_

**Función para dibujar el boton de borrar**
La función borrar nos permite limpiar el canvas, pero también debe eliminar los estados de los items de las columnas.
1. Debajo de la función para crear el botón se encuentra la función borrar, allí debes escribir este código
	
		...
		...
		function borrar(){
			//Limpiar el canvas
			paper.setup(canvas); //Con sólo este método, re-invoca el estado inicial del canvas y queda "Limpio"
			
			//Remover los estados de los items de las Columnas y dejarlos en su estado inicial
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaInCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaActivo');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaInCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaActivo');
			
			//Variable de control (por si acaso se necesita)
			mostrarBotonBorrar=true;
			
			//Redibujar el botón borrar (al limpiar el canvas, también se perdió)
			crearBotonBorrar()
		}
		...
		...
		...
		
_En este momento, el botón ya debe borrar cualquier línea que fue dibujada en el canvas_

## Tarea 7 - Condiciones para dibujar las líneas

Limitar su click a unas áreas específicas los métodos de PaperJS que fueron creados para controlar los eventos.
1. Invoca la función para crear el botón borrar dentro del método onMouseMove(a)
		
		...
		...
		function onMouseMove(a){
			
			//Valida si el canvas ocupa espacio en la pantalla y luego dibuja el botón borrar
			if(mostrarBotonBorrar&&(canvasAlto!=0&&canvasAncho!=0)){
				crearBotonBorrar();
				mostrarBotonBorrar=false
			}
		}
		...
		...
		
2. Usaremos las variables de trabajo creadas anteriormente dentro de el método onMouseDown(a) para calcular la posición del mouse y habilitar o inhabilitar el dibujo usando condiciones
	
		...
		...
		function onMouseDown(a){
			//Obtener el alto del canvas
			canvasAlto=$(canvas).innerHeight();
			//Obtener el ancho del canvas
			canvasAncho=$(canvas).innerWidth();
			//Obtener el número de items de la columna A
			numeroItems=$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna').length;
			//Calcular el valor (en pixeles) de la medida que tendrá el área activa de dibujo de cada item 
			moduloItems=canvasAlto/numeroItems;
			//Posición inicial del mouse
			Xinicial=a.point.x;
			//Posición inicial del mouse
			Yinicial=a.point.y;
			//Define frente a cuál item se encuentra el mouse 
			positionItem=Yinicial/moduloItems;
			//Valida si en el click, el mouse está dentro de los primeros 40 pixeles del canvas 
			if(Xinicial<40){
				//Permite dibujar en el evento MouseDrag
				draw=true;
				for(i=1;i<=numeroItems;i++){
					positionItem=Math.floor((positionItem-(positionItem*0.3)/100))+1;
					if(positionItem==i){
						//Usa el valor del positionItem, para asignarle el estado activo mientras se traza la línea
						$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).addClass('itemColumnaActivo');
						//Usa el atributo data-answer de la etiqueta para saber cual es su pareja en la Columna B 
						valorItemInicial=$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).parent().attr('data-answer')
					}
				}
				if(path){
					path.selected=false
				}
				//Inicia el dibujo de la línea
				path=new Path({segments:[a.point],strokeColor:'brown',fullySelected:false})
			}
		}
		...
		...
		
1. Si las condiciones son correctas, la variable draw tendrá valor true, y permitirá dibujar en el canvas

		...
		...
		function onMouseDrag(a){
			if(draw){
				//Agrega nodos al vector de la línea
				path.add(a.point)
			}
		}
		...
		...
		
**Validación de la selección correcta**
1. Una vez que limitamos desde dónde se puede empezar a dibujar, es necesario que evaluemos si al terminar de levantar el mouse, se dibujó una línea hasta el nombre correcto. Para esto usamos validaciones similares a las anteriores dentro del método onMouseUp(a)

		...
		...
		function onMouseUp(a){
			//Obtener el número de items de la columna A
			numeroItems=$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna').length;
			//Calcular el valor (en pixeles) de la medida que tendrá el área activa de dibujo de cada item
			moduloItems=canvasAlto/numeroItems;
			//Posición final del mouse
			Xfinal=a.point.x;
			//Posición final del mouse
			Yfinal=a.point.y;
			//Define frente a cuál item se termina el el movimiento del mouse
			objetivoItem=Yfinal/moduloItems;
			//Valida si al soltar el botón, el mouse está dentro de los últimos 35 pixeles del canvas
			if(Xfinal>(canvasAncho-35)){
				for(j=1;j<=numeroItems;j++){
					objetivoItem=Math.floor((objetivoItem-(objetivoItem*0.3)/100))+1;
					if(objetivoItem==j&&objetivoItem==valorItemInicial){
						//Remueve estados incorrectos y asigna el estado correcto a los items de las columnas
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaCorrecto');
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).removeClass('itemColumnaInCorrecto');
						$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');
						$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaCorrecto');
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','si')
	
						
					}else if(objetivoItem==j&&objetivoItem!=valorItemInicial){
						//Remueve estados correctos y asigna el estado incorrecto a los items de las columnas
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaInCorrecto');
						$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');
						$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaInCorrecto');
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','no')
						
					}else if(objetivoItem==j){
						$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaActivo')
					}
				}
			}else{
				$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).removeClass('itemColumnaActivo');
				$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).removeClass('itemColumnaInCorrecto')
			}
			path.fullySelected=false;
			draw=false
		}
		...
		...
		...
_En este momento, el canvas sólo dibujará líneas desde un objeto a otro y si son pareja mostrará un color verde, si no son pareja los mostrará en rojo_

## Tarea 8 - Trabajar con audios en el proyecto
Los audios aquí vinculados se encuentran en la carpeta 'sounds' de carpeta del repositorio.
1. Crea una etiqueta script de HTML en el head de la página (aquí pondremos invocaremos los métodos de la librería Buzz).
1. Dentro de ella, primero pega este código para que valide si el navegador soporta el audio en mp3
		
		//Validar si el navegador soporta el formato .mp3
		if (!buzz.isMP3Supported()) {
			alert("Your browser doesn't support MP3 Format.");
		}

1. Debajo de la validación, usa este código para importar el audio de fondo del proyecto

		//Este audio se carga, hace buffer, se reproduce solo y se repite automáticamente
		var sonidoFondo = new buzz.sound("sounds/background", {
			formats: [ "mp3"],
			preload: true,
			autoplay: true,
			loop: true
		});
		
1. Luego incluiremos el audio que sonará cuando se conecten mal dos elementos en las columnas
		
		//Este audio no se reproduce solo
		var sonidoError = new buzz.sound("sounds/error", {
			formats: [ "mp3"],
			preload: true,
			autoplay: false,
			loop: false
		});
		
1. Por último, incluimos el audio que sonará 
		
		//Este audio no se prepoduce solo
		var sonidoWin = new buzz.sound("sounds/win", {
			formats: [ "mp3"],
			preload: true,
			autoplay: false,
			loop: false
		});
		
1. Como ya incluimos los audios ahora usaremos dentro de la etiqueta script este método de la librería Buzz para bajar el volumen del audio de fondo a un 10% 
		
		//Cambiar el volumen a un 10%
		sonidoFondo.play().setVolume(10);
_En este momento el audio de fondo ya debe sonar automáticamente cuando abres la página en el navegador_

Ahora debemos asegurarnos que podamos controlar el volumen del sonido de fondo. Para lograrlo invocaremos los métodos de Buzz desde los triggers de jQuery
1. Crea una nueva etiqueta script dentro del head de la página
1. Escribe estos triggers de jQuery dentro de esta etiqueta:


		$(document).ready(function () {
			// Variable para 
			var vol = 10;
		
			$(".subirVolumen").click(function(){
				
				//Este método es de Buzz y sube el volumen
				sonidoFondo.play().setVolume(vol++); 
			})
			
			$(".bajarVolumen").click(function(){
				
				//Este método es de Buzz y baja el volumen
				sonidoFondo.play().setVolume(vol--);
			})
		})
_En este momento, ya debe poder bajarse el volumen con los botones  cuando abres la página en el navegador_
 
Para asignar los audios a las validaciones de las conexiones, solo debes invocar el método play de Buzz en la validación de items de la librería de PaperJS
1. Busca en el código que trabajaste de paperJS la función onMouseUp(a). Debería verse así:
		
		<script type='text/paperscript' canvas='Lineas-pregunta' resize>
			...
			...
			function onMouseDrag(a){
				if(draw){
					path.add(a.point)
				}
			}
			function onMouseUp(a){
				numeroItems=$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna').length;
				moduloItems=canvasAlto/numeroItems;
				Xfinal=a.point.x;
				...
				...
				...
1. Ahora busca el for que recorre el número de items de la columna. Debe verse más o menos así:

		...
		...
		if(Xfinal>(canvasAncho-35)){
			for(j=1;j<=numeroItems;j++){
				objetivoItem=Math.floor((objetivoItem-(objetivoItem*0.3)/100))+1;
				if(objetivoItem==j&&objetivoItem==valorItemInicial){
		...
		...
		... 
3. Ahora, para el sonidoWin, invoca el método play de Buzz dentro del if() que está dentro del for. Debe quedar así:

		<script type='text/paperscript' canvas='Lineas-pregunta' resize>
		...
		...
		if(objetivoItem==j&&objetivoItem==valorItemInicial){
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).removeClass('itemColumnaInCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','si')
			
			//Metodo Play de Buzz para el audio
			sonidoWin.play()
			
		}else if(objetivoItem==j&&objetivoItem!=valorItemInicial){
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaInCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');
			$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaInCorrecto');
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','no')
			
			//Metodo Play de Buzz para el audio
			sonidoError.play()
			
		}else if(objetivoItem==j){
			$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaActivo')
		}
		...
		...
		...
_En este momento, si el usuario dibuja una línea y conecta correctamente los items sonará un aplauso y si se equivoca, sonará triste_

## Tarea 9 - Animaciones de los SVG

1. Incluye al final del CSS estos apuntadores: El primero define las propiedades de la etiqueta SVG y el segundo asigna otros valores a las propiedades cuando el mouse se encuentra sobre el div padre del SVG


	#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumna .conectable .contenidoItemColumnaConectableA SVG{
		transition:all 1s;
		transform: perspective(400px) rotateY(0deg);
		position:relative;
	}
	
	#cvjl-AcDs #preguntas .preguntaTipoConectarColumnas .columnaOpcionesA .itemColumna .conectable .contenidoItemColumnaConectableA:hover SVG{
		transform: perspective(400px) rotateY(410deg);
		width: 80px;
		height: 80px;
		z-index: 20;
	}
