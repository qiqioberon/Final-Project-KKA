document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const sidebar = document.getElementById("sidebar");

    burger.addEventListener("click", function () {
        // Toggle kelas active pada sidebar
        sidebar.classList.toggle("active");

        // Periksa apakah sidebar sekarang aktif atau tidak
        if (sidebar.classList.contains("active")) {
            // Jika aktif, berikan properti display: block;
            sidebar.style.display = "block";
        } else {
            // Jika tidak aktif, berikan properti display: none;
            sidebar.style.display = "none";
        }
    });


    document.addEventListener("click", function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnBurger = event.target.classList.contains("burger");

        if (!isClickInsideSidebar && !isClickOnBurger) {
            sidebar.style.display = "none";
            sidebar.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded",function(){
    const panahbawah = document.getElementById('rotateImage');
    const sidebarkanan = document.querySelector(".sidebar-right");
    panahbawah.addEventListener("click", function(){
        sidebarkanan.classList.toggle("active");
        if(sidebarkanan.classList.contains("active")){
            sidebarkanan.style.display = "block";
        }
        else{
            sidebarkanan.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        const isClickInsideSidebar = sidebarkanan.contains(event.target);
        const isClickOnpanah = event.target.getElementById("rotateImage");

        if (!isClickInsideSidebar || !isClickOnpanah) {
            sidebarkanan.style.display = "none";
            sidebarkanan.classList.remove("active");
        }
    });
    
})

let rotated = false;
function rotateImage() {
    const image = document.getElementById('rotateImage');

    // Toggle kelas 'rotate-180' untuk menentukan rotasi
    if (rotated) {
        image.classList.remove('rotate-180');
        image.classList.add('rotate-180-clockwise');
    } else {
        image.classList.remove('rotate-180-clockwise');
      image.classList.add('rotate-180');
    }

    // Toggle status rotasi
    rotated = !rotated;
  }

  
