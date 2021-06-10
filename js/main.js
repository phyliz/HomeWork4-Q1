const array = [2020, 2021];

array.forEach(function (item, index) {
  if (item % 4 == 0 && item % 100 != 0 || item % 400 == 0) {
  console.log(`${item}年はうるう年です。`);
  }
  else {
    console.log(`${item}年はうるう年ではありません。`);
  }
})

