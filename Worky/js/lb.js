 // // Open the Modal
 // function openModal() {
 //     $('#modal').css('display', 'block');
 // }
 // // Close modal
 // $('.close').click(function() {
 //     $('#modal').css('display', 'none');
 // })

 // // Slide hiện tại
 // function currentSlide(n) {
 //     showSlides(slideIndex = n);
 // }
 // //Slide tiếp theo
 // $('.next').click(function() {
 //     showSlides(slideIndex += 1);
 // });
 // //Slide trước đó
 // $('.prev').click(function() {
 //     showSlides(slideIndex += -1);
 // })

 // var slideIndex = 1;
 // showSlides(slideIndex);

 // //Hiện slide
 // function showSlides(n) {
 //     var i;
 //     var slides = $('.slides');
 //     if (n > slides.length) {
 //         slideIndex = 1;
 //     }
 //     if (n < 1) {
 //         slideIndex = slides.length;
 //     }
 //     for (i = 0; i < slides.length; i++) {
 //         slides[i].style.display = "none";
 //     }
 //     slides[slideIndex - 1].style.display = "block";
 // }

 // $('.col-md-4:nth-child(1) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(1);
 // })
 // $('.col-md-4:nth-child(2) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(2);
 // })
 // $('.col-md-4:nth-child(3) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(3);
 // })
 // $('.col-md-4:nth-child(4) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(4);
 // })
 // $('.col-md-4:nth-child(5) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(5);
 // })
 // $('.col-md-4:nth-child(6) .image-wrapper').click(function() {
 //     openModal();
 //     currentSlide(6);
 // })

 // $(document).keyup(function(e) {
 //     var modal = document.getElementById("modal");
 //     if (e.keyCode === 27) {
 //         modal.style.display = "none";
 //     }
 //     if (e.keyCode === 37) {
 //         showSlides(slideIndex -= 1);
 //     }
 //     if (e.keyCode === 39) {
 //         showSlides(slideIndex += 1);
 //     }
 // });