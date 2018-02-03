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

  if (person.age >= 15 && person.age <= 16 ) {
    if(distance > 2100) {
      assessment = 'Excellent';
    } else if (distance <= 2099 && distance >= 2000) {
      assessment = 'Above average';
    } else if (distance <= 1999 && distance >= 1700) {
      assessment = 'Average';
    } else if (distance <= 1699 && distance >= 1600) {
      assessment = 'Below Average';
    } else (distance < 1600) {
      assessment = 'Poor';
    }
  }

  if (person.age >= 17 && person.age <= 19 ) {
    if(distance > 2300) {
      assessment = 'Excellent';
    } else if (distance <= 2299 && distance >= 2100) {
      assessment = 'Above average';
    } else if (distance <= 2099 && distance >= 1800) {
      assessment = 'Average';
    } else if (distance <= 1799 && distance >= 1700) {
      assessment = 'Below Average';
    } else (distance < 1700) {
      assessment = 'Poor';
    }
  }

  if (person.age >= 20 && person.age <= 29 ) {
    if(distance > 2700) {
      assessment = 'Excellent';
    } else if (distance <= 2699 && distance >= 2200) {
      assessment = 'Above average';
    } else if (distance <= 2199 && distance >= 1800) {
      assessment = 'Average';
    } else if (distance <= 1799 && distance >= 1500) {
      assessment = 'Below Average';
    } else (distance < 1500) {
      assessment = 'Poor';
    }
  }

  if (person.age >= 30 && person.age <= 39 ) {
    if(distance > 2500) {
      assessment = 'Excellent';
    } else if (distance <= 2499 && distance >= 2000) {
      assessment = 'Above average';
    } else if (distance <= 1999 && distance >= 1700) {
      assessment = 'Average';
    } else if (distance <= 1699 && distance >= 1400) {
      assessment = 'Below Average';
    } else (distance < 1400) {
      assessment = 'Poor';
    }
  }

  if (person.age >= 40 && person.age <= 49 ) {
    if(distance > 2300) {
      assessment = 'Excellent';
    } else if (distance <= 2299 && distance >= 1900) {
      assessment = 'Above average';
    } else if (distance <= 1899 && distance >= 1500) {
      assessment = 'Average';
    } else if (distance <= 1499 && distance >= 1200) {
      assessment = 'Below Average';
    } else (distance < 1200) {
      assessment = 'Poor';
    }
  }

  if (person.age >= 50 ) {
    if(distance > 2200) {
      assessment = 'Excellent';
    } else if (distance <= 2199 && distance >= 1700) {
      assessment = 'Above average';
    } else if (distance <= 1699 && distance >= 1400) {
      assessment = 'Average';
    } else if (distance <= 1399 && distance >= 1100) {
      assessment = 'Below Average';
    } else (distance < 1100) {
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
