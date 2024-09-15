const pattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        a += "*";
      } else {
        a += " ";
      }
    }
    a += "\n";
  }
  console.log(a);
};

pattern(3);
