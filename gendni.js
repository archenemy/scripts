function randomdni(){var numero=Math.floor(100000000*Math.random());var letras='TRWAGMYFPDXBNJZSQVHLCKE';var indice=numero % 23;try{document.activeElement.value=numero.toString()+letras.charAt(indice);}catch(e){alert('No hay elemento de form seleccionado. El DNI generado es '+numero.toString()+letras.charAt(indice));}}randomdni();void(0)