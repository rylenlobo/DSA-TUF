const pattern = (n) => {
  let a = "";
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a += num + " ";
      num = num + 1;
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
