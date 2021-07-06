$(document).ready(function() {
    //Get carousel data
    $.get("https://smileschool-api.hbtn.info/quotes", function(data) {
        let carouselPerson1 = $("#carouselExampleControls .carousel-inner .carousel-item .container .row").eq(0);
        let carouselPerson2 = $("#carouselExampleControls .carousel-inner .carousel-item .container .row").eq(1);

        const contentPerson1 = 
        `<div class="align-self-center">
            <img class='rounded-circle img-fluid' width='150' height='150' src='${data[0].pic_url}' alt='profiles picture of testimonial'>
        </div>
        <div class="w-100 d-block d-md-none"></div>
        <div class="col col-md-6 align-self-center text-left pt-4 pt-md-2">
            <p class="testimonial__text">${data[0].text}</p>
            <p class="testimonial__name pt-4"><strong>${data[0].name}</strong><br><span class="font-italic">${data[0].title}</span></p>
        </div>`;

        const contentPerson2 = 
        `<div class="align-self-center">
            <img class="rounded-circle img-fluid" width="150" height="150" src='${data[1].pic_url}' alt="profiles picture of testimonial">
        </div>
        <div class="w-100 d-block d-md-none"></div>
        <div class="col col-md-6 align-self-center text-left pt-4 pt-md-2">
            <p class="testimonial__text">${data[1].text}</p>
            <p class="testimonial__name pt-4"><strong>${data[1].name}</strong><br><span class="font-italic">${data[1].title}</span></p>
        </div>`;

        const leftNavigationCarousel = 
        `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <img class="" width="30" height="60" src="images/arrow_white_left.png" alt="left arrow">
            <span class="sr-only">Previous</span>
        </a>`;

        const rightNavigationCarousel = 
        `<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <img width="30" height="60" src="images/arrow_white_right.png" alt="right arrow">
            <span class="sr-only">Next</span>
        </a>`;

        $("#carouselExampleControls").removeClass("loader");
        $(carouselPerson1).html(contentPerson1);
        $(carouselPerson2).html(contentPerson2);
        $("#carouselExampleControls").append(leftNavigationCarousel);
        $("#carouselExampleControls").append(rightNavigationCarousel);
    });

    
});