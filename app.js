// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

//link close sidebar links
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.style.left = "-100%";
        });
    });
});

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarLinks.style.maxHeight = null;
        navbarLinks.classList.remove('active');
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.maxHeight = null;
            content.classList.remove('show');
        });
    }
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = button.nextElementSibling;
        const isActive = accordionItem.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        });

        if (!isActive) {
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.video');
    var playButtons = document.querySelectorAll('.play-button');

    videos.forEach(function (video, index) {
        var playButton = playButtons[index];

        playButton.addEventListener('click', function () {
            stopAllVideos(video);
            video.play();
            playButton.style.display = 'none';
        });

        video.addEventListener('click', function () {
            if (video.paused) {
                stopAllVideos(video);
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'block';
            }
        });

        video.addEventListener('ended', function () {
            video.currentTime = 0;
            video.pause();
            playButton.style.display = 'block';
        });
    });

    function stopAllVideos(exceptVideo) {
        videos.forEach(function (video) {
            if (video !== exceptVideo && !video.paused) {
                video.pause();
                video.currentTime = 0;
                video.nextElementSibling.style.display = 'block'; // Show play button
            }
        });
    }
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    loop: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

