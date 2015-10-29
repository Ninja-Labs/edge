#Las mejores prácticas para trabajar con CSS 3.0 y sacar sus mejores características

En este laboratorio aprenderemos a trabajar los estilos CSS con una metodología clara que facilite su edición y aprovecharemos las propiedades de CSS 3.0 de forma que la animación y la interacción requieran menos tiempo escribiendo código javascript.
Debemos partir de la idea que trabajas con un disenador gráfico que dejó listo gran parte del código HTML y las hojas de estilo en cascada

## Tecnologías que usaremos

* Html5: como tecnología base para nuestra implementación, estructura semántica y controles de multimedia
* CSS 3.0: Para controlar la apariencia visual (diseño) de la interfaz y mejorar la experiencia de usuario 

## Editor de código

* Para este laboratorio podrás usar tu editor de código preferido incluso Bloc de notas si lo deseas, yo personalmente prefiero usar Visual Studio Code

## Imágenes de muestra

* Para el laboratorio puedes usar las imágenes de muestra que encontrarás en este repositorio de GitHub, o puedes usar tus propios archivos multimedia si lo deseas

## Para cuando termines de implementar el laboratorio tendrás una interfaz interactiva como la siguiente

![Resultado final](./ResultadoFinal/ResultadoFinal.PNG?raw=true "Resultado final")

## Tarea 1 - Finalicemos el HTML

1. Terminar el código HTML del menu
1. Incluir librerías
1. Asignar los ID, los Class


## Tarea 2 - 

1. Ajustar CSS del menu 

## Tarea 3 - 

1. Ajustar la Interaccion del menu

## Tarea 4 - 

1. Terminar el código HTML del submenu
1. Ajustar CSS del submenu

## Tarea 5 - 

1. Crear la animación del submenu

## Tarea 6 - Terminar el código HTML de los items del submenu
1. 

**Ajustar estilos de los items del submenu**
1. Las imágenes medianas de los items del submenú son los fondos que se deben mostrar 

## Tarea 7 - Crear la animación de los fondos del submenu
En este momento las imágenes para los fondos de los submenús son visibles pero no se ven animadas
1. Asignemos la propiedad transition a las propiedades CSS del item de lista de las opciones del submenú. _No copies el código. Preferiblemente edita estas propiedades_

		#header #menu ul li ul li{
			border: none;
			display: block;
			float: none;
			margin:0px 0px 6px 0px;
			background-color: #000;
			border: 1px solid #666;
			padding: 3px;
			width: auto;
			height: auto;
			opacity: 1;
			transition: all 0.3s;
		}

1. Debajo del apuntador del punto anterior encontramos el siguiente apuntador. Asignemos las propiedades que deben tener las imágenes de fondo 

		#header ul li ul li img.fondoItemMenu{
			z-index: -20;
			display: none;
			transition: opacity 1s;
			opacity: 0;
		}

1. Creemos los apuntadores para establecer las propiedades de los fondos y los items del submenú al pasar el mouse por encima. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

		#header #menu ul li ul:hover li{
			opacity: 0.1;
		}
		
			#header #menu ul li ul li:hover{
				opacity: 1;
			}
			
			#header ul li ul:hover li:hover img.fondoItemMenu{
				display: block;
				opacity: 1;	
			}

## Tarea 8 - Incluir el jQuery que abre el menú de imágenes
1. Pega este código de jQuery antes del trigger que abre el menú principal


		function abrirTrabajo(event) {
			var cuantosLiHay = $(this).parent().parent().find("li").length;
			
			var $BotonSeleccionado = $(this);
			
			var contadorLi = 0;
			
			$(this).parent().parent().find("li").each(function(){
				contadorLi++;
				
				if(jQuery($BotonSeleccionado, this)){
					
					$("#work" + contadorLi).css("display","block");
					
				}
				
			});
			
		}
			
		function mostrarImagenProyecto(event){
			$("#contenidos .listaImagenesProyecto ul li a").css({'border-color': 'transparent'});
			$(this).css({'border-bottom': '5px solid #C00', 'opacity' : '1'});
			
			var nombreBotonClickImagen = $(this).attr("id");		 
			var numeroBotonClickImagen = nombreBotonClickImagen.substring(nombreBotonClickImagen.length - 1);
			
			$(".proyecto .vinculoTrabajo").css("display","none");
			$(".proyecto .vinculoTrabajo").css("opacity","0");
			$("#imagenWork" + numeroBotonClickImagen ).css("display","block");
			$("#imagenWork" + numeroBotonClickImagen ).animate({"opacity":"1"}, 1000);
			
		}

		$("#menu ul li ul li a").bind("click", abrirTrabajo);

		$("#contenidos .listaImagenesProyecto ul li a").bind("click", mostrarImagenProyecto);


## Tarea 9 - Ajustar la animación de los items del menú de imagenes
El menú de imágenes del proyecto es visible, pero falta que se comporte de una forma más "elegante". Las propiedades que tenemos actualmente, serán el estado final después de activar la animación.
1. Cambiemos el color de fondo del contenedor de la lista para que tenga transparencia

		#contenidos .proyecto .listaImagenesProyecto{
			background-color: rgba(0,0,0, 0.4);
			background-position: center;
			background-repeat:repeat;
			width: 80%;
			margin:auto;
			padding: 0px 10px;
			overflow: hidden;
			border-radius: 0px 0px 8px 8px;
		}

