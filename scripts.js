$(document).ready(function() {
    function makeCard(data) {
        //Makes a card
        let starOn = "<img class='img-fluid star-size' src='images/star_on.png' alt='rate start on'>";
        let starOff = "<img class='img-fluid star-size' src='images/star_off.png' alt='rate start off'>";
        return (
        `<div class="card-deck col-md-6 col-xl-3">
            <div class="card mb-2">
                <div class="grid">
                    <img class="card-img-top grid-area" src="${data.thumb_url}" alt="Thumbnail 1" width="255" height="154">
                    <img class="play-img grid-area" src="images/play.png" alt="Play" width="64" height="64">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data["sub-title"]}</p>
                    <div class="card-text">
                        <img class="rounded-circle img-fluid" width="30" height="30" src="${data.author_pic_url}" alt="${data.author} profile picture">
                        <span class="team_word"><strong>${data.author}</strong></span> <br><br>
                    </div>
                    <div class="card-text">
                        <div class="row dflex justify-content-between">
                            <div class="col-8">
                                ${starOn.repeat(data.star) + starOff.repeat(5 - data.star)}
                            </div>
                            <div class="col-4 text-right align-self-center">
                                <span class="team_word">${data.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);     
    }

    //Make testimonial quotes carousel dynamic
    $.get("https://smileschool-api.hbtn.info/quotes", function(data) {
        let carousel = $("#carouselExampleControls .carousel-inner");

        $("#carouselExampleControls .carousel-inner").removeClass("loader");

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
    });

    //Make most popular tutorials dynamic. Each deck in carousel has up to 4 cards
    $.get("https://smileschool-api.hbtn.info/popular-tutorials", function(data) {
        let carouselCards = $("#tutorial__carousel .carousel-inner");
        let deckFourCards = 
        `<div class="carousel-item">
            <div class="row d-md-flex justify-content-center"></div>
        </div>`;

        $("#tutorial__carousel .carousel-inner").removeClass("loader");

        for(let i = 0; i < data.length; i++)
        {
            if(i % 4 == 0)
                $(carouselCards).append(deckFourCards);

            let currentDeck = $("#tutorial__carousel .row.d-md-flex.justify-content-center").last();
            let card = makeCard(data[i]);

            $(currentDeck).append(card);
        }

        $("#tutorial__carousel .carousel-inner .carousel-item").first().addClass("active");
    });

    //Make latest videos section dynamic. Each deck in carousel has up to 4 cards
    $.get("https://smileschool-api.hbtn.info/latest-videos", function(data) {
        let carouselVideos = $("#Latest-videos__carouse .carousel-inner");
        let deckFourVideos = 
        `<div class="carousel-item">
            <div class="row d-md-flex justify-content-center"></div>
        </div>`;

        $("#Latest-videos__carouse .carousel-inner").removeClass("loader");

        for(let i = 0; i < data.length; i++)
        {
            if(i % 4 == 0)
                $(carouselVideos).append(deckFourVideos);

            let currentVideoDeck = $("#Latest-videos__carouse .row.d-md-flex.justify-content-center").last();
            let card = makeCard(data[i]);

            $(currentVideoDeck).append(card);
        }

        $("#Latest-videos__carouse .carousel-inner .carousel-item").first().addClass("active");       
    });
    
    function queryCourses(searchWords, topicLevel, sortingType){
        $(".p-5 .container.opacity-35").next().empty();
        $('section[class="p-5"]').addClass("loader");

        $.get("https://smileschool-api.hbtn.info/courses", 
        {q: searchWords, topic: topicLevel, sort: sortingType.replace(' ','_')}, function(data) {
            
            $(".rounded-top").first().text(topicLevel);
            $(".rounded-top").last().text(sortingType);
    
            if($(".dropdown-menu").first().children().length == 0)
            {
                for(let i = 0; i < data.topics.length; i++)
                {
                    let topicName = data.topics[i].charAt(0).toUpperCase() + data.topics[i].slice(1);
                    let itemTopic = `<a class="dropdown-item" href="#">${topicName}</a>`;
                    $(".dropdown-menu").first().append(itemTopic);
                }
            }
    
            if($(".dropdown-menu").last().children().length == 0)
            {
                for(let i = 0; i < data.sorts.length; i++)
                {
                    let sortType = data.sorts[i].charAt(0).toUpperCase() + data.sorts[i].slice(1).replace('_',' ');
                    let itemSort = `<a class="dropdown-item" href="#">${sortType}</a>`;
                    $(".dropdown-menu").last().append(itemSort);
                }
            }

            $(".p-5.loader").removeClass("loader");
            $(".p-5 .container.opacity-35").text(data.courses.length + " videos");

            for(let i = 0; i < data.courses.length; i++)
            {
                let card = makeCard(data.courses[i]);

                $(".p-5 .container.opacity-35").next().append(card);
            }
        });
    }
    
    let searchParam = ["", "All", "Most popular"];

    queryCourses(searchParam[0], searchParam[1], searchParam[2]);

    $("input").change(function() {
        searchParam[0] = $("input").val();
        queryCourses(searchParam[0], searchParam[1], searchParam[2]);
    });

    $(".dropdown .dropdown-menu").first().on("click", "a", function() {
        searchParam[1] = $(this).text();
        queryCourses(searchParam[0], searchParam[1], searchParam[2]);
    });

    $(".dropdown .dropdown-menu").last().on("click", "a", function() {
        searchParam[2] = $(this).text();
        queryCourses(searchParam[0], searchParam[1], searchParam[2]);
    });
});