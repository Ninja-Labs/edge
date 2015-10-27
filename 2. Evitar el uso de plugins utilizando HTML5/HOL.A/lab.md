#Creando mi propio reproductor multimedia con Html5

En este laboratorio aprenderemos a crear un reproductor multimedia usando los controles nativos de Html5 para la reproducción de audio y vídeo, adicional observaremos como manipularlos a través de JavaScript y habilitar Responsive Design a través de BootStrap.

## Tecnologías que usaremos

* Html5: como tecnología base para nuestra implementación, estructura semántica y controles de multimedia
* BootStrap: Para mejorar la experiencia del usuario y habilitar el Responsive Design
* Font Awesome: Para usar íconos amigables para el usuario

## Editor de código

* Para este laboratorio podrás usar tu editor de código preferido incluso Bloc de notas si lo deseas, yo personalmente prefiero usar Visual Studio Code

## Vídeos y audios de muestra

* Para el laboratorio puedes usar los vídeos y audios de muestra que encontrarás en este repositorio de GitHub, o puedes usar tus propios archivos multimedia si lo deseas

## Para cuando termines de implementar el laboratorio tendrás un reproductor multimedia como el siguiente

<br/>![Resultado final](/2. Evitar el uso de plugins utilizando HTML5/HOL.A/img/1-ResultadoFinal.jpg)

## Tarea 1 - Creando una estructura básica en Html5

1. Crear una carpeta llamada HolReproductor
1. Copia las carpetas Videos y audios en esta carpeta
1. Crear un archivo .html (Puedes usar un editor que te permita crear este tipo de archivo, o en bloc de notas usar la opción de guardar como...)
1. Una vez creado el archivo implementar la siguiente estructura básica de Html5<br/>![Estructura básica](img/2-EstructuraBasica.png)
1. Con esto optendremos el siguiente resultado<br/>![Estructura básica](img/3-ResultadoEstructuraBasica.png)

## Tarea 2 - Utilizando plantilla BootsWatch y Font Awesome para habilitar Responsive Design y mejorar la experiencia de usuario

1. Visita la siguiente Url http://bootswatch.com/
1. Selecciona la plantilla Slate
1. Observa los diferentes componenetes que nos ofrece esta plantilla
1. Visita la siguiente Url https://fortawesome.github.io/Font-Awesome/
1. Selecciona la opción Icons
1. Observa los diferentes íconos que nos ofrece
1. Ahora referencia las hojas de estilos de estos dos componentes
1. Para esto utiliza los CDN que exponen, digitando el siguiente código al interior de la etiqueta head<br/>![Uso de CDN](img/4-UsoCDN.png)
1. Ahora actualiza tu browser y te darás cuenta como mejora la presentación
1. Como siguiente paso vamos usar algunas clases de BootStrap que nos ayudan con el Responsive Design
1. Establece las siguientes clases para los divs, de modo que tu body quede de la siguiente manera<br/>![Clases BootStrap](img/5-ClasesBootStrap.png)
1. Ahora actualiza tu browser y observa como las clases tiene efecto en la presentación
1. Para terminar esta tarea vamos a agregar un ícono a nuestro reproductor
1. para esto agrega un elemento i al interior de tu título h1, de la siguiente forma<br/>![Clases BootStrap](img/6-IconoFont.png)
1. Ahora actualiza tu browser y observa como el reproductor multimedia se ve mucho mejor, adicional cambia el tamaño de la ventana de tu browser y observa como el contenido se ajusta a la resolución

## Tarea 3 - Implementando el listado de vídeos

1. Ahora vamos a crear nuestro listado de vídeos, para esto vamos a empezar a codificar entre las dos etiquetas hr que tenemos
1. Para iniciar vamos a crear un div con class row para usar el estilo de fila de BootStrap
1. Posteriormente vamos a crear la estructura de marco o panel que contrendrá el listado, y el lista mismo
1. Para esto usaremos dos componentes de la plantilla BootsWatch llamdos panel y list-group
1. Todas las indicaciones mencionadas anteriormente deberán quedar de la siguiente forma<br/>![Listado Videos](img/7-ListadoVideosCode.png)
1. Para finalizar esta tarea actualiza tu browser y observa el listado de vídeos, no olvides probar con diferentes resoluciones de la ventana del browser<br/>![Listado Videos](img/7-ListadoVideosREsult.png)

## Tarea 4 - Implementando el listado de audios

1. Para implementar el listado de audios vamos a realizar los mismos pasos de la tarea anterior solo que vamos a usar otro estilo para el panel y otros elementos en la lista<br/>![Listado Audios](img/8-ListadoAudiosCode.png)
1. Para finalizar esta tarea actualiza tu browser y observa el listado de audios, no olvides probar con diferentes resoluciones de la ventana del browser<br/>![Listado Audios](img/9-ListadoAudiosREsult.png)

## Tarea 5 - Implementando el panel de reproducción

