function perhitungan() {
  var bilangan1 = parseInt(document.getElementById("BilanganPertama").value);
  var bilangan2 = parseInt(document.getElementById("BilanganKedua").value);

  var hasil = bilangan1 + bilangan2;
  alert("Hasil Perhitungan = " + hasil);
}

function ulang() {
  document.getElementById("BilanganPertama").value = "";
  document.getElementById("BilanganKedua").value = "";
}
