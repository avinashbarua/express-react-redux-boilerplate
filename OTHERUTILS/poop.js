var Twitter = require('twitter');
 
/*var client = new Twitter({
  consumer_key:         'MwKvY5bfK7qRoHHKiFrFItS3P',
  consumer_secret:      'V7QeqYUPOqqkdMfdUJLqOHMxQFvFqR91JJROPJq1j28O12XPVb',
  access_token_key:     '1513607755-3MWvh70AgeOXj1LCpWifGdX254EhD4AermoW8Pt',
  access_token_secret:  'MQyCFs9YNSHCT2V4GTGwhFi0swoC1dVqYKVFvJEkGN1cL',
});*/

var client = new Twitter({
  consumer_key:         'JOvs596wvVfv7h3OFwcy9baSe',
  consumer_secret:      'o5Gbzeth6MkwN7oTP5DEIfZSpUCqn9hgPOdDSAZUvEBQJP63Ep',
  access_token_key:     '431502880-FIaCYNzCuZ5v0zObvk41TCoDixiz2ViypeqYSflM',
  access_token_secret:  'NnEfoXR3ldkE4zSQdViPoq7pJB8qAusrCz7JaiU93ATC1',
});

 

//var params = {slug:'news',owner_screen_name:'normalalienf',count:'100'};
var params = {id:"1"};
var getHashTweets = function(){
    /*client.get('lists/statuses', params, function(error, tweets, response) {
      if (!error) {
        tweets.forEach(function(tweet){
            console.log("==================================\n");
            console.log(tweet.text+"\n");
            console.log(tweet.entities.media);
        });
      }
    });*/

    /*client.get('trends/place', params, function(error, tweets, response) {
         if (!error) {
           var hashtags = tweets[0].trends
                      .filter(function(hashtag){return hashtag.name[0] == "#"})
                      .map(function(hashtag, index){
                           return {name: hashtag.name, 
                           tweet_volume: hashtag.tweet_volume,
                           toggle: false,
                           id: index,
                           tweets: []}
                      }); 
            console.log(hashtags);
        }
    });*/

/*    var query  = "nycexplosion filter:news";
    client.get('search/tweets', {q:query,count:10,lang:"en",result_type:"popular"}, function(error, tweets, response) {
      if (!error) {
        console.log(tweets.statuses);
      }
    });*/

    var Q = "nycexplosion filter:media filter:news";
    client.get('search/tweets', {q:Q,count:1}, function(error, tweets, response) {
      if (!error) {
        console.log("**********************|||||||||***************************");
        tweets.statuses.forEach(function(tweet){
            console.log(tweet.entities.media);
        });
      }
    });
};

getHashTweets();
