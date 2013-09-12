app.models.Drupal = Backbone.Model.extend({
    
    initialize: function(){
        
        this.drupals = new app.models.DrupalsCollection();
        this.drupals.parent = this;      
    },
    
    sync: function(method, model, options){
        if(method === "read"){
            app.adapters.drupals.findById(parseInt(this.id)).done(function (data){
                options.success(data);
            })
        }
            
    }
    
});

app.models.DrupalsCollection = Backbone.Collection.extend({
    
    model: app.models.Drupal,
    
    initialize: function(){
        this.drupalsAdapter = new app.adapters.DrupalsAdapter();
        this.drupalsAdapter.initialize().done(function(){
            console.log("Drupals adapter initialized");
        });
    },
    
    sync: function(method, model, options){
        if(method === 'read'){
            this.drupalsAdapter.findById(1).done(function (data){
                console.log("Los drupals son: " + data);
                options.success(data);
            })
        }
    }
    
});