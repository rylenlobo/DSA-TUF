const pattern = (n) => {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a += j;
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
