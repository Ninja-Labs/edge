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

![Resultado final](./ResultadoFinal/ResultadoFinal.png?raw=true "Resultado final")

## Tarea 1 - Finalicemos el HTML
1. Incluyamos el código de la identidad con HTML Semántico dentro del DIV con el id="identidad". Debe finalizar mas o menos así

		<div id="identidad">
			<hgroup>
				<h1>
					<a href="#">
						<span>
							Kiro
						</span>
					</a>
				</h1>
				
				<h4>
					VFX Artist
				</h4>
			
			</hgroup>
		</div>

1. Incluyamos el HTML semántico del menú de redes sociales. Debe terminar más o menos así:

		<div id="redes">
			<h3 class="ocultar">
				Menú de redes sociales
			</h3>
			<menu type="toolbar">
				<ul>
					<li>
						<a href="#" class="btnFacebook">
							<span>
								Facebook
							</span>
						</a>
					</li>
					<li>
						<a href="#" class="btnFlickr">
							<span>
								Flickr
							</span>
						</a>
					</li>
				</ul>
			</menu>
		</div>

1. Incluyamos el HTML semántico del menú principal. Debe terminar más o menos así:

		<div id="menu">
			<h3 class="tituloMenuFlechaRight">
				Menú
			</h3>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span>
								Work
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
								Personal
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
								Reel
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
								Making of
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
								Mentions
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>

1. Incluyamos el HTML semántico de la lista de imágenes de proyectos. Estas imágenes se usarán en la interfaz para poder cambiar las imágenes que pertenecen a un proyecto principal.

		<div class="listaImagenesProyecto">
			<menu>
			
				<ul>
					<li>
						<a id="imagenPicWork1">
							<span>
								Imagen A - Work 4
							</span>
						</a>
					</li>
					<li>
						<a id="imagenPicWork2">
							<span>
								Imagen B - Work 4
							</span>
						</a>
					</li>
					<li>
						<a id="imagenPicWork3">
							<span>
								Imagen C - Work 4
							</span>
						</a>
					</li>
					<li>
						<a id="imagenPicWork4">
							<span>
								Imagen D - Work 4
							</span>
						</a>
					</li>
					<li>
						<a id="imagenPicWork5">
							<span>
								Imagen E - Work 4
							</span>
						</a>
					</li>
				</ul>
			</menu>
		</div>

1. Ahora debemos poner el HTML de los trabajos, es decir las imágenes de mayor resolución de un proyecto. Primero debes ubicar dentro del HTML este comentario:
		
		<!-- FIN Opciones Trabajo A work 1 -->

1. Debajo de ese comentario, copiamos este código HTML, que incluye las imágenes de los proyectos en alta resolución.

		<a id="imagenWork1" class="vinculoTrabajo"><img src="uploads/rojored1.jpg" class="trabajoWork1-A imagenProyecto" alt="Trabajo Work A" /></a>
		<a id="imagenWork2" class="vinculoTrabajo"><img src="uploads/rojored2.jpg" class="trabajoWork1-B imagenProyecto" alt="Trabajo Work B" /></a>
		<a id="imagenWork3" class="vinculoTrabajo"><img src="uploads/rojored3.jpg" class="trabajoWork1-C imagenProyecto" alt="Trabajo Work C" /></a>
		<a id="imagenWork4" class="vinculoTrabajo"><img src="uploads/rojored4.jpg" class="trabajoWork1-D imagenProyecto" alt="Trabajo Work D" /></a>
		<a id="imagenWork5" class="vinculoTrabajo"><img src="uploads/rojored5.jpg" class="trabajoWork1-E imagenProyecto" alt="Trabajo Work E" /></a>

1. Ahora, por más que logremos hacer las animaciones con sólo CSS 3.0, necesitaremos la librería de jQuery para crear la interacción y algunas de las animaciones.

