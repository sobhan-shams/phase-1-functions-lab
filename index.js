// Code your solution in this file!
function distanceFromHqInBlocks (block) {
    return Math.abs(42 - block);
  }
  
  function distanceFromHqInFeet (block) {
    return (distanceFromHqInBlocks(block) * 264);
  }
  
  function distanceTravelledInFeet (start,end) {
    return (Math.abs(start - end) * 264);
  }
  function calculatesFarePrice (start, destination) {
    let distanceOfFare = distanceTravelledInFeet(start, destination);
  
    if (distanceOfFare <= 400) {
      return 0;
    }
    else if (distanceOfFare <= 2000 && distanceOfFare > 400) {
        distanceOfFare = distanceOfFare - 400;
      return distanceOfFare * 0.02;
    }
    else if (distanceOfFare > 2000 && distanceOfFare < 2500 ){
      return 25;
    }
    else {
      return "cannot travel that far";
    }
  }
  