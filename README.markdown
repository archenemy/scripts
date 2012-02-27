# SCRIPTS

Solo un repo para ir guardando scriptillos útiles que no me apetece reescribir cada poco tiempo.

Arrastra el siguiente bookmarklet (código contenido en gendni.js) a tu barra de marcadores para 
insertar un dni en el campo de formulario seleccionado.


<a href="javascript:function randomdni(){var numero=Math.floor(100000000*Math.random());var letras='TRWAGMYFPDXBNJZSQVHLCKE';var indice=numero % 23;try{document.activeElement.value=numero.toString()+letras.charAt(indice);}catch(e){alert('No hay elemento de form seleccionado. El DNI generado es '+numero.toString()+letras.charAt(indice));}}randomdni();void(0)">Generar DNI</a>


