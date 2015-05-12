
var express = require('express');
var bodyParser = require('body-parser')
var request = require("request");
var connect = require('connect')
var http = require('http')
var request = require("request");
var Parse = require('parse').Parse;
Parse.initialize("dSMMZyBYFJCHyBsg6T4QZUj1Mta0enLbwE0iRj1R", "UF6lsnickYkZYdrizLB8vIBCfZsMqx4b0fd1BQGN");
var app = express();
var app2 = connect();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



var allowCrossDomain = function(req, res, next) {
  // Added other domains you want the server to give access to
  // WARNING - Be careful with what origins you give access to
  var allowedHost = [
    'localhost:5000/'
  ];
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', req.headers.origin)
	res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
	next();
}

app.use(allowCrossDomain);

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('HEKJKalksdfj;ladjksf');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

app.post('/save/c194', function(request, response) {
	console.log(request.body.email);

});


/*
var userexample = Parse.Object.extend("ExampleUser");
var usertest = new userexample();
usertest.set("email", "ja@princeton.edu");
usertest.set("username", "ja@princeton.edu");
usertest.set("password", "yourmom")
usertest.save(null, {
	success: function(usertest) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + usertest.id);
  	},
  error: function(usertest, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});
*/

/* Testing Getting File Via HTTP requests */

var news ={
	"www.wsj.com/xml/rss/3_7041.xml":["WSJ","Opinion"],
	"www.wsj.com/xml/rss/3_7085.xml":["WSJ","World" ],
	"www.wsj.com/xml/rss/3_7432.xml":["WSJ", "World"],
	"www.wsj.com/xml/rss/3_7014.xml":["WSJ", "US" ],
	"www.wsj.com/xml/rss/3_8068.xml":["WSJ", "US"],
	"www.wsj.com/xml/rss/3_7455.xml":["WSJ","Science" ],
	"www.wsj.com/xml/rss/3_7201.xml":["WSJ", "Lifestyle"],
	"www.wsj.com/xml/rss/3_7031.xml":["WSJ", "Top"],
	"www.wsj.com/xml/rss/3_7087.xml":["WSJ", "Politics"],
	"www.wsj.com/xml/rss/3_7089.xml":["WSJ", "Health"],
	"www.wsj.com/xml/rss/3_7177.xml":["WSJ", "Arts"],
	"www.wsj.com/xml/rss/3_7204.xml":["WSJ", "Sports"],
	"www.wsj.com/xml/rss/3_7014.xml":["WSJ", "Economics"],

	"www.businessinsider.in/rss_section_feeds/21807543.cms":["BI","Science" ],
	"www.businessinsider.in/rss_section_feeds/21807169.cms":["BI","Economics" ],
	"www.businessinsider.in/rss_section_feeds/21806995.cms":["BI", "Politics" ],
	"www.businessinsider.in/rss_section_feeds/21803972.cms":["BI","Lifestyle" ],
	"www.businessinsider.in/rss_section_feeds/21806366.cms":["BI","Arts" ],
	"www.businessinsider.in/rss_tag_section_feeds.cms?query=health": ["BI", "Health"],

	"sports.espn.go.com/espn/rss/news":["ESPN","Sports"],

	"rss.cnn.com/rss/cnn_topstories.rss":["CNN","Top" ],
	"rss.cnn.com/rss/cnn_world.rss":["CNN","World"],
	"rss.cnn.com/rss/cnn_us.rss":["CNN","US"],
	"rss.cnn.com/rss/money_latest.rss":["CNN","Economics"],
	"rss.cnn.com/rss/cnn_allpolitics.rss":["CNN","Politics"],
	"rss.cnn.com/rss/cnn_tech.rss": ["CNN","Science"],
	"rss.cnn.com/rss/cnn_health.rss":["CNN", "Health" ],
	"rss.cnn.com/rss/cnn_showbiz.rss":["CNN", "Arts" ],
	"rss.cnn.com/rss/cnn_living.rss":["CNN", "Lifestyle"],

	 "www.nytimes.com/services/xml/rss/nyt/World.xml":["NYT","World"],
	"www.nytimes.com/services/xml/rss/nyt/US.xml":["NYT","US" ],
	 "www.nytimes.com/services/xml/rss/nyt/Science.xml":["NYT" , "Science"],
	"www.nytimes.com/services/xml/rss/nyt/Arts.xml":["NYT","Arts" ],
	 "www.nytimes.com/services/xml/rss/nyt/Sports.xml":["NYT", "Sports"],
	"www.nytimes.com/services/xml/rss/nyt/Opinion.xml":["NYT", "Opinion"],
	"www.nytimes.com/services/xml/rss/nyt/Health.xml": ["NYT", "Health" ],
	"www.nytimes.com/services/xml/rss/nyt/Politics.xml":["NYT" ,"Politics" ],
	"rss.nytimes.com/services/xml/rss/nyt/Business.xml":["NYT", "Economics"],       
	"rss.nytimes.com/services/xml/rss/nyt/Travel.xml":["NYT", "Lifestyle"],
	"rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml":["NYT", "Opinion"],

	"feeds.bbci.co.uk/news/world/rss.xml":["BBC","World"],
	"feeds.bbci.co.uk/news/business/rss.xml":["BBC","Economics"],
	"feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml":["BBC","Arts" ],
	"feeds.bbci.co.uk/news/technology/rss.xml":["BBC","Science"  ],
	"feeds.bbci.co.uk/news/health/rss.xml":["BBC","Health" ],
	"feeds.bbci.co.uk/sport/rss.xml": ["BBC", "Sports"],
	"feeds.bbci.co.uk/news/politics/rss.xml": ["BBC", "Politics"],
	"feeds.bbci.co.uk/news/rss.xml": ["BBC", "Top"],

	"www.ft.com/rss/world":["FT", "World"],
	"www.ft.com/rss/markets":["FT", "Top"],
	"www.ft.com/rss/world/americas" : ["FT", "US"],
	"www.ft.com/rss/markets/us": ["FT", "US"],
	"www.ft.com/rss/companies/technology":["FT", "Science"],
	"www.ft.com/rss/global-economy/uk": ["FT", "Economics"],
	"www.ft.com/rss/lex": ["FT", "Economics"],
	"www.ft.com/rss/companies/travel-leisure": ["FT", "Lifestyle"],
	"www.ft.com/rss/companies/health": ["FT", "Health"],
	"www.ft.com/rss/world/americas/politics": ["FT", "Politics"],
	"www.ft.com/rss/comment/opinion": ["FT", "Opinion"]



};
//callForData(news)

