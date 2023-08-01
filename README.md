# Text Analyzer 

Text Analyzer es una aplicación web sencilla y fácil de utilizar y tiene como objetivo analizar un texto en tiempo real ofreciendo las siguientes funcionalidades:

- Conteo de palabras y caracteres
- Conteo de caracteres sin espacios
- Conteo de numeros
- Suma total de numeros
- Longitud promedio de las palabras 
- Botón "Limpiar Métricas" 

# Contenido


1. Caracteristicas.
2. analyzer.js
3. Lenguajes de programacion utilizados.
4. Recursos utilizados



# Características

- getWordCount(text)*: Esta funcion toma el texto y quita los espacios entre cada palabra, asi como signos de puntuacion y numeros dejando solo las palabras a contar. 
- getCharacterCount(text)*: Esta funcion toma el texto y realiaz cun conteo de caracteres incluyendo signos de puntuacion y espacios. 
- getCharacterCountExcludingSpaces(text)*: Esta funcion toma el texto y reezplaza espacios, signos de puntuacion y numeros, dejando solo las letras para su conteo.
- getAverageWordLength(text)*: Esta funcion toma el texto y devuelve la longitud media de las palabras en el texto. Toma el numero total de caracteres en el texto y lo divide entre las palabras totales del texto para obtener la longitud promedio.
- getNumberCount(text): Esta funcion toma el texto y devuelve la suma total de los numeros en el texto analizado.
- getNumberSum(text): Esta funcion toma el texto y devuelve la suma de los numeros y con ayuda de una expresion regular encuentra los numeros válidos para despues sumarlos. 

# Tecnologías utilizadas

- HTML5: nos permite crear la estructura de una página web, por asi decirlo, su esqueleto, donde vamos a incorporar posteriormente, imágenes, textos, vídeos y todo tipo de material multimedia de forma que se pueda visualizar correctamente.
- CSS3: es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web e interfaces de usuario escritas en HTML.
- JavaScript: es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes, etc. 


