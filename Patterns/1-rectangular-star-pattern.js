const rectPattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      a += "*";
    }
    a += "\n";
  }
  console.log(a);
};

rectPattern(3);
