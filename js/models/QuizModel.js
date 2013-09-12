app.models.Quiz = Backbone.Model.extend({
    
        
    sync: function(method, model, options){
        if (method === "read"){
            app.adapters.quiz.findById(parseInt(this.id)).done(function (data){
                options.success(data);
            });
        }
    }    
});
