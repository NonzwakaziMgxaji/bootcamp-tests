function fromWhere(regNumber) {
    switch(regNumber){
      case "CY":
        return "Bellville";
        break;
      case "CJ":
        return "Paarl";
        break;
      case "CA":
        return "Cape Town";
        break;
      default:
        return "Some other place!";
        break;
    }
  }
  fromWhere("Retreat");
  console.log(fromWhere("Retreat"));