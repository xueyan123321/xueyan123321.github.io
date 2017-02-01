
function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var street=$('#street').val();
    var city=$('#city').val();
    var srcimg="http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+street+", "+city;
    // console.log(srcimg);
    $('body').append('<img/>');
    $('img').attr("class","bgimg");
    $('img').attr("src",srcimg);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'q':city,
  'api-key': "cd0da0842d9741ce921482915f1c9ce9",
  'sort':"newest"
});
    $.getJSON(url,function(data){
        $('#nytimes-header').text("New Yorks Times Articles about "+city);
        var articles=data.response.docs;
        articles.forEach(function(element){
            $('#nytimes-articles').append('<li class="article">'+'<a href="'+element.web_url+'">'+
                element.headline.main+'</a>'+'<p>'+element.snippet+'</p>'+'</li>');
        })
        // console.log(data);
    }).error(function(){
            $('#nytimes-header').text("New Yorks Times doesn't work.");
        })
    var urlWeki="https://en.wikipedia.org/w/api.php";
    urlWeki=urlWeki+"?"+$.param({
        'action':'opensearch',
        'search':city,
        'format':'json'
    });
    console.log(urlWeki);

    var wikiRequestTimeout=setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    },8000);

    $.ajax(urlWeki,{
        'dataType':'jsonp',
        'success':function(data){
            console.log(data);
            var articleList=data[1];
            articleList.forEach(function(element){
                $('#wikipedia-links').append("<li><a href='https://en.wikipedia.org/wiki/"+
                    element+"'>"+element+"</a></li>"
                    );
            });

            clearTimeout(wikiRequestTimeout);
        }

    });

    return false;
};

$('#form-container').submit(loadData);
