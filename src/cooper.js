function Cooper(person, distance) {};


function cooperAssessment(person, distance) {
  if (person.age >= 13 && person.age <= 14 ) {
    if(distance > 2000) {
      assessment = 'Excellent';
    } else if (distance <= 1999 && distance >= 1900) {
      assessment = 'Above average';
    } else if (distance <= 1899 && distance >= 1600) {
      assessment = 'Average';
    } else if (distance <= 1599 && distance >= 1500) {
      assessment = 'Below Average';
    } else (distance < 1500) {
      assessment = 'Poor';
    }
  }
};
// var warm_up = 10;
// if (warm_up = 10) {
//   warm_up = true
// } else {
//   warm_up = false
// };
