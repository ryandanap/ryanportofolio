// NAVBAR
const navbarNav = document.querySelector(".navbar-navi");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerIcon = document.querySelector(".bi-list");
const closeIcon = document.querySelector(".bi-x-square");

// Ketika hamburger menu di klik
hamburgerMenu.onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle("active");

  // Tampilkan ikon yang sesuai
  if (navbarNav.classList.contains("active")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
};

// Klik di luar menu untuk menutup navbar
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
});




// SCROLL ANIMATION
window.addEventListener("scroll", function () {
  // Pilih semua elemen dengan class 'scroll-element'
  var elements = document.querySelectorAll(".scroll-element");

  // Iterasi semua elemen
  elements.forEach(function (element) {
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});




// Fungsi untuk memeriksa posisi elemen
function checkVisibility() {
  // Pilih semua elemen dengan class 'scroll-element-1'
  var elements = document.querySelectorAll(".scroll-element-1");
  
  // Iterasi semua elemen
  elements.forEach(function (element) {
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

// Tambahkan event listener untuk scroll
window.addEventListener("scroll", checkVisibility);

// Jalankan pemeriksaan saat halaman selesai dimuat
window.addEventListener("DOMContentLoaded", checkVisibility);




// EMAIL JS
const contactForm = document.getElementById('form-kontak'), // ID form
      contactMessage = document.getElementById('pemberitahuan-kontak')

const sendEmail = (e) => {
    e.preventDefault()

    // servceID - templateID - #form - publicKey (EmailJS)
    emailjs.sendForm('service_6j826wr','template_3hczup8','#form-kontak','uhNU3B-BDepeoXVzt')
    .then(() => {
        // show send message
        contactMessage.textContent = 'Pesan sudah terkirim ✅'

        // remove message after 5 detik
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 7000)

        // clear input fields
        contactForm.reset()
    }, () => {
        // show errror
        contactMessage.textContent = 'Pesan tidak terkirim (layanan error) ❌'
    })

}

contactForm.addEventListener('submit', sendEmail)



document.getElementById('btnStart').addEventListener('click', function () {
  this.classList.add('hidden');
});