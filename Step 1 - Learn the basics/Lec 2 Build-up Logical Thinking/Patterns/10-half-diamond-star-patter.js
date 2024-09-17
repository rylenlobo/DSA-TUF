// const erect_pattern = (n) => {
//   let a = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       a += "*";
//     }
//     a += "\n";
//   }
//   return a;
// };

// const inverted_pattern = (n) => {
//   let a = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = n - 1; j > i; j--) {
//       a += "*";
//     }
//     a += "\n";
//   }
//   return a;
// };

// const N = 5;
// const up = erect_pattern(N);
// const down = inverted_pattern(N);

// console.log(up + down);

const pattern = (n) => {
  let a = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }

    for (let j = 1; j <= stars; j++) {
      a += "*";
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
