document.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.getElementById("greeting");
  const welcomeEl = document.getElementById("welcome");
  const btnTambah = document.getElementById("btnTambah");
  const popupTambah = document.getElementById("popupTambah");
  const popupLogout = document.getElementById("popupLogout");
  const btnLogout = document.getElementById("btnLogout");
  const dataTable = document.getElementById("dataTable");
  const userCount = document.getElementById("userCount");
  const processingCount = document.getElementById("processingCount");
  const doneCount = document.getElementById("doneCount");

  // ========== 1️⃣ GREETING DINAMIS ==========
  const now = new Date();
  const hour = now.getHours();
  let greet = "Selamat pagi 🌅";
  if (hour >= 11 && hour < 15) greet = "Selamat siang ☀️";
  else if (hour >= 15 && hour < 18) greet = "Selamat sore 🌇";
  else if (hour >= 18 || hour < 4) greet = "Selamat malam 🌙";

  const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  greetingEl.textContent = `${greet}, hari ini ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

  // ========== 2️⃣ WEB STORAGE ==========
  const adminName = localStorage.getItem("adminName") || "Admin";
  welcomeEl.textContent = `Selamat datang kembali, ${adminName}! 👋`;

  // ========== 3️⃣ POPUP TAMBAH DATA ==========
  btnTambah.addEventListener("click", () => popupTambah.classList.remove("hidden"));
  popupTambah.querySelector(".btn-close").addEventListener("click", () => popupTambah.classList.add("hidden"));

  document.getElementById("btnSimpan").addEventListener("click", () => {
    const nama = document.getElementById("namaInput").value.trim();
    const layanan = document.getElementById("layananInput").value.trim();
    if (!nama || !layanan) return alert("Isi semua data!");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>-</td>
      <td>${nama}</td>
      <td>${layanan}</td>
      <td>Menunggu</td>
      <td>${new Date().toLocaleDateString("id-ID")}</td>
    `;
    dataTable.appendChild(newRow);
    popupTambah.classList.add("hidden");

    // Simpan ke localStorage
    const log = JSON.parse(localStorage.getItem("dataBaru") || "[]");
    log.push({ nama, layanan, tanggal: Date.now() });
    localStorage.setItem("dataBaru", JSON.stringify(log));
  });

  // ========== 4️⃣ POPUP LOGOUT ==========
  btnLogout.addEventListener("click", () => popupLogout.classList.remove("hidden"));
  popupLogout.querySelector(".btn-close").addEventListener("click", () => popupLogout.classList.add("hidden"));
  document.getElementById("confirmLogout").addEventListener("click", () => {
    sessionStorage.clear();
    alert("Anda telah keluar.");
    location.reload();
  });

  // ========== 5️⃣ FETCH DATA ASYNC ==========
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      // isi table dengan data palsu
      dataTable.innerHTML = "";
      users.slice(0, 3).forEach((u, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${i+1}</td>
          <td>${u.name}</td>
          <td>Pembuatan KTP</td>
          <td>${i % 2 ? "Proses" : "Selesai"}</td>
          <td>${new Date().toLocaleDateString("id-ID")}</td>
        `;
        dataTable.appendChild(tr);
      });

      userCount.textContent = users.length + 1000;
      processingCount.textContent = Math.floor(Math.random() * 100);
      doneCount.textContent = Math.floor(Math.random() * 500);
    })
    .catch(() => {
      dataTable.innerHTML = `<tr><td colspan="5">Gagal memuat data!</td></tr>`;
    });

  // ========== 6️⃣ EVENT TAMBAHAN ==========
  // Hover event di tombol tambah
  btnTambah.addEventListener("mouseenter", () => btnTambah.textContent = "+ Tambahkan Data Baru");
  btnTambah.addEventListener("mouseleave", () => btnTambah.textContent = "+ Tambah Data");

  // Keyboard event: tekan ESC untuk menutup popup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popupTambah.classList.add("hidden");
      popupLogout.classList.add("hidden");
    }
  });
});
