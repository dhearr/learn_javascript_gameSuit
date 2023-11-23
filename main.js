var quest = true;
while (quest) {
  // men generate pilihan player
  var player = prompt("Pilih : batu, gunting, kertas");

  // men generate pilihan komputer
  // mambangkitkan bilangan random
  var komputer = Math.random();
  if (komputer < 0.34) {
    komputer = "batu";
  } else if (komputer >= 0.34 && komputer < 0.67) {
    komputer = "gunting";
  } else {
    komputer = "kertas";
  }

  // menentukan rules
  var hasil = "";
  if (player == komputer) {
    hasil = "SERI!";
  } else if (player == "batu") {
    // [MENGGUNAKAN IF DAN ELSE]
    //   if (komputer == "gunting") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    // [MENGGUNAKAN OPERATOR TERNARI]
    hasil = komputer == "gunting" ? "MENANG!" : "KALAH";
  } else if (player == "gunting") {
    hasil = komputer == "kertas" ? "MENANG!" : "KALAH";
  } else if (player == "kertas") {
    hasil = komputer == "batu" ? "MENANG!" : "KALAH";
  } else {
    hasil = "memasukan pilihan yang salah!";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memilih : " +
      player +
      " \ndan Komputer memilih : " +
      komputer +
      " \nMaka hasilnya : kamu " +
      hasil +
      ""
  );
  quest = confirm("Mau bermain lagi?");
}
alert("terimkasih sudah bermain game sederhana ini");
