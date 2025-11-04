<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Kategori</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="navbar">
    <div class="logo">Headline <span>ID</span></div>
    <ul>
      <li><a href="categories.php" class="active">Daftar Kategori</a></li>
      <li><a href="categories-entry.php">Tambah Kategori</a></li>
    </ul>
  </div>

  <div class="dashboard">
    <h1>Daftar Kategori</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kategori</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Teknologi</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Olahraga</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hiburan</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <a href="categories-entry.php" class="btn">+ Tambah Kategori</a>
  </div>
</body>
</html>
