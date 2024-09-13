const pattern = (n) => {
  let start = 1;
  let a = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) start = 1;
    else start = 0;

    for (let j = 0; j <= i; j++) {
      a += start.toString();
      start = 1 - start;
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
