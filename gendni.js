/*
 * Guardar como un bookmarklet con protocolo 'javascript:'
 * Genera un DNI válido y lo inserta en el value del elemento que tenga el foco en el momento que se hace click
 */
function randomdni(){var numero=Math.floor(100000000*Math.random());var letras='TRWAGMYFPDXBNJZSQVHLCKE';var indice=numero % 23;try{document.activeElement.value=numero.toString()+letras.charAt(indice);}catch(e){alert('No hay elemento de form seleccionado. El DNI generado es '+numero.toString()+letras.charAt(indice));}}randomdni();void(0)