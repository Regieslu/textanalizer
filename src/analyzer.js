const analyzer = {  
  getWordCount: (text) => {
    const textValid = text.trim().replace(/[^a-z0-9\s]/gi, ''); //trim: quita espacios a los extremos de las palabras. 
    if (textValid === ""){
      return 0;
    }
    const arrayDeCadenas = textValid.split(" ");// text values is "hello world", after split, it returns ["hello", "world"]
    return arrayDeCadenas.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^a-z0-9]/gi, '').length; //donde encuentre algo diferente a alfanumerico (global), reemplazalo por "". 
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const countCharacter = text.replaceAll(" ", "").length;
    const wordCount = analyzer.getWordCount (text); 
    if (wordCount === 0){
      return 0
    }
    const averageLength = countCharacter/wordCount;
    return parseFloat(averageLength.toFixed(2));

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const validText = text.trim();
    let counter = 0; //Empezamos un contador en 0 siempre
    if (validText === "") {
      return 0;
    }
    const regex = new RegExp(/^-?\d*\.?\d+$/);
    const textCollection = text.split(" ");
    for (let i = 0; i < textCollection.length; i++) {
      const isNumber = regex.test(textCollection[i]);
      if (isNumber) {
        counter += 1;
      }
    }
    return counter;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const validText = text.trim();
    if (validText === "") {
      return 0;
    }
    let sum = 0;
    const regex = new RegExp(/^-?\d*\.?\d+$/);
    const textCollection = text.split(" ");
    for (let i = 0; i < textCollection.length; i++){
      const isNumber = regex.test(textCollection[i]);
      if (isNumber){
        sum += parseFloat(textCollection[i]);
      }
    }
    return sum; 
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;


//const numbersSum = numbers.reduce((acc, num) => acc + parseInt(num), 0);