1. Ahora vamos a implementar el panel del reproductor multimedia, para esto necesitamos un espacio en donde ubicarlo, y actualmente los paneles de vídeos y audio ocupan todo el espacio, por lo tanto vamos agrupar estos dos paneles al interior de un div con la clase col-lg-6 con los cual lograremos dar espacio para el panel de reproducción<br/>![Dos Columnas](img/10-Columnas.png)
1. Ahora vamos a crear el panel de reproducción, en donde incorporaremos los controles nativos de Html5 para al reproducción de audio y vídeo, para esto implementamos el siguiente código<br/>![Panel Reproducción](img/11-PanelReproduccion.png)
1. Observa que hemos usado las etiquetas audio y video nativas de html5
1. Observa que hemos establecido como vídeo por defecto el vídeo de Fast & Furious
1. Observa que hemos usado el atributo autoplay para iniciar la reproducción del vídeo una vez cargue la página
1. Observa que hemos ocultado el reproducto de audio, ya que por defecto mostraremos el primer vídeo de la lista

## Tarea 6 - Incorporando funcionalidad a través de JavaScript

1. En este punto del laboratorio ya tenemos nuestra presentación lista y amigable para el usuario, ahora vamos a agregar funcionalidad a través de JavaScript, de modo que el usuario pueda seleccionar el audio o vídeo a reproducir
1. En primera instancia vamos a agregar una etiqueta script al final del body, recuerda en Html5 ya no es necesario especificar el type/text dado que JS es su lenguaje por defecto
1. Adicionalmente recuerda que es buena práctica codificar nuestro scripts al finalizar la página, de este modo el browser podrá renderizar el Html que es lo primero que ve el usuario y luego seguirá renderizando los scripts
1. En primer lugar definimos la sección de scripts y obtenermos a través de JavaScript los controles de reproducción para posteriormente manipularlos<br/>![Incio Script](img/12-DefinicionScripts.png)
1. Posteriormente vamos a implementar los métodos necesarios para la manipulación del reproductor de vídeos<br/>![Incio Script](img/13-VideoCode.png)
1. Observa que el método CambiarVideo recibe dos parámetros urlVideo, con el cual iniciar la reproducción del vídeo indicado y nombre, del cual más adelante veremos su utilidad
1. Observa que en este mismo método se estña ocultando y pausando el reproductor de audio
1. Observa que en este mismo método se establece cual será el vídeo a reproducir y se inicia su reproducción enseguida
1. Ahora que ya tenemos implementado nuestro script, debemos invocarlos desde cada ítem de la lista de vídeos, de modo que se reproduzca cuando el usuario lo seleccione
1. Para esto manejamos el evento onClick de cada href y enviamos los parámetros necesarios de la siguiente forma<br/>![Video Onclick](img/14-VideoOnclick.png)
1. Ahora haremos la misma implementación para el reproducto de audio, para esto implementamos los siguientes scripts<br/>![Incio Script](img/15-AudioCode.png)
1. Y adicional manejamos el evento click de cada elemento de la lista de audio para reproducir el audio indicado por el usuario<br/>![Audio Onclick](img/16-AudioOnclick.png)

## Tarea 7 - Implementando una animación de texto a través de CSS3

1. Para finalizar nuestro laboratorio vamos a implementar una animación de texto a través de CSS3 que nos muestren en el panel de reproducción el nombre del audio o vídeo que se está reproduciendo actualmente
1. Recuerda que a través de CSS3 podemos implementar animaciones solo con estilos, en este caso implementaremos una animación sencilla de texto
1. Para iniciar vamos a agregar una etiqueta style en el head y vamos a implementar los siguientes estilos<br/>![Estilos](img/17-EStilos.png)
1. Con estos estilos logramos dar un estilos en específico al texto, logramos especificar el tiempo que tardará la animación y el efecto de la misma
1. Ahora reemplazamos el h3 que tenemos de título para el panel de reproducción por lo siguiente<br/>![Span Marquee](img/18-SpanMarquee.png)
1. Este será el span al cual se van a aplicar los estilos que implementamos anteriormente, y por lo tanto será el span al cual se aplicará la animación
1. Y por último en las funciones CambiarVideo y CambiarAudio agregamos la siguiente línea de código<br/>![Span Marquee](img/19-ScriptMarquee.png)
1. Ahora ya sabemos para que sirve el parámetro nombre que estamos enviando a estas funciones
1. Para finalizar actualiza tu browser y observa como funciona el reproductor multimedia

## Tarea 8 - Reto opcional

1. Como has podido observar los métodos ReanudarAudio y ReanudarVideo no se están usando actualmente, lo cual sugiere que podríamos implementar un par de botones que nos permitan pausar y reanudar el audio o vídeo actual, adicional podemos implementar un checkbox que permita inhabilitar los controles de los reproductores, te le mides al reto?
1. Recuerda que puedes usar la plantilla BootsWatch y Font Awesome para estas implementaciones