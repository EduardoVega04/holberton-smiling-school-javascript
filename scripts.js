$(document).ready(function() {
    //Make testimonial quotes carousel dynamic
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

        $("#carouselExampleControls .carousel-inner .carousel-item").first().addClass("active");

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

        $("#carouselExampleControls").append(leftNavigationCarousel, rightNavigationCarousel);
    });

    //Make most popular tutorials dynamic. Each deck in carousel has up to 4 cards
    $.get("https://smileschool-api.hbtn.info/popular-tutorials", function(data) {
        let carouselCards = $("#tutorial__carousel .carousel-inner");
        let deckFourCards = 
        `<div class="carousel-item">
            <div class="row d-md-flex justify-content-center"></div>
        </div>`;

        $("#tutorial__carousel").removeClass("loader");

        for(let i = 0; i < data.length; i++)
        {
            if(i % 4 == 0)
                $(carouselCards).append(deckFourCards);

            let currentDeck = $("#tutorial__carousel .row.d-md-flex.justify-content-center").last();
            let card = 
            `<div class="card-deck col-md-6 col-xl-3">
                <div class="card mb-2">
                    <div class="grid">
                        <img class="card-img-top grid-area" src="${data[i].thumb_url}" alt="Thumbnail 1" width="255" height="154">
                        <img class="play-img grid-area" src="images/play.png" alt="Play" width="64" height="64">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">${data[i]["sub-title"]}</p>
                        <div class="card-text">
                            <img class="rounded-circle img-fluid" width="30" height="30" src="${data[i].author_pic_url}" alt="${data[i].author} profile picture">
                            <span class="team_word"><strong>${data[i].author}</strong></span> <br><br>
                        </div>
                        <div class="card-text">
                            <div class="row dflex justify-content-between">
                                <div class="col-8"></div>
                                <div class="col-4 text-right align-self-center">
                                    <span class="team_word">${data[i].duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            $(currentDeck).append(card);

            for(let j = 0; j < data[i].star; j++)
                $("#tutorial__carousel .col-8").last().append("<img class='img-fluid star-size' src='images/star_on.png' alt='rate start on'>");

            for(let j = 5; j > data[i].star; j--)
                $("#tutorial__carousel .col-8").last().append("<img class='img-fluid star-size' src='images/star_off.png' alt='rate start off'>");
        }

        $("#tutorial__carousel .carousel-inner .carousel-item").first().addClass("active");

        let letfNavigationTutorials = 
        `<a class="carousel-control-prev" href="#tutorial__carousel" role="button" data-slide="prev">
            <img src="images/arrow_black_left.png" width="30" height="60" alt="tutorial arrow left">
            <span class="sr-only">Previous</span>
        </a>`;

        let rightNavigationTutorials = 
        `<a class="carousel-control-next" href="#tutorial__carousel" role="button" data-slide="next">
            <img src="images/arrow_black_right.png" width="30" height="60" alt="tutorial arrow right">
            <span class="sr-only">Next</span>
        </a>`;

        $("#tutorial__carousel").append(letfNavigationTutorials, rightNavigationTutorials);
    });
});