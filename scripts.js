$(document).ready(function() {
    //Make carousel dynamic
    $.get("https://smileschool-api.hbtn.info/quotes", function(data) {
        let carousel = $("#carouselExampleControls .carousel-inner");

        $("#carouselExampleControls").removeClass("loader");

        for(let i = 0; i < data.length; i++)
        {
            let personCarousel = 
            `<div class="carousel-item">
                <div class="container">
                    <div class="row py-4 d-flex justify-content-center">
                        <div class="align-self-center">
                            <img class='rounded-circle img-fluid' width='150' height='150' src='${data[i].pic_url}' alt='profiles picture of testimonial'>
                        </div>
                        <div class="w-100 d-block d-md-none"></div>
                        <div class="col col-md-6 align-self-center text-left pt-4 pt-md-2">
                            <p class="testimonial__text">${data[i].text}</p>
                            <p class="testimonial__name pt-4"><strong>${data[i].name}</strong><br><span class="font-italic">${data[i].title}</span></p>
                        </div>
                    </div>
                </div>
            </div>`;

            $(carousel).append(personCarousel);
        }

        $("#carouselExampleControls .carousel-inner .carousel-item").eq(0).addClass("active");

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

        $("#carouselExampleControls").append(leftNavigationCarousel);
        $("#carouselExampleControls").append(rightNavigationCarousel);
    });

    //Make video cards dynamic
    $.get("https://smileschool-api.hbtn.info/latest-videos", function(data) {    
    });
});