## Tarea 2 - Ajustar los estilos CSS del menu 
1. Agrega a la hoja de estilos las propiedades visuales del menú principal. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

		#header #menu{
			position: absolute;
			left: 0px;
			top: 50%;
			padding-right: 10px;
			border-radius: 0px 5px 5px 0px;
			background-color: #222;
			height: 36px;
			z-index: 10;
		}
		
			#header #menu h3{
				margin: 0px;
				width: 40px;
				height: 26px;
				padding: 8px 10px 0px 20px;
				background-position: right;
				background-repeat: no-repeat;
				float: left;
				font-size: 13px;
				position: relative;
				cursor: pointer;
			}
			
			h3.tituloMenuFlechaRight{
				background-image:url("../images/arrow-tit-menu-1.png");
			}
			
			h3.tituloMenuFlechaLeft{
				background-image:url("../images/arrow-tit-menu-2.png");
			}
			
				#header #menu ul{
					height: 36px;
					width: 0px;
					margin: 0px;
					padding: 0px;
					margin-left: 100px;
					list-style: none;
					list-style-type: none;
					overflow: hidden;
				}
				
					#header #menu ul li{
						float: left;
						width: 150px;
						margin: 0px;
						padding: 0px;
						height: 20px;
						margin: 8px 0px;
						border-left: 1px dotted #FFF;
					}
					
						#header #menu ul li:last-child{
							border-right: none;
						}
					
						#header #menu ul li a{
							display: block;
							height: 28px;
							width: 160px;
							margin: -8px 0px;
							text-align: center;
							padding-top: 8px;
							font-size: 14px;
							color:#fff;
						}

## Tarea 3 - Establecer la función y los triggers para la interaccion del menu principal
Cuando el usuario hace click sobre el botón MENU, se deben desplegar (con una animación) las opciones del menú principal.
1. Abre el archivo Menu.js de la carpeta /js
1. Dentro de la función de jQuery (que ya está declarada) pega el siguiente código

		//Esta variable permite controlar si el menú ya se encuentra abierto o si se encuentra cerrado
		var abiertomenu = false;
		
		// Esta función hace que los items del submenú sean visibles mientras el menú se abre.
		function cambiarOverflow() {
			$("#menu ul").css("overflow", "visible");
		}
		
		//Esta es la función utiliza los métodos de jQuery para animar las propiedades CSS del menú
		function abrirmenu(event) {
			
			//Esta línea hace que los items del submenú NO sean visibles mientras el menú se anima.
			$("#menu ul").css("overflow", "hidden");

			if (abiertomenu == true) {
				//Si entra a la condición, se anima el cierre del menú
				$("#menu nav>ul").animate({ "width": "0px" }, 500, "linear", null);
				
				//Se cambia el valor de la variable de control
				abiertomenu = false;
			} else {
				//Si no entra a la condición, se anima la apertura del menú
				$("#menu nav>ul").animate({ "width": "755px" }, 500, "linear", cambiarOverflow);
				
				//Se cambia el valor de la variable de control
				abiertomenu = true;
			}

		}
		
		//Trigger que dispara la animación de apertura o cierre del menú
		$("#menu h3").bind("click", abrirmenu);

## Tarea 4 - Terminar el código HTML del submenu
**Código HTML del Submenú**
1. Debajo de la primera opción del menú principal (Botón WORK) se debe crear una nueva lista UL con los vínculos del submenú

		<a href="#">
			<span>
				Work
			</span>
		</a>
		<ul>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto A - Work
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto B - Work
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto C - Work
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto D - Work
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto E - Work
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto F - Work
					</span>
				</a>
			</li>
		</ul>

1. Debajo de la segunda opción del menú principal (Botón PERSONAL) se debe crear una nueva lista UL con los vínculos del submenú

		<a href="#">
			<span>
				Personal
			</span>
		</a>
		<ul>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto A - Personal
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto B - Personal
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto C - Personal
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto D - Personal
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto E - Personal
					</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span>
						Nombre Proyecto F - Personal
					</span>
				</a>
			</li>
		</ul>



