function filter(array) {
	//Filtrar todos los elementos del array que comiencen con la letra "a".
	//Devolver un nuevo array con los elementos que cumplen la condición
	//Tu código:
	let newArr = array.filter((element) => element[0] !== 'a')
	return newArr
  }

  console.log(filter(['arroz','pepe','algodon','gris',1,'alcantarilla']));