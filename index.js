const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function (arrayNama, fnCallback) {
  let hasil = [];

  for (let counter = 0; counter < fnCallback(arrayNama).length; counter++) {
    hasil.push(counter + 1 + ". " + fnCallback(arrayNama)[counter]);
  }
  console.log(hasil);
  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function (arrayNama) {
  return arrayNama.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = function (arrayNama) {
  return arrayNama.sort().reverse();
};

// console.log(sorter(names, sortAscending));

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
