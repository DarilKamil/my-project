//Jum'at solve problem
//exercises 10
//exercises 11
//exercises 12
//exercises 13


//function bandingkan angka
//exercises 10

function bandingkanAngka(angka1, angka2) {
  if(angka1 === angka2) {
return -1;
}
return angka1 < angka2;
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));

//function balik Kata
//exercises 11
function balikKata(kata) {

  var balik=kata.split('').reverse().join('');
  return balik;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));

//function konversi menit
//exercises 12

function konversiMenit(menit) {

  let minutes = Math.floor(menit / 60)
  let seconds = menit % 60

  if (String(seconds).length === 1) {
    seconds = "0"+seconds
  }

  let hasil = minutes + ":" + seconds

  return String(hasil)
}

// TEST CASES
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
