//Router

app.routers.AppRouter = Backbone.Router.extend({
    
    routes:{
        "":                 "home",
        "blog":             "blog",
        "images":           "images",
        "blog/:id":         "post",
        "quiz/:id":         "quiz",
        "drupal":           "drupal",
    },
    
    initialize: function () {
        app.slider = new PageSlider($('body'));
    },
        
    home: function(){
        console.log('Home...');
        if(!app.homeView){
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('Reusing HomeView...');
            app.homeView.delegateEvents();
        }        
        app.slider.slidePage(app.homeView.$el);  
    },
    
    blog: function(){
        console.log("blog...");
        var post = new app.models.PostsCollection();       
        post.fetch({
            success: function(data){
                console.log(data);
                app.slider.slidePage(new app.views.PostListView({model: data}).render().$el);
            }
        });
    },
    
    images: function(){
        console.log("images...");
        var image = new app.models.ImagesCollection();
        image.fetch({
            success: function(data){
                console.log(data);
                app.slider.slidePage(new app.views.ImageListView({model: data}).render().$el);
            }
        });
    },
    
    post: function(id){
        console.log("blog...");
        var post = new app.models.Post({id: id});        
        post.fetch({
            success: function(data){                
                app.slider.slidePage(new app.views.PostView({model: data}).render().$el);
            }
        });
    },
    
    quiz: function(id){
        console.log("quiz...");
        var quiz = new app.models.Quiz({id: id});      
        quiz.fetch({
            success: function(data){                
                app.slider.slidePage(new app.views.QuizView({model: data}).render().$el);
            }
        });
    },
    
    drupal: function(){
        console.log("drupal...");
        var drupal = new app.models.DrupalsCollection();       
        drupal.fetch({
            success: function(data){
                console.log(data);
                app.slider.slidePage(new app.views.PostListView({model: data}).render().$el);
            }
        });
    },
    
    
});