**Ajustar estilos CSS del submenu**
1. En la hoja de estilos vamos a agregar un nuevo apuntador que definirá cómo se verá inicialmente el submenú de opcines del menú principal. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

		#header #menu ul li ul{
			width: 200px !important;
			position:relative;
			height: 26px;
			top: 0px;
			left: -25px;
			z-index: -1;
			display: block;
			margin: 0px;
			padding: 3px;
			overflow: hidden !important;
			background-color: #000;
			background-image:url(../images/fondmenuinterno.png);
			border: 1px solid #000;
		}

_En este momento podrás ver una lista debajo de las opciones del menú principal_

## Tarea 5 - Crear la animación del submenu
1. Debemos cambiar las propiedades CSS del submenú para asignar su estado incial y lograr que sea evidente la animación de los cambios. **Es importante anotar que el código comentado son los prefijos de navegador que Edge ya no requiere pues soporta completamente las propiedades de CSS 3.0**. _No copies el código. Preferiblemente edita estas propiedades_

		#header #menu ul li ul{
			width: 200px !important;
			position:relative;
			height: 26px;
			top: -28px;
			left: -25px;
			z-index: -1;
			display: block;
			/*-webkit-transition: all 1s;
			-ms-transition: all 1s;
			-moz-transition: all 1s;
			-o-transition: all 1s;*/
			transition: all 1s;
			opacity: 0;
			margin: 0px;
			padding: 3px;
			overflow: hidden !important;
			background-color: #000;
			background-image:url(../images/fondmenuinterno.png);
			border: 1px solid #000;
		}
		
2. Debajo del apuntador anterior creamos un nuevo apuntador donde se establecen las propiedades nuevas que serán animadas al pasar el mouse encima del item del menú principal. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

		#header #menu ul li:hover ul{
			display:block;
			height: 569px;	
			top: -300px;
			opacity: 1;
		}

_En este momento al pasar el mouse por encima de las opciones del menú principal, cambia de dimensión del submenú de forma animada_

## Tarea 6 - Terminar los items del submenu
**Código HTML de los items del submenu**
1. Primero agregamos las imágenes miniaturas de los proyectos de la primera opción del menu principal. Tenga en cuenta que el nombre de los archivos de las imágenes mantienen la misma nomenclatura y cambia la letra al final.
		...
		...
		<nav>
			<ul>
				<li>
					<a href="#">
						<span>
							Work
						</span>
					</a>
					
					<ul>
						<li>
							<a href="#">
								<img src="uploads/pic-crush-a.jpg"/>
								<span>
									Nombre Proyecto A - Work
								</span>
							</a>
							<img src="uploads/med-crush-a.jpg" class="fondoItemMenu"/>
						</li>
						<li>
							<a href="#">
								<img src="uploads/pic-olimpo-a.jpg"/>
								<span>
									Nombre Proyecto B - Work
								</span>
							</a>
							<img src="uploads/med-olimpo-a.jpg" class="fondoItemMenu"/>
						</li>
						<li>
							<a href="#">
								<img src="uploads/pic-powerade-a.jpg"/>
								<span>
									Nombre Proyecto C - Work
								</span>
							</a>
							<img src="uploads/med-powerade-a.jpg" class="fondoItemMenu"/>
						</li>
						<li>
							<a href="#">
								<img src="uploads/pic-rojored-a.jpg"/>
								<span>
									Nombre Proyecto D - Work
								</span>
							</a>
							<img src="uploads/med-rojored-a.jpg" class="fondoItemMenu"/>
						</li>
						<li>
							<a href="#">
								<img src="uploads/pic-bukis-a.jpg"/>
								<span>
									Nombre Proyecto E - Work
								</span>
							</a>
							<img src="uploads/med-bukis-a.jpg" class="fondoItemMenu"/>
						</li>
						<li>
							<a href="#">
								<img src="uploads/pic-cocasanta-a.jpg"/>
								<span>
									Nombre Proyecto F - Work
								</span>
							</a>
							<img src="uploads/med-cocasanta-a.jpg" class="fondoItemMenu"/>
						</li>
					</ul>
				...
				...
				...
					
