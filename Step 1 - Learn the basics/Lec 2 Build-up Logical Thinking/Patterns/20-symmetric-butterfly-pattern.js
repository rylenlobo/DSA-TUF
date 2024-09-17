const pattern = (n) => {
  let a = "";
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;

    for (let j = 1; j <= stars; j++) {
      a += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      a += " ";
    }

    for (let j = 1; j <= stars; j++) {
      a += "*";
    }

    a += "\n";
    if (i < n) spaces -= 2;
    else spaces += 2;
  }
  console.log(a);
};
pattern(5);
