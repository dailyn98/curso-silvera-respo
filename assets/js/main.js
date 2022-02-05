  //testimonial
 $('.testimonial-slider').owlCarousel({
  autoplayhoverpause: true,
  autoplaytimeout:100,
  items: 1,
  nav: false,
  loop: false,
  animateOut: 'fadeOut',
  video: true
});

//carousel 
 $('.productos-crousel').owlCarousel({
 	
 	autoplayhoverpause: true,
 	autoplaytimeout:100,
 	items: 2,
 	nav: false,
 	loop: true,
  animateOut: 'fadeOut',

 });

 const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    widget.style.display="none";
    post.style.display="block";
    editBtn.onclick = ()=>{
        widget.style.display="block";
        post.style.display="none";
    }
    return false;
}
window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});



