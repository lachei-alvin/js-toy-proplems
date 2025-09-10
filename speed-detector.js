function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return "Ok";
    // No any issue if speed is at the limit or below
  } else {
    // Calculating  demerit points per exceeded speed
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points > 12) {
      return "License suspended";
    } else {
      return `Points: ${points}`;
    }
  }
}

// Example usages for above speedlimit
let carSpeed = 135;
console.log(speedDetector(carSpeed)); // Output: Points: 2
