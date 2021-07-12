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

    //Make latest videos section dynamic. Each deck in carousel has up to 4 cards
    $.get("https://smileschool-api.hbtn.info/latest-videos", function(data) {
        let carouselVideos = $("#Latest-videos__carouse .carousel-inner");
        let deckFourVideos = 
        `<div class="carousel-item">
            <div class="row d-md-flex justify-content-center"></div>
        </div>`;

        $("#Latest-videos__carouse").removeClass("loader");

        for(let i = 0; i < data.length; i++)
        {
            if(i % 4 == 0)
                $(carouselVideos).append(deckFourVideos);

            let currentVideoDeck = $("#Latest-videos__carouse .row.d-md-flex.justify-content-center").last();
            let videoCard = 
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

            $(currentVideoDeck).append(videoCard);

            for(let j = 0; j < data[i].star; j++)
                $("#Latest-videos__carouse .col-8").last().append("<img class='img-fluid star-size' src='images/star_on.png' alt='rate start on'>");

            for(let j = 5; j > data[i].star; j--)
                $("#Latest-videos__carouse .col-8").last().append("<img class='img-fluid star-size' src='images/star_off.png' alt='rate start off'>");
        }

        $("#Latest-videos__carouse .carousel-inner .carousel-item").first().addClass("active");

        let leftNavigationVideos = 
        `<a class="carousel-control-prev" href="#Latest-videos__carouse" role="button" data-slide="prev">
            <img src="images/arrow_black_left.png" width="30" height="60" alt="tutorial arrow left">
            <span class="sr-only">Previous</span>
        </a>`;

        let rightNavigationVideos = 
        `<a class="carousel-control-next" href="#Latest-videos__carouse" role="button" data-slide="next">
            <img src="images/arrow_black_right.png" width="30" height="60" alt="tutorial arrow right">
            <span class="sr-only">Next</span>
        </a>`;

        $("#Latest-videos__carouse").append(leftNavigationVideos, rightNavigationVideos);        
    });

    //Make courses page dynamic
    function showSearchResults(searchWords, topicLevel, sortingType){
        $(".p-5 .row").empty();
        $(".p-5").addClass("loader");

        $.get("https://smileschool-api.hbtn.info/courses", function(data) {

            if(searchWords === "")
                $("input").val(data.q);
            
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

            let listResults = [];

            if(searchWords === "")
                listResults = data.courses;
            else
                listResults = data.courses.filter(keywd => keywd.keywords.includes(searchWords.charAt(0).toUpperCase() + searchWords.slice(1).toLowerCase()));

            if(topicLevel !== "All")
                listResults = listResults.filter(course => course.topic === topicLevel);

            if(sortingType === "Most popular")
            {
                listResults = listResults.sort(function(a, b) {
                    if(a.star > b.star)
                        return -1;
                });
            }
            else if (sortingType === "Most recent")
            {
                listResults = listResults.sort(function(a, b) {
                    if(a.published_at < b.published_at)
                        return -1;
                });
            }
            else 
            {
                listResults = listResults.sort(function(a, b) {
                    if(a.views > b.views)
                        return -1;
                });
            }

            $(".p-5").removeClass("loader");
            $(".p-5 .container.opacity-35").text(listResults.length + " videos");

            for(let i = 0; i < listResults.length; i++)
            {
                let resultsSearch =
                `<div class="card-deck col-md-6 col-xl-3">
                    <div class="card mb-2">
                        <div class="grid">
                            <img class="card-img-top grid-area" src="${listResults[i].thumb_url}" alt="Thumbnail 1" width="255" height="154">
                            <img class="play-img grid-area" src="images/play.png" alt="Play" width="64" height="64">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${listResults[i].title}</h5>
                            <p class="card-text">${listResults[i]["sub-title"]}</p>
                            <div class="card-text">
                                <img class="rounded-circle img-fluid" width="30" height="30" src="${listResults[i].author_pic_url}" alt="${listResults[i].author} profile picture">
                                <span class="team_word"><strong>${listResults[i].author}</strong></span> <br><br>
                            </div>
                            <div class="card-text">
                                <div class="row dflex justify-content-between">
                                    <div class="col-8"></div>
                                    <div class="col-4 text-right align-self-center">
                                        <span class="team_word">${listResults[i].duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

                $(".p-5 .row").first().append(resultsSearch);

                for(let j = 0; j < listResults[i].star; j++)
                    $(".col-8").last().append("<img class='img-fluid star-size' src='images/star_on.png' alt='rate start on'>");

                for(let j = 5; j > listResults[i].star; j--)
                    $(".col-8").last().append("<img class='img-fluid star-size' src='images/star_off.png' alt='rate start off'>");
                }
        });
    }
    
    let searchParam = ["", "All", "Most popular"];

    showSearchResults(searchParam[0], searchParam[1], searchParam[2]);

    $("input").change(function() {
        searchParam[0] = $("input").val();
        showSearchResults(searchParam[0], searchParam[1], searchParam[2]);
    });

    $(".dropdown .dropdown-menu").first().on("click", "a", function() {
        searchParam[1] = $(this).text();
        showSearchResults(searchParam[0], searchParam[1], searchParam[2]);
    });

    $(".dropdown .dropdown-menu").last().on("click", "a", function() {
        searchParam[2] = $(this).text();
        showSearchResults(searchParam[0], searchParam[1], searchParam[2]);
    });
});