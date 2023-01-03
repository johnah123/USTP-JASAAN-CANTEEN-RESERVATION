/*=====Sticky=Nav=Bar=====*/
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  const iconTrigger = document.querySelector('#iconTrigger')
  const icon = document.querySelector('#icon')
  const menuContainer = document.querySelector('.menu-container')
  
  iconTrigger.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
      /* Icon */
      icon.classList.remove('fa-bars')
      icon.classList.add('fa-close')
      /* Menu */
      menuContainer.classList.add('show')
      menuContainer.classList.remove('hide')
    } else {
      /* Icon */
      icon.classList.add('fa-bars')
      icon.classList.remove('fa-close')
      /* Menu */
      menuContainer.classList.remove('show')
      menuContainer.classList.add('hide')
    }
  })



  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 4000);
  }
  
  
  window.onload = fadeOut;