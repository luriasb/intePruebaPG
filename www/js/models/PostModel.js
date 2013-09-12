app.models.Post = Backbone.Model.extend({
    
    initialize: function(){
        this.posts = new app.models.PostsCollection();
        console.log("posts: " + this.posts);
        this.posts.parent = this;
    },
    
    sync: function(method, model, options){
        if (method === "read"){
            app.adapters.post.findById(parseInt(this.id)).done(function (data){
                options.success(data);
            });
        }
    }
    
});

app.models.PostsCollection = Backbone.Collection.extend({

    model: app.models.Post,
    
    sync: function(method, model, options) {
        console.log("");
        if(method === "read"){
            app.adapters.post.findAll().done(function (data){
                console.log("data: " + data);
                options.success(data);
            });
        }
    }    
});
