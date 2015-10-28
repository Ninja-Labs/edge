$(document).ready(function () {
	
	var tituloVentanaPopUpCorrecta = "";
	var mensajeVentanaPopUpCorrecta = "";
	
	var tituloVentanaPopUpInCorrecta = "";
	var mensajeVentanaPopUpInCorrecta = "";
	
	var textoBotonIniciar = "";
	var textoBotonSiguiente = "";
	var textoBotonAnterior = "";

    $.when(LoadContents())
    .done(function (contents) {
		
        $("#cvjl-AcDs").html("<!--Inicio Fondo Principal--><div class='fondoPrincipal'><!--INICIO fondo secundario--><div class='fondoAdicionalPrincipal'><!--INICIO Contenidos--><div id='contenido'class='fondoContenedor'><!--INICIO Contenedor de presentación--><div id='presentacionAcDs'><!--INICIO Información sobre la actividad--><div id='infoAcDs'class='screen'><!--INICIO fondo adicional información--><div class='fondo'><div class='details'><h3 class='descripcion'></h3><div class='detalles'></div></div></div></details></div><!--FIN fondo adicional información--></div><!--FIN Información sobre la actividad--></div><!--FIN Contenedor de presentación--><!--INICIO preguntas actividad--><div id='preguntas'></div><!--INICIO preguntas actividad--><!--INICIO botones Navegación--><div id='navegacion'><div id='BotonIniciar'><span>Iniciar actividad</span></div></div><!--FIN botones navegacion--></div><!--FIN Contenidos--></div><!--FIN fondo secundario--></div><!--FIN fondo principal-->");

        //Titulo
        var descripcionTitulo = $("descripcionTitulo", $(contents)).text();
        $("#infoAcDs .descripcion").html(descripcionTitulo);

        var descripcionDetalles = $("descripcionDetalles", $(contents)).text();
        $("#infoAcDs .detalles").html(descripcionDetalles);

        //Borrar todas las preguntas
        $("#preguntas").empty();
		
		tituloVentanaPopUpCorrecta = $("grupoPreguntas  tituloVentanaPopUpCorrecta", $(contents)).text();
		mensajeVentanaPopUpCorrecta = $("grupoPreguntas  mensajeVentanaPopUpCorrecta", $(contents)).text();
		tituloVentanaPopUpInCorrecta = $("grupoPreguntas  tituloVentanaPopUpInCorrecta", $(contents)).text();
		mensajeVentanaPopUpInCorrecta = $("grupoPreguntas  mensajeVentanaPopUpInCorrecta", $(contents)).text();
		
		textoBotonIniciar = $("navegacionEvaluacion  textoBotonComenzar", $(contents)).text();
		textoBotonSiguiente = $("navegacionEvaluacion  textoBotonSiguiente", $(contents)).text();
		textoBotonAnterior = $("navegacionEvaluacion  textoBotonAnterior", $(contents)).text();
		
		$("#cvjl-AcDs #navegacion #BotonIniciar").html(textoBotonIniciar); 
		$("#cvjl-AcDs #navegacion #NextQuestion").html(textoBotonSiguiente);
		$("#cvjl-AcDs #navegacion #PrevQuestion").html(textoBotonAnterior);

        var iPregunta = 1;
        $("grupoPreguntas  pregunta", $(contents)).each(function () {
            var xmlPreguntaActual = $(this);
            var tipoPregunta = xmlPreguntaActual.attr("tipo");
            var tituloEncabezado = $("encabezadoPantalla tituloEncabezado", xmlPreguntaActual).text();
            var textoEncabezado = $("encabezadoPantalla textoEncabezado", xmlPreguntaActual).text();
            var textoPregunta = $("textoPregunta", xmlPreguntaActual).text();

            var templatePregunta =
                  '<div class="screen" id="parteAcDs-PARAM_I">'
                + ' <section>'
                + '     <div class="EncabezadoScreen">'
                + '         <header>'
                + '             <h3>PARAM_tituloEncabezado</h3>'
                + '             <p>PARAM_textoEncabezado</p>'
                + '         </header>'
                + '     </div>'
                + '     <dl class="preguntaTipoPARAM_TIPOPREGUNTA" id="pregunta-PARAM_I">'
                + '         <dt class="pregunta">'
                + '             PARAM_textoPregunta'
                + '         </dt>'
                + '     </dl>'
                + ' </section>'
                + '</div>';

            //Agregar el item de la pregunta al html, sin el contenido aun.
            var newItemPregunta = templatePregunta.replace("PARAM_I", iPregunta)
                                    .replace("PARAM_I", iPregunta)
                                    .replace("PARAM_tituloEncabezado", tituloEncabezado)
                                    .replace("PARAM_textoEncabezado", textoEncabezado)
                                    .replace("PARAM_TIPOPREGUNTA", tipoPregunta)
                                    .replace("PARAM_textoPregunta", textoPregunta);
            newItemPregunta = $(newItemPregunta);
            $("#preguntas").append(newItemPregunta);



            //---------Tipo : Unica respuesta
            if (tipoPregunta == 'UnicaR') {

                //Anadir contenedor de multiples opciones 
                $("dl", newItemPregunta).append("<dd><ol type='a'></ol></dd>");

                //Opciones
                var iOpcion = 1;
                $("opcionRespuesta", xmlPreguntaActual).each(function () {
                    var xmlOpcionActual = $(this);
                    var esCorrecta = xmlOpcionActual.attr("esCorrecta");
                    var optionText = xmlOpcionActual.text();

                    var templateOpcion =
                        '  <li class="respuesta">'
                        + '     <label class="contenidoRespuesta" for="pregunta-PARAM_I-respuesta-PARAM_IOPCION">'
                        + '         PARAM_TEXTOOPCION'
                        + '     </label>'
                        + '     <input type="radio" class="opcionRespuesta" value="PARAM_ESCORRECTA" name="respuestasPregunta-PARAM_I" id="pregunta-PARAM_I-respuesta-PARAM_IOPCION"/>'
                        + '</li>';

                    var newOpcion = templateOpcion.replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
													.replace("PARAM_TEXTOOPCION", optionText)
													.replace("PARAM_ESCORRECTA", esCorrecta)
                                                    .replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
                                                    .replace("PARAM_I", iPregunta);

                    $("dl dd ol", newItemPregunta).append(newOpcion);
                    
                    ++iOpcion;
                });
            }

            //---------Tipo : Multiple respuesta
            else if (tipoPregunta == 'MultipleR') {

                //Anadir contenedor de multiples opciones 
                $("dl", newItemPregunta).append("<dd><ol type='a'></ol></dd>");

                //Opciones
                var iOpcion = 1;
                $("opcionRespuesta", xmlPreguntaActual).each(function () {
                    var xmlOpcionActual = $(this);
                    var esCorrecta = xmlOpcionActual.attr("esCorrecta");
                    var optionText = xmlOpcionActual.text();

                    var templateOpcion =
                        '  <li class="respuesta">'
                        + '     <label class="contenidoRespuesta" for="pregunta-PARAM_I-respuesta-PARAM_IOPCION">'
                        + '         PARAM_TEXTOOPCION'
                        + '     </label>'
                        + '     <input type="checkbox" class="opcionRespuesta" value="PARAM_ESCORRECTA" name="respuestasPregunta-PARAM_I" id="pregunta-PARAM_I-respuesta-PARAM_IOPCION"/>'
                        + '</li>';

                    var newOpcion = templateOpcion.replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
													.replace("PARAM_TEXTOOPCION", optionText)
													.replace("PARAM_ESCORRECTA", esCorrecta)
                                                    .replace("PARAM_I", iPregunta)
                                                    .replace("PARAM_I", iPregunta)
                                                    .replace("PARAM_IOPCION", iOpcion);

                    $("dl dd ol", newItemPregunta).append(newOpcion);

                    ++iOpcion;
                });
            }

            //---------Tipo : Abierta
            else if (tipoPregunta == 'AbiertaR') {
                var urlArchivoDeEnvio = $("urlArchivoDeEnvio", xmlPreguntaActual).attr("url");

                //Anadir contenedor de forma al html
                var formString = '<form id="formPregAbierta-PARAM_I" action="PARAM_URL" method="post" target="_blank"></form>';
				formString += '<script>$("#formPregAbierta-PARAM_I").submit(function(event){var $form=$(this);event.preventDefault();nombreDestinatarioVal=$form.find("#nombreDestinatario-PARAM_I").val(),nombreEstudianteVal=$form.find("#nombreEstudiante-PARAM_I").val(),mailDestinatarioVal=$form.find("#mailDestinatario-PARAM_I").val(),mailEstudianteVal=$form.find("#mailEstudiante-PARAM_I").val(),cursoEstudianteVal=$form.find("#cursoEstudiante-PARAM_I").val(),respuestaVal=tinyMCE.get("respuestasPregunta-PARAM_I").getContent(),tema=$form.find("#asunto-PARAM_I").html(),url=$form.attr("action");var posting;if(respuestaVal==""){}else{posting=$.post(url,{correoDestinatario:mailDestinatarioVal,nombreDestinatario:nombreDestinatarioVal,suNombre:nombreEstudianteVal,suCorreo:mailEstudianteVal,preguntaA:respuestaVal,suCurso:cursoEstudianteVal,Asunto:tema})}posting.done(function(data){var content=$("#confirmacion",$(data)).html();$("#resultado").empty().append(content)})});</script>';
                formString = formString.replace("PARAM_I", iPregunta)
										.replace("PARAM_URL", urlArchivoDeEnvio)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta)
										.replace("PARAM_I", iPregunta);
                $("dl", newItemPregunta).append("<dd>" + formString +"</dd>");

                //Anadir target


                //Incluir en el html los campos de entrada de la forma
                var templateContenidoPreguntaAbierta =
                      '<ul>'
                    + ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="nombreDestinatario-PARAM_I">Nombre del destinatario:</label>'
                    + '     <input type="text" name="nombreDestinatario" class="CampoTextoPregAbierta" id="nombreDestinatario-PARAM_I" value="Nombre"/>'
                    + ' </li>'
                    + ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="mailDestinatario-PARAM_I">Correo del destinatario:</label>'
                    + '     <input type="text" name="correoDestinatario" class="CampoTextoPregAbierta" id="mailDestinatario-PARAM_I" value="¿A quién va dirigido?"/>'
                    + ' </li>'
					+ ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="cursoEstudiante-PARAM_I">Curso:</label>'
                    + '     <input type="text" name="cursoEstudiante" class="CampoTextoPregAbierta" id="cursoEstudiante-PARAM_I" value="Nombre o grado de tu curso"/>'
                    + ' </li>'
                    + ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="nombreEstudiante-PARAM_I">Tu nombre:</label>'
                    + '     <input type="text" name="suNombre" class="CampoTextoPregAbierta" id="nombreEstudiante-PARAM_I" value="Escribe aquí tu nombre"/>'
                    + ' </li>'
                    + ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="mailEstudiante-PARAM_I">Tu correo:</label>'
                    + '     <input type="text" name="suCorreo" class="CampoTextoPregAbierta" id="mailEstudiante-PARAM_I" value="Escribe aquí tu correo"/>'
                    + ' </li>'
					+ ' <li>'
                    + '     <label class="labelCampoPregAbierta" for="asunto-PARAM_I">Asunto:</label>'
                    + '     <input type="text" name="Asunto" class="CampoTextoPregAbierta" id="asunto-PARAM_I" value="Asunto del mensaje"/>'
                    + ' </li>'
                    + ' <li style="clear:both">'
                    + '     <textarea name="preguntaA" id="respuestasPregunta-PARAM_I">'
                    + '     </textarea>'
                    + ' </li>'
                    + '</ul>'
					+ '<div id="resultado">'
					+ '</div>'
                    + '<div class="contenedorBotonBorrar">'
                    + ' <input type="reset" class="botonBorrar" value="Borrar"/>'
                    + '</div>'
                    + '<div class="contenedorBotonEnviar">'
                    + ' <input type="submit" class="botonEnviar" value="Enviar respuesta"/>'
                    + '</div>';


                for (iRep = 0; iRep < 14; ++iRep)
                    templateContenidoPreguntaAbierta = templateContenidoPreguntaAbierta.replace("PARAM_I", iPregunta);

                var formElement = $("form", newItemPregunta);
                formElement.append(templateContenidoPreguntaAbierta);
                
            }


            //---------Tipo : Conectar columnas
            else if (tipoPregunta == 'ConectarColumnas') {

                var arrParejas = [];
                $("pareja", xmlPreguntaActual).each(function () {
                    var xmlParejaActual = $(this);
                    var iColB = xmlParejaActual.attr("itemColumnaB");
                    arrParejas.push(iColB);
                });

                var arrColA = [];
                $("contenidoItemColumnaA", xmlPreguntaActual).each(function () {
                    var xmlContA = $(this);
                    arrColA.push(xmlContA.text());
                });

                var arrColB = [];
                $("contenidoItemColumnaB", xmlPreguntaActual).each(function () {
                    var xmlContB = $(this);
                    arrColB.push(xmlContB.text());
                });

                
                // Containers for both columns
                var templateBothColumns =
                      '   	<div class="columnaOpcionesA">'
                    + '     	<ul></ul>'
                    + '   	</div>'
                    + '   	<div class="columnaOpcionesB">'
                    + '     	<ul></ul>'
                    + '   	</div>'
					+ '		<div class="lineas">'
					+ '			<canvas id="Lineas-pregunta-PARAM_I">'
	                + '			</canvas>'
					+ '		</div>';
                templateBothColumns = templateBothColumns.replace("PARAM_I", iPregunta)
                                                        .replace("PARAM_TIPOPREGUNTA", tipoPregunta);
                
                $("dl", newItemPregunta).append("<dd>" + templateBothColumns + "</dd>");

                //Put items in columns
                var templateItemColA =
                      '<li class="itemColumna" data-answer="PARAM_PAREJA">'
                    + ' <div id="columnaConectableA-objeto-PARAM_IITEM" class="conectable">'
                    + '     <div class="contenidoItemColumnaConectableA">'
                    + '         PARAM_TEXTO'
                    + '     </div>'
                    + ' </div>'
                    + '</li>';

                var templateItemColB =
                      '<li class="itemColumna" >'
                    + ' <div id="columnaConectableB-objeto-PARAM_IITEM" class="conectable">'
                    + '     <div class="contenidoItemColumnaConectableB">'
                    + '         PARAM_TEXTO'
                    + '     </div>'
                    + ' </div>'
                    + '</li>';

                for (var iItemCol = 0; iItemCol < arrParejas.length; ++iItemCol) {

                    var replacedTemplateItemColA = templateItemColA.replace("PARAM_PAREJA", arrParejas[iItemCol])
                                                    .replace("PARAM_IITEM", iItemCol + 1)
                                                    .replace("PARAM_TEXTO", arrColA[iItemCol]);

                    $(".columnaOpcionesA ul", newItemPregunta).append(replacedTemplateItemColA);

                    var replacedTemplateItemColB = templateItemColB.replace("PARAM_PAREJA", "")
                                                    .replace("PARAM_IITEM", iItemCol + 1)
                                                    .replace("PARAM_TEXTO", arrColB[iItemCol]);

                    $(".columnaOpcionesB ul", newItemPregunta).append(replacedTemplateItemColB);
                }
				
                $("head").append("<script type='text/paperscript' canvas='Lineas-pregunta-" + iPregunta + "' resize>var path;var canvas=paper.view.element;var canvasAlto;var canvasAncho;canvasAlto=$(canvas).parent().innerHeight();canvasAncho=$(canvas).parent().innerWidth();var numeroItems;var moduloItems;var Xinicial;var Yinicial;var positionItem;var objetivoItem;var Xfinal;var Yfinal;var i;var j;var draw=false;var valorItemInicial;var mostrarBotonBorrar=true;function crearBotonBorrar(){canvasAlto=$(canvas).parent().parent().find('.columnaOpcionesA').innerHeight();canvasAncho=$(canvas).parent().innerWidth();var esquinas=new Size(3,3);var rectanguloBlanco=new Rectangle(new Point((canvasAncho/2)-75,(canvasAlto-25)),new Point((canvasAncho/2)+75,canvasAlto-3));var fondoBoton=new Path.RoundRectangle(rectanguloBlanco,esquinas);fondoBoton.fillColor='white';fondoBoton.strokeColor='grey';var rectangulo=new Rectangle(new Point((canvasAncho/2)-72,(canvasAlto-15)),new Point((canvasAncho/2)-62,canvasAlto-12));var equisA=new Path.RoundRectangle(rectangulo,esquinas);equisA.fillColor='red';var equisB=equisA.clone();equisA.rotate(45);equisB.rotate(-45);var textItem=new PointText({content:'Click aquí para borrar',point:new Point((canvasAncho/2)-56,(canvasAlto-10)),fillColor:'black',});var boton=new Group([fondoBoton,equisA,equisB,textItem]);boton.onClick=function(){borrar()}}function onMouseMove(a){if(mostrarBotonBorrar&&(canvasAlto!=0&&canvasAncho!=0)){crearBotonBorrar();mostrarBotonBorrar=false}}function onMouseDown(a){canvasAlto=$(canvas).innerHeight();canvasAncho=$(canvas).innerWidth();numeroItems=$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna').length;moduloItems=canvasAlto/numeroItems;Xinicial=a.point.x;Yinicial=a.point.y;positionItem=Yinicial/moduloItems;if(Xinicial<40){draw=true;for(i=1;i<=numeroItems;i++){positionItem=Math.floor((positionItem-(positionItem*0.3)/100))+1;if(positionItem==i){$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).addClass('itemColumnaActivo');valorItemInicial=$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).parent().attr('data-answer')}}if(path){path.selected=false}path=new Path({segments:[a.point],strokeColor:'brown',fullySelected:false})}}function onMouseDrag(a){if(draw){path.add(a.point)}}function onMouseUp(a){numeroItems=$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna').length;moduloItems=canvasAlto/numeroItems;Xfinal=a.point.x;Yfinal=a.point.y;objetivoItem=Yfinal/moduloItems;if(Xfinal>(canvasAncho-35)){for(j=1;j<=numeroItems;j++){objetivoItem=Math.floor((objetivoItem-(objetivoItem*0.3)/100))+1;if(objetivoItem==j&&objetivoItem==valorItemInicial){$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaCorrecto');$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).removeClass('itemColumnaInCorrecto');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaCorrecto');$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','si')}else if(objetivoItem==j&&objetivoItem!=valorItemInicial){$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaInCorrecto');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+positionItem).removeClass('itemColumnaActivo');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).addClass('itemColumnaInCorrecto');$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).parent().attr('valor','no')}else if(objetivoItem==j){$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna #columnaConectableB-objeto-'+objetivoItem).addClass('itemColumnaActivo')}}}else{$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).removeClass('itemColumnaActivo');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna #columnaConectableA-objeto-'+(positionItem)).removeClass('itemColumnaInCorrecto')}path.fullySelected=false;draw=false}function borrar(){paper.setup(canvas);$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaInCorrecto');$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaCorrecto');$(canvas).parent().parent().find('.columnaOpcionesB .itemColumna .conectable').removeClass('itemColumnaActivo');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaInCorrecto');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaCorrecto');$(canvas).parent().parent().find('.columnaOpcionesA .itemColumna .conectable').removeClass('itemColumnaActivo');mostrarBotonBorrar=true;crearBotonBorrar()}function onKeyUp(event){if(event.key=='delete'){borrar()}}paper.setup(canvas);</script>");
				
            }
			
			//---------Tipo : Flso y verdader
            else if (tipoPregunta == 'FalsoVerdadero') {

                //Anadir contenedor de multiples opciones 
                $("dl", newItemPregunta).append("<dd></dd>");

                //Opciones
                var iOpcion = 1;
                $("enunciadoPregunta", xmlPreguntaActual).each(function () {
                    var xmlOpcionActual = $(this);
                    var esCorrecta = xmlOpcionActual.attr("esCorrecta");
                    var optionText = xmlOpcionActual.text();

                    var templateOpcion = '<div class="enunciado-PARAM_IOPCION"  data-answer="PARAM_ESCORRECTA">'
                        + '		<label class="enunciadoFV" for="pregunta-PARAM_I-respuesta-PARAM_IOPCION">'
						+ '         PARAM_TEXTOOPCION'
						+ '		</label>'
						+ '		<div class="estiloVerdadero">'
						+ '			<input type="radio" class="opcionRadioRespuesta" value="true" name="respuestasPregunta-PARAM_I-respuesta-PARAM_IOPCION" id="pregunta-PARAM_I-respuesta-PARAM_IOPCION"/>'
						+ '			<span>'
						+ '				Verdadero'
						+ '			</span>'
						+ '		</div>'
						+ '		<div class="estiloFalso">'
						+ '			<input type="radio" class="opcionRadioRespuesta" value="false" name="respuestasPregunta-PARAM_I-respuesta-PARAM_IOPCION" id="pregunta-PARAM_I-respuesta-PARAM_IOPCION"/>'
						+ '			<span>'
						+ '				Falso'
						+ '			</span>'
						+ '		</div>'
						+ '</div>';

                    var newOpcion = templateOpcion.replace("PARAM_IOPCION", iPregunta)
													.replace("PARAM_ESCORRECTA", esCorrecta)
													.replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
													.replace("PARAM_TEXTOOPCION", optionText)
                                                    .replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
													.replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
                                                    .replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion)
													.replace("PARAM_I", iPregunta)
													.replace("PARAM_IOPCION", iOpcion);

                    $("dl dd", newItemPregunta).append(newOpcion);
                    
                    ++iOpcion;
                });
            }
			
			//---------Tipo : Arrastrar Objetos
            else if (tipoPregunta == 'ArrastrarObjetos') {

                var arrParejas = [];
                $("pareja", xmlPreguntaActual).each(function () {
                    var xmlParejaActual = $(this);
                    var iColB = xmlParejaActual.attr("itemColumnaB");
                    arrParejas.push(iColB);
                });

                var arrColA = [];
                $("contenidoItemColumnaA", xmlPreguntaActual).each(function () {
                    var xmlContA = $(this);
                    arrColA.push(xmlContA.text());
                });

                var arrColB = [];
                $("contenidoItemColumnaB", xmlPreguntaActual).each(function () {
                    var xmlContB = $(this);
                    arrColB.push(xmlContB.text());
                });

                
                // Containers for both columns
                var templateBothColumns =
                      '   	<div class="columnaOpcionesA droppable">'
                    + '     	<ul></ul>'
                    + '   	</div>'
                    + '   	<div class="columnaOpcionesB droppable">'
                    + '     	<ul></ul>'
                    + '   	</div>';
                templateBothColumns = templateBothColumns.replace("PARAM_I", iPregunta)
                                                        .replace("PARAM_TIPOPREGUNTA", tipoPregunta);
                
                $("dl", newItemPregunta).append("<dd>" + templateBothColumns + "</dd>");

                //Put items in columns
                var templateItemColA =
                      '<li class="itemColumna" data-answer="PARAM_PAREJA">'
                    + ' <div id="columnaArrastrableA-objeto-PARAM_IITEM" class="arrastrable">'
                    + '     <div class="contenidoItemColumnaArrastrableA">'
                    + '         PARAM_TEXTO'
                    + '     </div>'
                    + ' </div>'
                    + '</li>';

                var templateItemColB =
                      '<li class="itemColumna" >'
                    + ' <div id="columnaSoltableB-objeto-PARAM_IITEM" class="soltable">'
                    + '     <div class="contenidoItemColumnaSoltableB">'
                    + '         PARAM_TEXTO'
                    + '     </div>'
                    + ' </div>'
                    + '</li>';

                for (var iItemCol = 0; iItemCol < arrParejas.length; ++iItemCol) {

                    var replacedTemplateItemColA = templateItemColA.replace("PARAM_PAREJA", arrParejas[iItemCol])
                                                    .replace("PARAM_IITEM", iItemCol + 1)
                                                    .replace("PARAM_TEXTO", arrColA[iItemCol]);

                    $(".columnaOpcionesA ul", newItemPregunta).append(replacedTemplateItemColA);

                    var replacedTemplateItemColB = templateItemColB.replace("PARAM_PAREJA", "")
                                                    .replace("PARAM_IITEM", iItemCol + 1)
                                                    .replace("PARAM_TEXTO", arrColB[iItemCol]);

                    $(".columnaOpcionesB ul", newItemPregunta).append(replacedTemplateItemColB);
                }
            }

            ++iPregunta;           

        });

    }).fail(function () {
        return;
    });	
	
	var cuantasPantallas = 0;
	var pantallaActual = 0;
	
	var respuestasActividad = [];
	
	var solucionActividad = [];
	
	var respuestaCorrectaDrag = [];

	

	// Contador de pntallas para saber el límite de preguntas dela actividad
	$("#preguntas .screen").each(function(){
		cuantasPantallas++;
	});
	
	// Funcion que activa la ventana PopUp.
	// Utiliza dos parámetros para tomar el titulo de la ventana y el cntenido de la misma.
	// Debe ser invocada al presionar botones.
	function mostrarPopUp(titulo, mensaje){
		$("#opacidadMensaje #ventanaMensajes .header").html(titulo);
		$("#opacidadMensaje #ventanaMensajes #contenidoMensaje").html(mensaje);
		
		$("#opacidadMensaje").css("display", "block");
		$("#opacidadMensaje").css("z-index", "500");
		
	}
	
	function validarRadioUnicaYMultiple(event) {		
		$("#parteAcDs-" + pantallaActual + " .preguntaTipoUnicaR .opcionRespuesta").parent().removeClass('respuestaIncorrecta');
		$("#parteAcDs-" + pantallaActual + " .preguntaTipoUnicaR .opcionRespuesta").parent().removeClass('respuestaCorrecta');
		
		$("#parteAcDs-" + pantallaActual + " .preguntaTipoMultipleR .opcionRespuesta").parent().removeClass('respuestaIncorrecta');
		
			
		if($(this).attr('value') == "true"){
			
			if($("#parteAcDs-" + pantallaActual).find(".preguntaTipoUnicaR").length >= 1){
				// Este if evalua si la pregunta actual es de Unica Respuesta
			
				$(this).parent().removeClass('respuestaIncorrecta');
				$(this).parent().addClass('respuestaCorrecta');
				
				mostrarPopUp(tituloVentanaPopUpCorrecta, mensajeVentanaPopUpCorrecta);
				
				respuestasActividad[pantallaActual] = true;
			
			} else if($("#parteAcDs-" + pantallaActual).find(".preguntaTipoMultipleR").length >= 1){
				// Este If evalúa si la pregunta actual es de Multiple Respuesta
				
				$(this).parent().removeClass('respuestaIncorrecta');
				$(this).parent().addClass('respuestaCorrecta');
				
				if($("#parteAcDs-" + pantallaActual).find(".respuestaCorrecta").length > 1){
					// Este if evalua si hay más de una respuesta correcta para dejar avanzar
					
					mostrarPopUp(tituloVentanaPopUpCorrecta, mensajeVentanaPopUpCorrecta);
					respuestasActividad[pantallaActual] = true;
				}
			}
			
			$("#NextQuestion").css({"opacity":"1", "cursor": "pointer"});
			
		} else {
			// Si la pregunta actual no es de Unica Respuesta ni Multimple respuesta, muestra mensaje de error
			
			$(this).parent().removeClass('respuestaCorrecta');
			$(this).parent().addClass('respuestaIncorrecta');
			
			mostrarPopUp(tituloVentanaPopUpInCorrecta, mensajeVentanaPopUpInCorrecta);
			
			respuestasActividad[pantallaActual] = false;
		}
		
		
	}
	
	function validarRadioFyV(event) {
	    //if($(this).parent().parent().attr('class') == "true" && $(this).attr('value') == "true"){
			
	    //	$(this).parent().parent().find("div").removeClass('respuestaIncorrecta');
	    //	$(this).parent().addClass('respuestaCorrecta');
			
	    //	respuestasActividad[pantallaActual] = true;
			
	    //} else if($(this).parent().parent().attr('class') == "false" && $(this).attr('value') == "false"){
			
	    //	$(this).parent().parent().find("div").removeClass('respuestaIncorrecta');
	    //	$(this).parent().addClass('respuestaCorrecta');
			
	    //	respuestasActividad[pantallaActual] = true;
			
	    //} else {
			
	    //	$(this).parent().parent().find("div").removeClass('respuestaCorrecta');
	    //	$(this).parent().addClass('respuestaIncorrecta');
			
	    //	respuestasActividad[pantallaActual] = false;
			
	    //}

	    //alert("entro a la funcion");

	    var tempResponse = [];

	    

		$("#parteAcDs-" + pantallaActual + " .preguntaTipoFalsoVerdadero").find(".enunciado-" + pantallaActual).each(function (index) {

		    var $enunciadoActual = $(this);

		    var cuantosChecked = 0;

		    tempResponse[index]

		    $enunciadoActual.find("input").each(function () {

		        if ($(this).is(":checked")) {

		            //alert("es checked")

		            if($enunciadoActual.attr("data-answer") == "true" && $(this).attr("value") == "true"){

		                //alert("es Correcto")

		                $enunciadoActual.find("div").removeClass("respuestaIncorrecta");
		                $enunciadoActual.find("div").removeClass("respuestaCorrecta");
		                $(this).parent().addClass("respuestaCorrecta");

		                //respuestasActividad[pantallaActual] = true;

		                tempResponse[index] = true;

		            } else if ($enunciadoActual.attr("data-answer") == "false" && $(this).attr("value") == "false") {

		                //alert("es Correcto")

		                $enunciadoActual.find("div").removeClass("respuestaIncorrecta");
		                $enunciadoActual.find("div").removeClass("respuestaCorrecta");
		                $(this).parent().addClass("respuestaCorrecta");

		                //respuestasActividad[pantallaActual] = true;

		                tempResponse[index] = true;

		            } else {

		                //alert("es IN Correcto")

		                $enunciadoActual.find("div").removeClass("respuestaIncorrecta");
		                $enunciadoActual.find("div").removeClass("respuestaCorrecta");
		                $(this).parent().addClass("respuestaIncorrecta");

		                //respuestasActividad[pantallaActual] = false;

		                tempResponse[index] = false;

		                return false;

		            }

		            cuantosChecked++;

		        }

		    });

		    if (cuantosChecked == 0) {

		        //alert("no checked")

		        //respuestasActividad[pantallaActual] = false;

		        tempResponse[index] = false;

		    }

		});

		for (i = 0; i < tempResponse.length; i++){

		    if(tempResponse[i] == true){
		        respuestasActividad[pantallaActual] = true;
		    } else {

		        respuestasActividad[pantallaActual] = false;
		        break;
		    }

		}

		$("#NextQuestion").css({ "opacity": "1", "cursor": "pointer" });
		
	}
	
	function validarCambiarPantalla() {
		
	    if ($("#parteAcDs-" + pantallaActual).find(".preguntaTipoConectarColumnas").length >= 1) {

			$("#parteAcDs-" + pantallaActual).find(".columnaOpcionesB .itemColumna").each(function () {
				if ($(this).attr("valor") == "si") {
					respuestasActividad[pantallaActual] = true;
					
					
				} else {
					respuestasActividad[pantallaActual] = false;
					return false;
				}
			});
		}
		
		if(respuestasActividad[pantallaActual]){
			if(pantallaActual < cuantasPantallas){
				
				$("#parteAcDs-" + pantallaActual).css("display","none");
				$("#parteAcDs-" + pantallaActual).css("opacity","0");
				$("#navegaNextPrev #PrevQuestion").css({"opacity":"1", "cursor": "pointer"});
				pantallaActual++;
				$("#parteAcDs-" + pantallaActual).css("display","block");
				$("#parteAcDs-" + pantallaActual).animate({'opacity':'1'}, 600);
				
				
				
			} else if(pantallaActual >= cuantasPantallas){
				pantallaActual = cuantasPantallas;
			}
			
			PrepararPantallas();
			
			if(pantallaActual == cuantasPantallas){
				$("#navegaNextPrev #NextQuestion").css({"opacity":"0", "cursor": "default"});
			}	
		} else {
			$("#NextQuestion").css({"opacity":"0.3", "cursor": "default"});
		}

		
	}
	
	function PrepararPantallas(){
		
		$("#parteAcDs-" + pantallaActual).find(".preguntaTipoUnicaR").each(function(){
			
			var respuestaCorrecta = [];
			
			$("input", this).each(function(index, element) {
				if($(this).attr("value") == "true"){
					respuestaCorrecta[index] = true;
				} else {
					respuestaCorrecta[index] = false;
				}
				
            });
			
			solucionActividad[pantallaActual] = respuestaCorrecta;
			
		});
		
		$("#parteAcDs-" + pantallaActual).find(".preguntaTipoMultipleR").each(function(){
			
			var respuestaCorrecta = [];
			
			$("input", this).each(function(index, element) {
				if($(this).attr("value") == "true"){
					respuestaCorrecta[index] = true;
				} else {
					respuestaCorrecta[index] = false;
				}
				
            });
			
			solucionActividad[pantallaActual] = respuestaCorrecta;
			
		});
		
		$("#parteAcDs-" + pantallaActual).find(".preguntaTipoAbiertaR").each(function(){
			
			$("#parteAcDs-" + pantallaActual + " #formPregAbierta-" + pantallaActual + " input.botonEnviar").click(function(){
						respuestasActividad[pantallaActual] = true;
			});
			
		});
		
		$("#parteAcDs-" + pantallaActual).find(".preguntaTipoConectarColumnas").each(function(){
			
			//respuestasActividad[pantallaActual] = ;
			
		    var altoLineas = $(this).find(".columnaOpcionesA").innerHeight();
			var margenLineasIzq = $(this).find(".columnaOpcionesA").innerWidth();
			var margenLineasDer = $(this).find(".columnaOpcionesB").innerWidth();
			
			$("#parteAcDs-" + pantallaActual + " .lineas").css({"margin-left":margenLineasIzq + 5, "margin-right":margenLineasDer + 5, "height":altoLineas});
			$("#parteAcDs-" + pantallaActual + " .lineas canvas").attr("height", altoLineas);
			$("#parteAcDs-" + pantallaActual + " .lineas canvas").attr("width", $("#parteAcDs-" + pantallaActual + " .lineas").innerWidth());

			
			
		});
		
		$("#parteAcDs-" + pantallaActual).find(".preguntaTipoArrastrarObjetos").each(function(){
			
			respuestaCorrectaDrag = [];
			
			$(this).find(".columnaOpcionesA li").each(function(index, element) {
                
				respuestaCorrectaDrag[index] = $(this).attr("data-answer");
				
            });
			
			solucionActividad[pantallaActual] = respuestaCorrectaDrag;
			
		});
			
	}
	
	$(".arrastrable").pep({
		droppable:   '.soltable',
		droppableActiveClass:   'itemColumnaOver',
		start: function(ev, obj){
			
			obj.$el.parent().addClass("itemColumnaVacio");
			
		},
		drag: function(ev, obj){
			
		    obj.$el.css({ "z-index": "100"});

		},
		stop: function(ev, obj){
			
			if(obj.activeDropRegions.length > 1){
				
				mostrarPopUp("Hay algo mal en tu selección", "Sólo puedes soltar tu objeto sobre UNO de los espacios de la derecha.");
				
			} else {
				
				
				
				var origenActualID = obj.$el.parent().attr('data-answer');
			
				var destinoActualID = obj.activeDropRegions[0].attr("id");
				var destinoNumeroID = destinoActualID.substring(24, destinoActualID.length);
				
				
				if(origenActualID == destinoNumeroID){
					obj.activeDropRegions[0].parent().addClass("itemColumnaCorrecto");
					obj.activeDropRegions[0].parent().removeClass("itemColumnaInCorrecto");
					
					obj.activeDropRegions[0].removeClass("soltable");
					//obj.$el.removeClass("arrastrable");
					obj.$el.toggleClass('disabled').data('plugin_pep').toggle();
					ev.preventDefault();

					
					
          			respuestaCorrectaDrag[destinoNumeroID - 1] = true;

          			obj.$el.css({ "z-index": "0" });
					
				} else if(origenActualID != destinoNumeroID){
					obj.activeDropRegions[0].parent().addClass("itemColumnaInCorrecto");
					obj.activeDropRegions[0].parent().removeClass("itemColumnaCorrecto");
					respuestaCorrectaDrag[destinoNumeroID - 1] = false;

					
				}
				
				for (i = 0; i < respuestaCorrectaDrag.length; i++) {
                    
				    if (respuestaCorrectaDrag[i] == true) {
				        
				        respuestasActividad[pantallaActual] = true;
                       
				    } else if (respuestaCorrectaDrag[i] != true) {
				        respuestasActividad[pantallaActual] = false;
				        break;
                        
				    } 
				}
				
			}

		} 
	});
	
	$(".opcionRespuesta").bind('click', validarRadioUnicaYMultiple);
	
	$(".opcionRadioRespuesta").bind('click', validarRadioFyV);
	
	$("#BotonIniciar").click(function(){
		$(this).css("display","none");
		$("#navegaNextPrev").css("display","block");
		$("#navegaNextPrev #PrevQuestion").css({"opacity":"0", "cursor": "default"});
		$("#navegaNextPrev #NextQuestion").css({"opacity":"0.3", "cursor": "default"});
		$("#preguntas").css("visibility","visible");
		$("#preguntas").animate({'opacity':'1'}, 600);
		$("#presentacionAcDs").animate({'opacity':'0'}, 600);
		$("#presentacionAcDs").css("display", "none");
		
		pantallaActual++;
		
		PrepararPantallas();
		
		
		
	});
	
	$("#PrevQuestion").click(function(){
		
		
		if(pantallaActual <= 1){
			
			pantallaActual = 1;
			
		} else {
			$("#parteAcDs-" + pantallaActual).css("display","none");
			$("#parteAcDs-" + pantallaActual).css("opacity","0");
			$("#navegaNextPrev #NextQuestion").css({"opacity":"1", "cursor": "pointer"});
			
			pantallaActual--;
			$("#parteAcDs-" + pantallaActual).css("display","block");
			$("#parteAcDs-" + pantallaActual).animate({'opacity':'1'}, 600);
		}
		
		if(pantallaActual == 1){
			$("#navegaNextPrev #PrevQuestion").css({"opacity":"0", "cursor": "default"});
		}
			
	});
	
	$("#NextQuestion").click(function(){
		
		validarCambiarPantalla();
			
	});

	
	
	$("#opacidadMensaje button.botonAceptar").click(function(){
		
		$("#opacidadMensaje #ventanaMensajes .header").html("");
		$("#opacidadMensaje #ventanaMensajes #contenidoMensaje").html("");
		
		$("#opacidadMensaje").css("display", "none");

			
	});
	
	$("head").append("<script type='text/javascript' defer>tinymce.init({selector:'textarea',theme:'modern',browser_spellcheck:true,language:'es',width:600,height:80,plugins:['advlist autolink link image lists charmap print preview hr anchor pagebreak','searchreplace wordcount visualblocks visualchars fullscreen insertdatetime media nonbreaking','save table contextmenu directionality emoticons template paste textcolor'],content_css:'css/content.css',toolbar:'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons',style_formats:[{title:'Texto color rojo',inline:'span',styles:{color:'#ff0000'}},{title:'Texto color verde',inline:'span',styles:{color:'#66CC00'}},{title:'Red header',block:'h1',styles:{color:'#ff0000'}},{title:'Example 1',inline:'span',classes:'example1'},{title:'Example 2',inline:'span',classes:'example2'},{title:'Table styles'},{title:'Table row 1',selector:'tr',classes:'tablerow1'}]});</script>");
	
});


function LoadContents() {
    var def = $.Deferred();

    if (typeof GetContents == "function") {
        var config = GetContents();
        def.resolve(config);
    }
    else {
        $.when(
            $.ajax({
                url: "xml/contenidos.xml",
                dataType: "xml"
            })
        ).done(function (contents) {
            def.resolve(contents)
        }).fail(function (jqXHR, textStatus, errorThrown) {
            if (textStatus == "parsererror") {
                alert("ERROR adquiriendo XML de contenidos. No se puede interpretar respuesta del servidor: [" + errorThrown + "]");
            }
            else {
                alert("ERROR adquiriendo XML de contenidos: [" + errorThrown + "]");
            }
            def.reject();
        });
    }

    return def;
}
