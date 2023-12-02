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
    const profilkanan = document.querySelector(".profilpanelbar-atas");
    panahbawah.addEventListener("click", function(){
        sidebarkanan.classList.toggle("active");
        if(sidebarkanan.classList.contains("active")){
            sidebarkanan.style.display = "block";
        }
        else{
            sidebarkanan.style.display = "none";
        }
    });

    profilkanan.addEventListener("click", function(){
        sidebarkanan.classList.toggle("active");
        if(sidebarkanan.classList.contains("active")){
            sidebarkanan.style.display = "block";
        }
        else{
            sidebarkanan.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        const isClickInsideSidebar = sidebarkanan.contains(event.target) || event.target === sidebarkanan;
    
        if (!isClickInsideSidebar && event.target.id !== 'rotateImage' && !event.target.classList.contains("profilpanelbar-atas") && sidebarkanan.style.display === "block" && rotated) {
            sidebarkanan.style.display = "none";
            sidebarkanan.classList.remove("active");
            rotateImage();
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


  fetch("./JSON/restaurantFixed.json")
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        console.log(response[4].name);
        let count = 0;
        for (let i = 0; i < 3; i++) {
            const element = response[i];
            if (element.name !== null) {
                console.log(element.name);
            }
        }           
    })
