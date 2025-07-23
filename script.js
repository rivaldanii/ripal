const teksSurat = `
Hai kamu,

Kamu nggak sendiri ya.
Aku di sini buat dengerin, nemenin, atau sekadar duduk diem bareng kamu kalo kamu butuh.
Kalau dunia rasanya berat x,
kamu boleh rehat sebentar. Kamu boleh nangis, kamu boleh marah... tapi jangan pernah ngerasa sendiri(no no yaaa).
Aku sayang kamu cuyunkkkkkk 💌
`;

let index = 0;
let intervalId;

function bukaSurat() {
  document.querySelector('.isi-surat').style.opacity = 1;

  // Tampilkan foto
  const fotoKiri = document.getElementById('fotoKiri');
  const fotoKanan = document.getElementById('fotoKanan');

  fotoKiri.style.opacity = 1;
  fotoKiri.style.left = '-110px';

  fotoKanan.style.opacity = 1;
  fotoKanan.style.right = '-110px';

  // Ketik surat
  const p = document.getElementById('teksSurat');
  p.textContent = '';
  clearInterval(intervalId);
  index = 0;
  intervalId = setInterval(() => {
    if (index < teksSurat.length) {
      p.textContent += teksSurat[index++];
    } else {
      clearInterval(intervalId);
    }
  }, 40);
}
