// 1870. Minimum Speed to Arrive on Time

// You are given a floating-point number hour, 
// representing the amount of time you have to reach the office. 
// To commute to the office, you must take n trains in sequential order. 
// You are also given an integer array dist of length n, 
// where dist[i] describes the distance (in kilometers) of the ith train ride.

// Each train can only depart at an integer hour, 
// so you may need to wait in between each train ride.

// For example, if the 1st train ride takes 1.5 hours, 
// you must wait for an additional 0.5 hours before you can depart 
// on the 2nd train ride at the 2 hour mark.
// Return the minimum positive integer speed (in kilometers per hour) 
// that all the trains must travel at for you to reach the office on time, 
// or -1 if it is impossible to be on time.

// Tests are generated such that the answer will not exceed 10^7 
// and hour will have at most two digits after the decimal point.

const minSpeedOnTime = (dist, hour) => {
  const n = dist.length;
  if (n > Math.ceil(hour)) return -1;

  const largest = Math.max(...dist);

  if (n === Math.ceil(hour)) {
    const remainder = Number((hour % (n - 1)).toFixed(2));
    const lastRate = remainder !== 0 ? (dist[n-1] / remainder) : 1;
    console.log({remainder, largest, lastRate});
    return Math.ceil(Math.max(largest, lastRate));
  }

  // if (n < Math.ceil(hour))...
  const longestTime = largest === dist[n-1] ? hour - (n-1) : hour - (n-2);
  let trialSpeed = largest === dist[n-1] ? Math.floor(largest/longestTime) : Math.ceil(largest/longestTime);
  while (true) {
    let totalTime = dist.reduce((total, currentDist, i) => {
      if (i === n-1) return total + (currentDist / trialSpeed);
      return total + Math.ceil(currentDist / trialSpeed);
    }, 0);
    console.log({totalTime, trialSpeed});
    if (totalTime <= hour) return trialSpeed;
    trialSpeed++;
  }
};

module.exports = minSpeedOnTime;