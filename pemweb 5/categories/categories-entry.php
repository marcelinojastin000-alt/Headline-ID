<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entry Kategori</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="navbar">
    <div class="logo">Headline <span>ID</span></div>
    <ul>
      <li><a href="categories.php">Daftar Kategori</a></li>
      <li><a href="categories-entry.php" class="active">Tambah Kategori</a></li>
    </ul>
  </div>

  <div class="dashboard">
    <h1>Tambah Kategori Baru</h1>
    <form action="categories-proses.php" method="post">
      <label for="nama">Nama Kategori:</label><br>
      <input type="text" id="nama" name="nama" required
        style="padding:10px; width:300px; border-radius:6px; border:1px solid #ccc;"><br><br>
      <button type="submit" class="btn">Simpan</button>
    </form>
  </div>
</body>
</html>
