const pattern = (n) => {
  let a = "";

  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let bottom = 2 * n - 2 - i;

      let left = j;
      let right = 2 * n - 2 - j;

      a += n - Math.min(Math.min(top, bottom), Math.min(left, right));
    }
    a += "\n";
  }
  console.log(a);
};

pattern(3);
