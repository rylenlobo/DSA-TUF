const pattern = (n) => {
  let a = "";
  let ascii = "A".charCodeAt(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      a += String.fromCharCode(ascii + j);
    }
    a += "\n";
  }
  console.log(a);
};

pattern(5);
