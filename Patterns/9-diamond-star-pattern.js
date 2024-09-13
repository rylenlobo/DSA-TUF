const erect_pattern = (n) => {
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
  return a;
};

const inverted_pattern = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      a += " ";
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      a += "*";
    }

    for (let j = 0; j < i; j++) {
      a += " ";
    }
    a += "\n";
  }
  return a;
};

const N = 6;
const up_pyramid = erect_pattern(N);
const down_pyramid = inverted_pattern(N);

console.log(up_pyramid + down_pyramid);
