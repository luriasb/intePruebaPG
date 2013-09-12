app.models.Image = Backbone.Model.extend({
    
    initialize: function(){
        this.images = new app.models.ImagesCollection();
        this.images.parent = this;
    },
        
    sync: function(method, model, options){
        if (method === "read"){
            app.adapters.image.findById(parseInt(this.id)).done(function (data){
                options.success(data);
            });
        }
    }    
});



app.models.ImagesCollection = Backbone.Collection.extend({

    model: app.models.Image,
    
    sync: function(method, model, options) {
        console.log("");
        if(method === "read"){
            app.adapters.image.findAll().done(function (data){
                console.log("data: " + data);
                options.success(data);
            });
        }
    }    
});
