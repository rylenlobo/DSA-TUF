const pattern = (n) => {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a += j;
    }

    for (let j = 0; j < 2 * n - (2 * i + 1) + 1; j++) {
      a += " ";
    }

    for (let j = i; j >= 1; j--) {
      a += j;
    }
    a += "\n";
  }
  console.log(a);
};

pattern(6);
