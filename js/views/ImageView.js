app.views.ImageView = Backbone.View.extend({
        
    render: function (){
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

app.views.ImageListView = Backbone.View.extend({
    
    tagname:'div',
    
    //attributes: {class: 'topcoat-list list'},
    
    initialize: function (){
        var self = this;
        this.model.on("reset", this.render, this);
        console.log("initialize postlistview...");
        this.model.on("add", function (image){
            self.$el.append(new app.views.ImagesListItemView({model:image}).render().el);
        });
    },
    
    render: function(){        
        this.$el.empty();        
        this.$el.html(this.template());
        var i = 1;
        _.each(this.model.models, function (image){
            console.log("render imagelistview" + (i++) + "...");
            $('.images-scroller', this.el).append(new app.views.ImageListItemView({model:image}).render().el);
        }, this);
        return this;
    }
});


app.views.ImageListItemView = Backbone.View.extend({

    tagName:"div",

    className:"box",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {        
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});