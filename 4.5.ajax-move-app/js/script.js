
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // calculate window size
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    $greeting.text('So, you want to live at ' + address + ' ?');

    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=' + windowHeight + 'x' + windowWidth + '&location='+ address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // load New York Times articles
    var nytUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&api-key=5dbedb316582e88e56dd3473730853f1:14:74600727' + '';
    $.getJSON(nytUrl, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + city + '');

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href = "' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
        };
    }).error(function(){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    // load wikipedia pages
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json';

    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("Failed To Get Wikipedia Resources");
    }, 8000);

    $.ajax({
        url : wikiUrl,
        dataType : 'jsonp',
        success : function( response ) {
            var articleList = response[1];
            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var wikiArticleUrl = 'https://en.wikipedia.org/wiki/' + articleStr + '';
                $wikiElem.append('<li><a href="' + wikiArticleUrl + '">' + articleStr + '</a></li>');
            };
            clearTimeout(wikiRequestTimeout);
        }
    });


    return false;
};

$('#form-container').submit(loadData);
