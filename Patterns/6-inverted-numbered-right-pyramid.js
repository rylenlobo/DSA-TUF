const pattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      a += n - j + 1;
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
