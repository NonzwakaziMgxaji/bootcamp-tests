function countRegNumber(regPlate){
    console.log(regPlate);
    
    var regCount = regPlate.split(",");
    return regCount.length;
   //same as Object.keys(regCount).length;
  } 