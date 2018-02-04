function cooperAssess(obj, distance){
  if(obj.gender === 'female') {
      if(obj.age >= 13 && obj.age <= 14 ) {
        if(distance > 2000) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 1999 && distance >= 1900) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1899 && distance >= 1600) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1599 && distance >= 1500) {
          obj.cooperMessage = 'Below Average';
        } else if (distance < 1500) {
          obj.cooperMessage = 'Poor';
        } else {

        }
      }

      else if(obj.age >= 15 && obj.age <= 16 ) {
        if(distance > 2100) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2099 && distance >= 2000) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1999 && distance >= 1700) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1699 && distance >= 1600) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1600) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 17 && obj.age <= 19 ) {
        if(distance > 2300) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2299 && distance >= 2100) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2099 && distance >= 1800) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1799 && distance >= 1700) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1700) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 20 && obj.age <= 29 ) {
        if(distance > 2700) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2699 && distance >= 2200) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2199 && distance >= 1800) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1799 && distance >= 1500) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1500) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 30 && obj.age <= 39 ) {
        if(distance > 2500) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2499 && distance >= 2000) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1999 && distance >= 1700) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1699 && distance >= 1400) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1400) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 40 && obj.age <= 49 ) {
        if(distance > 2300) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2299 && distance >= 1900) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1899 && distance >= 1500) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1499 && distance >= 1200) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1200) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 50 ) {
        if(distance > 2200) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2199 && distance >= 1700) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1699 && distance >= 1400) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1399 && distance >= 1100) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1100) {
          obj.cooperMessage = 'Poor';
        }
      }
    } else {
        console.log("invalid age!")
    }
  else {
    console.log("invalid gender!")
  }

  if(obj.gender === 'male') {
      if(obj.age >= 13 && obj.age <= 14 ) {
        if(distance > 2700) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2699 && distance >= 2400) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2399 && distance >= 2200) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 2100 && distance >= 2199) {
          obj.cooperMessage = 'Below Average';
        } else if (distance < 2100) {
          obj.cooperMessage = 'Poor';
        } else {

        }
      }

      else if(obj.age >= 15 && obj.age <= 16 ) {
        if(distance > 2800) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2799 && distance >= 2500) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2499 && distance >= 2300) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 2299 && distance >= 2200) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 2200) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 17 && obj.age <= 19 ) {
        if(distance > 3000) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2999 && distance >= 2700) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2699 && distance >= 2500) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 2499 && distance >= 2300) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 2300) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 20 && obj.age <= 29 ) {
        if(distance > 2800) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2799 && distance >= 2400) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2399 && distance >= 2200) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 2199 && distance >= 1600) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1600) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 30 && obj.age <= 39 ) {
        if(distance > 2700) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2699 && distance >= 2300) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2299 && distance >= 2000) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1999 && distance >= 1500) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1500) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 40 && obj.age <= 49 ) {
        if(distance > 2500) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2499 && distance >= 2100) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 2099 && distance >= 1700) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1699 && distance >= 1400) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1400) {
          obj.cooperMessage = 'Poor';
        }
      }

      else if(obj.age >= 50 ) {
        if(distance > 2400) {
          obj.cooperMessage = 'Excellent';
        } else if (distance <= 2399 && distance >= 2000) {
          obj.cooperMessage = 'Above average';
        } else if (distance <= 1999 && distance >= 1600) {
          obj.cooperMessage = 'Average';
        } else if (distance <= 1599 && distance >= 1300) {
          obj.cooperMessage = 'Below Average';
        } else (distance < 1300) {
          obj.cooperMessage = 'Poor';
        }
      } else {
          console.log("invalid age!")
      }
    else {
      console.log("invalid gender!")
    }
});
});
