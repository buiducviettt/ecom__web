document.addEventListener("DOMContentLoaded", function() {
  includeHTML("head", "/public/partials/head.html");
  includeHTML("header", "/public/partials/header.html");
  includeHTML("footer", "/public/partials/footer.html");

function includeHTML(id, url) {
  const element = document.getElementById(id);
  if (element) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        element.outerHTML = data;
      })
      .catch(error => {
        console.error("Error fetching HTML:", error);
      });
  }
}

  var countdownElements = document.querySelectorAll(".countdown");
  countdownElements.forEach(countdownElement => {
   var setTime = new Date(countdownElement.getAttribute('data-countdown')).getTime();
 var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();          
            // Find the distance between now and the count down date
            var distance = setTime - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        days = String(days).padStart(2, '0');
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
            
            // Display the result in the element with id="countdown"
               countdownElement.querySelector(".days").innerHTML = days;
        countdownElement.querySelector(".hours").innerHTML = hours;
        countdownElement.querySelector(".minutes").innerHTML = minutes;
        countdownElement.querySelector(".seconds").innerHTML = seconds;
            // If the count down is over, write some text 
           if (distance < 0) {
          clearInterval(x);
          countdownElement.querySelector(".days").innerHTML = "0";
          countdownElement.querySelector(".hours").innerHTML = "0";
          countdownElement.querySelector(".minutes").innerHTML = "0";
          countdownElement.querySelector(".seconds").innerHTML = "0";
   }
  
       
 }, 1000);
    
  })

        
//swiper
var flashsale__swiper = new Swiper('#swiper1', {
            slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
              delay: 2000, // Delay 2 giây (2000ms)
              disableOnInteraction: false, // Không dừng lại khi người dùng tương tác
            },
            navigation: {
               nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
            },
});
  var category__swiper = new Swiper("#swiper2", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.cate__swiper-next',
      prevEl: '.cate__swiper-prev',


    }
  })
    var category__swiper = new Swiper("#swiper3", {
    slidesPerView: 4,
      spaceBetween: 10,
     loop: true, // Vòng lặp các slide
      autoplay: {
        delay: 0, // Delay 2 giây (2000ms)
        disableOnInteraction: false, // Không dừng lại khi người dùng tương tác
         
      },
      speed: 5000, // Thời gian chuyển đổi giữa các slide (5 giây)
  
    })
  // thêm thẻ div cho từng thẻ card img
  const cardHeaders = document.querySelectorAll(".card__hd");
  // vòng lặp 
  cardHeaders.forEach(cardHeader => {
    const imgElement = cardHeader.querySelector(".card__img");
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("img__wrapper","mt-5");
    imgElement.parentNode.insertBefore(wrapperDiv, imgElement);
    wrapperDiv.appendChild(imgElement);
  })
  
});



  





