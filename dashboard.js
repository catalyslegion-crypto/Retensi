// Data Produk
const produk = [
  { nama: "Gift Box", harga: "Rp100.000", stok: 10 },
  { nama: "Boneka", harga: "Rp75.000", stok: 5 },
  { nama: "Buket Bunga", harga: "Rp50.000", stok: 8 }
];

// Data Pesanan
const pesanan = [
  { customer: "Andi", produk: "Gift Box", status: "Diproses" },
  { customer: "Siti", produk: "Boneka", status: "Selesai" },
  { customer: "Rina", produk: "Buket Bunga", status: "Diproses" }
];

// Statistik
document.getElementById("totalProduk").innerText = produk.length;
document.getElementById("totalPesanan").innerText = pesanan.length;

// Isi Tabel Produk
const produkTable = document.getElementById("produkTable");
produk.forEach(p => {
  produkTable.innerHTML += `
    <tr>
      <td>${p.nama}</td>
      <td>${p.harga}</td>
      <td>${p.stok}</td>
    </tr>
  `;
});

// Isi Tabel Pesanan
const pesananTable = document.getElementById("pesananTable");
pesanan.forEach(p => {
  pesananTable.innerHTML += `
    <tr>
      <td>${p.customer}</td>
      <td>${p.produk}</td>
      <td>${p.status}</td>
    </tr>
  `;
});