callForData(news)
/*
setInterval(function(){
	callForData(news)}, 1800000);*/


/*
setInterval(function(){
	deleteOldArticles();
}, 6000*5); */


/*
var intervalFunctions = [ deleteOldArticles, callForData];
var intervalIndex = 0;
setInterval(function(){
	if(intervalIndex == 1) {
  			intervalFunctions[intervalIndex++ % intervalFunctions.length](news);
  	}
  	else {
  		intervalFunctions[intervalIndex++ % intervalFunctions.length]();
  	}
}, 6000);*/

//setInterval(function(){ deleteOldArticles(); callForData(news) }, intervalAdd);
//setInterval(function(){ deleteOldArticles(intervalDestroy - intervalAdd)}, intervalDestroy);

function callForData(news) {
	for(var key in news) {
		var requestUrl = encodeURIComponent(key);
		var site = news[key][0];
		var type = news[key][1];
		getdata(requestUrl, type, site);
	}
	console.log("saved Data");
	/*var requestUrl2 = encodeURIComponent("feeds.bbci.co.uk/news/rss.xml");
	var requestUrl3 = encodeURIComponent("rss.nytimes.com/services/xml/rss/nyt/Technology.xml")*/
	
}





function getdata(requestUrl, type, site) {
	var baseUrlFeed = "http://webscraper.eu1.frbit.net/makefulltextfeed.php?url="
	console.log(requestUrl);
	var url = baseUrlFeed + requestUrl + "&max=5&links=footnotes&exc=1&summary=1&format=json";
	//console.log(url);
	request({
		uri: url,
		method: "GET",
		followRedirect: true,
  		maxRedirects: 10
	}, function(error, response, body) {

		//console.log(error);
		//console.log(response);
		var items = JSON.parse(response.body);
		var newsPage = items.rss.channel.title
		//console.log(newsPage);
		var content = items.rss.channel.item;
		if(!content) {
			console.log("error in fetching, move on"); 
			return -1; 
		}
		var articletitle = new Array(content.length); 
		var links = new Array(content.length);
		var description = new Array(content.length); 
		var contents = new Array(content.length);
		for(i=0; i< content.length; i++) {
			articletitle[i] = content[i].title;
			links[i] = content[i].link;
			description[i] = content[i].description;
			contents[i] = content[i].content_encoded;

		}
		var article_feed = {
			source : newsPage,
			titles : articletitle,
			descriptions : description,
			bodies : contents,
			type : type,
			site : site,
			links : links,
			length : content.length
		 };
		 //console.log(article_feed.links);
		 saveArticles(article_feed);
	});

}

function saveArticles(article_feed) {
	var Article = Parse.Object.extend("Article");

	for(i = 0; i < article_feed.length; i++) {
		//console.log(article_feed.descriptions[i]);
		if(article_feed.descriptions[i].length > 7) {
			addArticle(article_feed.source, article_feed.type, article_feed.site, article_feed.titles[i],
			 article_feed.descriptions[i], article_feed.bodies[i], article_feed.links[i]);
		}
		else {
			continue;
		}
		
		
	}

}


function addArticle(source, type, site, title, description, body, link) {
	var Article = Parse.Object.extend("Article");
	var query = new Parse.Query("Article");
	query.equalTo("title", title);
	query.count({
      success: function(count) {
      	console.log(count);
      	if(count == 0) {
      		var article = new Article();
			article.set("source", source);
			article.set("type", type);
			article.set("site", site);
			article.set("title", title)
			article.set("description", description);
			article.set("body", body);
			article.set("link", link);
			article.save(null, {
				success: function(article) {
					console.log("saved with id: " + article.id)
					console.log(article.get("site") + article.get("type"));;;
				},
				error: function(article, error){

					console.log("error with message " + error.message);
				}

		 	});
      	}
      	else{
      		console.log("skipped");
      	}
      },
      error: function(error) {
        console.log("Could not execute count query, skipping");
  
      }
    });

}

function deleteOldArticles( ) {
	var ts = Math.round(new Date().getTime() / 1000);
	var nd = ts - 12000/1000;
	/*var tsYesterday = ts - (24 * 3600);
	var dateYesterday = new Date(tsYesterday*1000);
	console.log(dateYesterday);*/
	var dateYesterday = new Date(1000*nd);
	var query = new Parse.Query("Article");
	query.limit(10000);
	query.lessThan("createdAt", dateYesterday);
	query.find({
	    success: function(result) {
	    	console.log(result.length);
	        for(var i=0; i<result.length; i++) {
	            result[i].destroy({
	                success: function(object) {
	                    console.log("Delete job completed");
	                    
	                },
	                error: function(object, error) {
	                    console.log("Delete error :" + error);
	                    
	                }
	            });
	        }
	        console.log("Delete job completed");
	    },
	    error: function(error) {
	        console.log("Error in delete query error: " + error);
	        
	    }
	});

}