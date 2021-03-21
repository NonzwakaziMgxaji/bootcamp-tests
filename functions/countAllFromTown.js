function countAllFromTown(registrationNumbers,regTown){
  //console.log(regNum);
  var regNumList = registrationNumbers.split(",");
  var regNo = [];
  
  let regCount = 0;
  for (var i = 0; i < regNumList.length; i++){
    var regNumTrim = regNumList[i].trim();
    if (regNumTrim.startsWith(regTown)){
      regNo.push(regNumTrim);
      regCount++;
    } 
  }
  return regCount;
}