1. Cambiemos las márgenes (y otras propiedades) de la lista para asignar su nuevo estado inicial y que sean evidentes los cambios al mostrar la animación. _No copies el código. Preferiblemente edita estas propiedades_

		#contenidos .proyecto .listaImagenesProyecto ul{
			display: block;
			width: 100%;
			margin: -20px -25px 5px -25px;
			padding: 0px 20px;
			opacity: 0.7;
			transition: all 1s;
		}

1. Debajo de el anterior apuntador, pega el siguiente código que se encarga de asignar los valores de las propiedades cuando el usuario pasa el mouse por encima de la lista

		#contenidos .proyecto .listaImagenesProyecto ul:hover{
			margin-top: 0px;
			opacity: 1;
		}

1. Cambiemos las propiedades de cada uno de los items de la lista de imagenes para definir su nuevo estado inicial. _No copies el código. Preferiblemente edita estas propiedades_

		#contenidos .proyecto .listaImagenesProyecto ul li a{
			display: block;
			width: 190px;
			height: 50px;
			cursor: pointer;
			margin: 0px 5px;
			background-position:center;
			background-repeat:no-repeat;
			opacity: 0.7;
			border-bottom: 5px solid transparent;
		}
		
1. Debajo del anterior apuntador, pega el siguiente código que define el comportamiento de cada botón de la lista de imagenes al pasar el mouse por encima

		#contenidos .proyecto .listaImagenesProyecto ul li a:hover{
			opacity: 1;
			border-bottom: 5px solid #C00;
		}
		
_En este momento, el over del mouse anima la visualización de los items de la lista de imágenes_

## Tarea 10 - Usar Sprites para botones de opciones
Para terminar, vamos a asignar los íconos a la lista de opciones que se abren con la imagen del proyecto, para que al pasar por encima de cada uno cambie por la imágen corespondiente al estado "Over"
1. Utiliza este código para asignarle propiedades a botones de la barra de opciones. Se utiliza la misma imagen de fondo para todos, pero cambia la posición del backgound usando coordenadas en pixeles para mostrar una imagen diferente. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

			#contenidos .proyecto .opciones{
				position:absolute;
				bottom: 20px;
				width: 100%;
				margin: auto;
				z-index: 10;
			}
			
				#contenidos .proyecto .opciones .toolbarOpciones ul{
					margin: 0px;
					padding: 0px;
					margin: auto;
					width: 206px;
					height: 20px;
					padding: 5px;
					background-image:url(../images/fond-barra-opciones.png);
					background-position:center;
					background-repeat:no-repeat;
				}
				
					#contenidos .proyecto .opciones .toolbarOpciones li{
						display: inline;
						margin: 0px;
						padding: 0px;
						width: 20px;
						height: 20px;
					}
					
						#contenidos .proyecto .opciones .toolbarOpciones li a{
							display: block;
							float: left;
							width: 20px;
							height: 20px;
							background-repeat:no-repeat;
						}
						
							#contenidos .proyecto .opciones .toolbarOpciones  li a span{
								display: none;
							}
							
							.infoProyecto{
								background-image:url(../images/options.png);
								background-position: 3px 0px;
								margin: 0px 3px 0px 6px;
							}
							
							.infoProyecto:hover{
								background-position: 3px -20px;
							}
							
							.zoomInProyecto{
								background-image:url(../images/options.png);
								background-position: -27px 0px;
								margin: 0px 2px 0px 8px;
							}
							
							.zoomInProyecto:hover{
								background-position: -27px -20px;
							}
							
							.zoomOutProyecto{
								background-image:url(../images/options.png);
								background-position: -48px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.zoomOutProyecto:hover{
								background-position: -48px -20px;
							}
							
							.zoomOutProyecto{
								background-image:url(../images/options.png);
								background-position: -48px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.zoomOutProyecto:hover{
								background-position: -48px -20px;
							}
							
							.zoomResetProyecto{
								background-image:url(../images/options.png);
								background-position: -69px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.zoomResetProyecto:hover{
								background-position: -69px -20px;
							}
							
							.enviarAmigoProyecto{
								background-image:url(../images/options.png);
								background-position: -100px 0px;
								margin: 0px 2px 0px 8px;
							}
							
							.enviarAmigoProyecto:hover{
								background-position: -100px -20px;
							}
							
							.descargaProyecto{
								background-image:url(../images/options.png);
								background-position: -122px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.descargaProyecto:hover{
								background-position: -122px -20px;
							}
							
							.projectNODownload{
								background-image:url(../images/options.png);
								background-position: -122px -40px;
								margin: 0px 1px 0px 1px;
							}
							
							.comentarProyecto{
								background-image:url(../images/options.png);
								background-position: -148px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.comentarProyecto:hover{
								background-position: -148px -20px;
							}
							
							.projectNOComment{
								background-image:url(../images/options.png);
								background-position: -148px -40px;
								margin: 0px 1px 0px 1px;
							}
							
							.likeProyecto{
								background-image:url(../images/options.png);
								background-position: -171px 0px;
								margin: 0px 1px 0px 1px;
							}
							
							.likeProyecto:hover{
								background-position: -171px -20px;
							}