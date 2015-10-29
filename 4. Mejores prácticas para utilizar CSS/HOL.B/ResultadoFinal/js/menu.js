// JavaScript Document
$(document).ready(function ($) {

    var abiertomenu = false;

    function cambiarOverflow() {
        $("#menu ul").css("overflow", "visible");
    }

    function abrirmenu(event) {

        $("#menu ul").css("overflow", "hidden");

        if (abiertomenu == true) {
            $("#menu nav>ul").animate({ "width": "0px" }, 500, "linear", null);
            abiertomenu = false;
        } else {
            $("#menu nav>ul").animate({ "width": "755px" }, 500, "linear", cambiarOverflow);
            abiertomenu = true;
        }


    }


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
    


    $("#menu h3").bind("click", abrirmenu);

    $("#menu ul li ul li a").bind("click", abrirTrabajo);
    
    $("#contenidos .listaImagenesProyecto ul li a").bind("click", mostrarImagenProyecto);
    
    
    
    

});