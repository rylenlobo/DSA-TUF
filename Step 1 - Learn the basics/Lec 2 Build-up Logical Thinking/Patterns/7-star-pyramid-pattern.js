const pattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - (i + 1); j++) {
      a += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      a += "*";
    }

    for (let j = 0; j < n - (i + 1); j++) {
      a += " ";
    }
    a += "\n";
  }
  console.log(a);
};

pattern(6);
