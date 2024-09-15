const pattern = (n) => {
  let a = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - (i + 1); j++) {
      a += " ";
    }

    let ascii = "A".charCodeAt(0);
    let breakpoint = (2 * i + 1) / 2;
    for (let j = 1; j <= 2 * i + 1; j++) {
      if (j <= breakpoint) a += String.fromCharCode(ascii++);
      else a += String.fromCharCode(ascii--);
    }

    for (let j = 0; j < n - (i + 1); j++) {
      a += " ";
    }
    a += "\n";
  }

  console.log(a);
};

pattern(5);
