app.adapters.post = (function () {

    console.log("Loading memory adapter module for Posts");
       

    var findById = function (id) {
            console.log("findbyId: ");
            var deferred = $.Deferred(),                
                post = null,
                l = posts.length;

            for (var i = 0; i < l; i++) {
                if (posts[i].id === id) {
                    post = posts[i];
                    break;
                }
            }

            deferred.resolve(post);
            return deferred.promise();
        },
        
        findAll = function () {
             console.log("findAll: ");
            var deferred = $.Deferred(),
            results = posts;          
            
            deferred.resolve(results);
            console.log("los posts son: " + results);
            return deferred.promise();
        };
    

     posts = [{"id":1,"title":"Hola Mundo","text":"Hola Mundo con PhoneGap, Backbone y Topcoat!!!","img":"","quiz":"","video":""},
              
{"id":2,"title":"Sample Mobile / PhoneGap Application with Backbone.js and Topcoat","text":"In this post, I’m excited to share my first sample application built with Topcoat. Topcoat is a CSS library — a set of customizable styles for mobile components — that you can use to build polished, clean and fast mobile web apps. Topcoat has a desktop profile as well. Because Topcoat focuses exclusively on the UI layer and doesn’t overlap with the other layers of your application, you can build your application the way you want, with the framework you want, or no framework at all. Another thing that sets Topcoat apart, is that it’s built on the “Performance First” idea. You can take a look at the performance testing infrastructure here. In this post, I use Backbone.js as the architectural framework and Topcoat as the UI toolkit to build my Employee Directory reference application.","img":"graphic_build_bot.png","quiz":1,"video":""},
              
{"id":3,"title":"Bienvenido","text":"Bienvenido a la App de Intelego","img":"","quiz":"","video":"http://player.vimeo.com/video/44646679"},
              
{"id":4,"title":"Backbone","text":"Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.  The project is hosted on GitHub, and the annotated source code is available, as well as an online test suite, an example application, a list of tutorials and a long list of real-world projects that use Backbone. Backbone is available for use under the MIT software license. ","img":"backbone.png","quiz":"","video":"http://player.vimeo.com/video/39170960"}];

        // The public API
    return {
        findById: findById,
        findAll: findAll        
    };


}());


app.adapters.quiz = (function () {

    console.log("Loading memory adapter module for Quizes");
       

    var findById = function (id) {
            console.log("findbyId: ");
            var deferred = $.Deferred(),                
                quiz = null,
                l = quizes.length;

            for (var i = 0; i < l; i++) {
                if (quizes[i].id === id) {
                    quiz = quizes[i];
                    break;
                }
            }
            console.log(quiz);
            deferred.resolve(quiz);
            return deferred.promise();
        },
        
        findAll = function () {
             console.log("findAll: ");
            var deferred = $.Deferred(),
            results = quizes;          
            
            deferred.resolve(results);            
            return deferred.promise();
        };
    

quizes = [
	{"id":1,
	"quiz":{
				1:{
				"question":"¿Cuál es el motivo por el que se origina el Reaseguro?",
				"answers":	{
								1:"Para generar fondos de embarques",
								2:"Para recuperar las pérdidas de barcos que naufragaban.",
								3:"Para comprar barcos en China.",
								4:null								
							},
				"correct":2
				},
				2:{
				"question":"La primera organización moderna de aseguramiento protegía ante:",
				"answers":	{
								1:"Incendios",
								2:"Barcos que naufragaban",
								3:"Robo",
								4:null								
							},
				"correct":1
				},
				3:{
				"question":"¿En qué país de Europa surgió el reaseguramiento moderno a gran escala?",
				"answers":	{
								1:"China",
								2:"Alemania",
								3:"España",
								4:null								
							},
				"correct":2
				}
			
	}
}];

        // The public API
    return {
        findById: findById,
        findAll: findAll        
    };


}());



app.adapters.image = (function () {

    console.log("Loading memory adapter module for Images");
       

    var findById = function (id) {
            console.log("image findbyId: ");
            var deferred = $.Deferred(),                
                quiz = null,
                l = images.length;

            for (var i = 0; i < l; i++) {
                if (images[i].id === id) {
                    image = images[i];
                    break;
                }
            }
            console.log(image);
            deferred.resolve(image);
            return deferred.promise();
        },
        
        findAll = function () {
            console.log("images findAll: ");
            var deferred = $.Deferred(),
            results = images;          
            
            deferred.resolve(results);            
            return deferred.promise();
        };
    

    images = [{"id":1,"filename":"flower001.jpg","tag":"flowers"},
                {"id":2,"filename":"flower002.jpg","tag":"flowers"},
                {"id":3,"filename":"flower003.jpg","tag":"flowers"},
                {"id":4,"filename":"flower004.jpg","tag":"flowers"},
                {"id":5,"filename":"flower005.jpg","tag":"flowers"},
                {"id":6,"filename":"flower006.jpg","tag":"flowers"},
                {"id":7,"filename":"flower007.jpg","tag":"flowers"},
                {"id":8,"filename":"flower008.jpg","tag":"flowers"},
                {"id":10,"filename":"flower010.jpg","tag":"flowers"},
                {"id":11,"filename":"flower011.jpg","tag":"flowers"},
                {"id":12,"filename":"flower012.jpg","tag":"flowers"},
                {"id":13,"filename":"flower013.jpg","tag":"flowers"},
                {"id":14,"filename":"flower014.jpg","tag":"flowers"},
                {"id":15,"filename":"flower015.jpg","tag":"flowers"},
                {"id":16,"filename":"flower016.jpg","tag":"flowers"},
                {"id":17,"filename":"flower017.jpg","tag":"flowers"},
                {"id":18,"filename":"001.jpg","tag":"geek"},
                {"id":19,"filename":"002.gif","tag":"geek"},
                {"id":20,"filename":"003.png","tag":"geek"},
                {"id":21,"filename":"004.png","tag":"geek"},
                {"id":22,"filename":"005.jpg","tag":"geek"},
                {"id":23,"filename":"006.png","tag":"geek"},
                {"id":24,"filename":"007.jpg","tag":"geek"},
                {"id":25,"filename":"008.jpg","tag":"geek"},
                {"id":26,"filename":"009.jpg","tag":"geek"},
                {"id":27,"filename":"010.jpg","tag":"geek"},
                {"id":28,"filename":"011.jpg","tag":"geek"},
                {"id":29,"filename":"011.png","tag":"geek"},
                {"id":30,"filename":"012.png","tag":"geek"},
                {"id":31,"filename":"013.jpg","tag":"geek"},
                {"id":32,"filename":"014.jpg","tag":"geek"},
                {"id":33,"filename":"015.png","tag":"geek"}];

        // The public API
    return {
        findById: findById,
        findAll: findAll        
    };


}());