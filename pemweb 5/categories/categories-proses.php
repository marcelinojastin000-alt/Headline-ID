<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proses Kategori</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="navbar">
    <div class="logo">Headline <span>ID</span></div>
    <ul>
      <li><a href="categories.php">Daftar Kategori</a></li>
      <li><a href="categories-entry.php">Tambah Kategori</a></li>
    </ul>
  </div>

  <div class="dashboard">
    <h1>Proses Simpan Kategori</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nama = htmlspecialchars($_POST['nama']);
      echo "<p>Kategori <strong>$nama</strong> berhasil disimpan!</p>";
    } else {
      echo "<p>Tidak ada data yang dikirim.</p>";
    }
    ?>
    <br>
    <a href="categories.php" class="btn">Kembali ke Daftar</a>
  </div>
</body>
</html>
