const pattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      a += "*";
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