1. Luego las agregamos las imágenes miniaturas de los proyectos de la Segunda opción del menu principal

		...
		...
			</ul>
		</li>
		<li>
			<a href="#">
				<span>
					Personal
				</span>
			</a>
			
			<ul>
				<li>
					<a href="#">
						<img src="uploads/pic-clothfish-a.jpg"/>
						<span>
							Nombre Proyecto A - Personal
						</span>
					</a>
					<img src="uploads/med-clothfish-a.jpg" class="fondoItemMenu"/>
				</li>
				<li>
					<a href="#">
						<img src="uploads/pic-dezepticon-a.jpg"/>
						<span>
							Nombre Proyecto B - Personal
						</span>
					</a>
					<img src="uploads/med-dezepticon-a.jpg" class="fondoItemMenu"/>
				</li>
				<li>
					<a href="#">
						<img src="uploads/pic-distoyota-a.jpg"/>
						<span>
							Nombre Proyecto C - Personal
						</span>
					</a>
					<img src="uploads/med-distoyota-a.jpg" class="fondoItemMenu"/>
				</li>
				<li>
					<a href="#">
						<img src="uploads/pic-energizer-a.jpg"/>
						<span>
							Nombre Proyecto D - Personal
						</span>
					</a>
					<img src="uploads/med-energizer-a.jpg" class="fondoItemMenu"/>
				</li>
				<li>
					<a href="#">
						<img src="uploads/pic-meteora-a.jpg"/>
						<span>
							Nombre Proyecto E - Personal
						</span>
					</a>
					<img src="uploads/med-meteora-a.jpg" class="fondoItemMenu"/>
				</li>
				<li>
					<a href="#">
						<img src="uploads/pic-lint-a.jpg"/>
						<span>
							Nombre Proyecto F - Personal
						</span>
					</a>
					<img src="uploads/med-Lint-a.jpg" class="fondoItemMenu"/>
				</li>
			</ul>
		...
		...
		...

**Ajustar estilos de los items del submenu**
1. Las imágenes medianas de los items del submenú (las que empieza el prefijo en el nombre med-) son los fondos que se deben mostrar al pasar el mouse sobre cada item del submenú. _Puedes buscar los apuntadores o pegar este codigo al final de la hoja de estilos_

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
		}
		#header #menu ul li ul li:nth-child(3){
			margin-bottom: 60px;
		}
			#header ul li ul li img{
				margin-left: -10px;
				position: absolute;
			}
			
			#header ul li ul li img.fondoItemMenu{

			}
					#header ul li ul li:nth-child(1) .fondoItemMenu{
						margin-top: -81px;
					}
					#header ul li ul li:nth-child(2) .fondoItemMenu{
						margin-top: -166px;
					}
					#header ul li ul li:nth-child(3) .fondoItemMenu{
						margin-top: -251px;
						
					}
					#header ul li ul li:nth-child(4) .fondoItemMenu{
						margin-top: -390px;
						
					}
					#header ul li ul li:nth-child(5) .fondoItemMenu{
						margin-top: -477px;
						
					}
					#header ul li ul li:nth-child(6) .fondoItemMenu{
						margin-top: -563px;
						
					}
			
			#header ul li ul li a{
				display:block;
				position: relative;
				z-index: 10;
				height: auto !important;
				width: auto !important;
				margin:0px !important;
				padding: 0px !important;
			}
			
				#header ul li ul li a img{
					float:none;
					border: none;
					margin:0px !important;
					position:static;
				}
				
				#header ul li ul li a span{
					
				}

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