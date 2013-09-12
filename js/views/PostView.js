app.views.PostView = Backbone.View.extend({
        
    render: function(){
        console.log("render Postview...");
        this.$el.html(this.template(this.model.attributes));
        //$('.scroller', this.el).append(this.allPostsView.render().el);
        return this;
    },
    
    events: {
        "click .back-button": "back"
    },
    
    back: function(event){
        window.history.back();
        return false;
    }
    
});