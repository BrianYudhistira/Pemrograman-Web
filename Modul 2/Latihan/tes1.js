function kosong() {
  var text1 = document.getElementById("NamaLengkap").value;
  var text2 = document.getElementById("Email").value;
  var text3 = document.getElementById("Address").value;

  if (text1 == null && text2 && null && text3 == null) {
    alert("Data Sudah Lengkap ");
  } else {
    alert("Anda Harus mengisi data dengan lengkap");
  }
}
