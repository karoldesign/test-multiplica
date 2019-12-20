const fs = require('fs');
const data = fs.readFileSync('../test/input.txt', 'utf8');
const n = data.split(/\r?\n/).map(linea => {
  return Number(linea);
});

const lottery = n.reduce((pV, cV, v, e) => {
  return pV + cV;
});


// var elem = document.getElementById('descargar');
// elem.download = "archivo.txt";
// elem.href = "data:application/octet-stream," 
// + encodeURIComponent(lottery);


// const b = new Blob(lottery, {type: "text/plain;charset=utf-8"});
// saveAs(b, "../test/finallyNumbers.txt");