function countAllPaarl(regNumbers){
    //console.log(regNumbers);
    //string = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"
    const regNumList = regNumbers.split(",");
    
    let regCount = 0;
    for (var i = 0; i < regNumList.length; i++){
      const regNo = regNumList[i].trim();
      if (regNo.startsWith("CJ")){
        regCount++;
      }
    }
    return regCount;
  }