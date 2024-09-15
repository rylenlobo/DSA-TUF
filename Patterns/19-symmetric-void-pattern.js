const erect_pattern = (n) => {
  let a = "";
  let space = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      a += "*";
    }

    for (let j = 0; j < space; j++) {
      a += " ";
    }

    for (let j = 0; j < n - i; j++) {
      a += "*";
    }

    space += 2;
    a += "\n";
  }
  return a;
};

const inverted_pattern = (n) => {
  let a = "";
  let space = 2 * n - 2;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a += "*";
    }

    for (let j = 0; j < space; j++) {
      a += " ";
    }

    for (let j = 1; j <= i; j++) {
      a += "*";
    }

    space -= 2;
    a += "\n";
  }
  return a;
};

let n = 3;
console.log(erect_pattern(n) + inverted_pattern(n));
