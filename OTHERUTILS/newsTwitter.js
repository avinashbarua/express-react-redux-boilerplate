/*var MongoClient = require('mongodb').MongoClient, test = require('assert');
// Connection url
var url = 'mongodb://geekodour:geekz@ds029436.mlab.com:29436/newshub';
// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
    var poop = db.collection('poop');
    var p = poop.find({}).toArray(function(err,items){
        console.log(items);
    });
    db.close();
});
*/
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key:         'MwKvY5bfK7qRoHHKiFrFItS3P',
  consumer_secret:      'V7QeqYUPOqqkdMfdUJLqOHMxQFvFqR91JJROPJq1j28O12XPVb',
  access_token_key:     '1513607755-3MWvh70AgeOXj1LCpWifGdX254EhD4AermoW8Pt',
  access_token_secret:  'MQyCFs9YNSHCT2V4GTGwhFi0swoC1dVqYKVFvJEkGN1cL',
});
 

var getHashTweets = function(){
    return new Promise(function(resolve,reject){
      client.get('trends/place', {id:1}, function(error, tweets, response) {
        if (error) {
          reject(error);
        }
        else {
         var hashtags = tweets[0].trends
                    .filter(function(hashtag){return hashtag.name[0] == "#"})
                    .map(function(hashtag, index){
                         return {name: hashtag.name, 
                         tweet_volume: hashtag.tweet_volume,
                         toggle: false,
                         id: index,
                         tweets: []}
                    }); 
          resolve(hashtags);
        }
      });
    }); // end of reurn new
};

var getTweets =  function(hashtags){
    var arrayOftags = hashtags.map(function(hashtag){
      return new Promise(function(resolve,reject){
        client.get('search/tweets', {q:hashtag.name,count:5}, function(error, tweets, response) {
          if (error) { reject(error); }
          else {
            var tweetsOfusers = tweets.statuses
                                          .map(function(tweet){return {id: tweet.id,
                                                                      text: tweet.text,
                                                                      user: tweet.user.screen_name}});
            hashtag.tweets = tweetsOfusers;
            console.log(hashtag.name);
            resolve(hashtag); 
          }
        });
      }); // end of return promise
    });
    return Promise.all(arrayOftags);
};

/*getHashTweets().then(getTweets).then(function(array){
    console.log(array);
});*/

getHashTweets().then(getTweets).then(function(array){
    console.log("======================^^^%%%%%%^^^^^^=====================");
    console.log(array);
});


