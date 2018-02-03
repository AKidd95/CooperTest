function Cooper(person, distance) {};


function cooperAssessment(this) {
  switch(this.gender) {
  case "female":
  if (this.age >= 13 && this.age <= 14 ) {
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

  if (this.age >= 15 && this.age <= 16 ) {
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

  if (this.age >= 17 && this.age <= 19 ) {
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

  if (this.age >= 20 && this.age <= 29 ) {
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

  if (this.age >= 30 && this.age <= 39 ) {
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

  if (this.age >= 40 && this.age <= 49 ) {
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

  if (this.age >= 50 ) {
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
}
};
