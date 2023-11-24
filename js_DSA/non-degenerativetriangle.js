function isNonDegenerateTriangle(a, b, c) {
    // Check if each set of sides satisfies the triangle inequality
    for (let i = 0; i < a.length; i++) {
      if (!(a[i] + b[i] > c[i] && b[i] + c[i] > a[i] && c[i] + a[i] > b[i])) {
        console.log("No");
      } else {
        console.log("Yes");
      }
    }
  }
  
  // Example usage with the provided arrays
  const a = [7, 10, 7];
  const b = [2, 3, 4];
  const c = [2, 7, 4];
  
  isNonDegenerateTriangle(a, b, c);
  