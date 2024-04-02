let firstFunction = function(){
  return new Promise( function(resolve, reject){
           resolve('Your cat is ');
  });
}

let secondFunction = function(dataFromFirstFunction){
  return new Promise( function(resolve, reject){
    resolve(dataFromFirstFunction + 'crazy');
      
  });
}

firstFunction()
  .then(function(data){
  return secondFunction(data);
  })
  .then(function(data){
    console.log(data);
  });

=========================================================================================================
  // fetch promise

fetch('https://api.seatgeek.com/2/events?q=amway-center&client_id=MTI3NjI2NjF8MTUzNDYxMjQ1MS4zNA')
  .then(function(response) {
    return response.json(); // converting it to json format
  })
  .then(function(response) {
     console.log(response);
  });
