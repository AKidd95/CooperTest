function cooperAssess(this, distance) {
  if(this.gender === 'female') {
      if(this.age >= 13 && this.age <= 14 ) {
        if(distance > 2000) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 1999 && distance >= 1900) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 1899 && distance >= 1600) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1599 && distance >= 1500) {
          this.cooperMessage = 'Below Average';
        } else if (distance < 1500) {
          this.cooperMessage = 'Poor';
        } else {

        }
      }

      else if(this.age >= 15 && this.age <= 16 ) {
        if(distance > 2100) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2099 && distance >= 2000) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 1999 && distance >= 1700) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1699 && distance >= 1600) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1600) {
          this.cooperMessage = 'Poor';
        }
      }

      else if(this.age >= 17 && this.age <= 19 ) {
        if(distance > 2300) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2299 && distance >= 2100) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 2099 && distance >= 1800) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1799 && distance >= 1700) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1700) {
          this.cooperMessage = 'Poor';
        }
      }

      else if(this.age >= 20 && this.age <= 29 ) {
        if(distance > 2700) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2699 && distance >= 2200) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 2199 && distance >= 1800) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1799 && distance >= 1500) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1500) {
          this.cooperMessage = 'Poor';
        }
      }

      else if(this.age >= 30 && this.age <= 39 ) {
        if(distance > 2500) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2499 && distance >= 2000) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 1999 && distance >= 1700) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1699 && distance >= 1400) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1400) {
          this.cooperMessage = 'Poor';
        }
      }

      else if(this.age >= 40 && this.age <= 49 ) {
        if(distance > 2300) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2299 && distance >= 1900) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 1899 && distance >= 1500) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1499 && distance >= 1200) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1200) {
          this.cooperMessage = 'Poor';
        }
      }

      else if(this.age >= 50 ) {
        if(distance > 2200) {
          this.cooperMessage = 'Excellent';
        } else if (distance <= 2199 && distance >= 1700) {
          this.cooperMessage = 'Above average';
        } else if (distance <= 1699 && distance >= 1400) {
          this.cooperMessage = 'Average';
        } else if (distance <= 1399 && distance >= 1100) {
          this.cooperMessage = 'Below Average';
        } else (distance < 1100) {
          this.cooperMessage = 'Poor';
        }
      }
    } else {
        console.log("incorrect age!")
    }
  else {
    console.log("incorrect gender!")
  }
});
