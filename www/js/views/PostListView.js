app.views.PostListView = Backbone.View.extend({
    
    tagname:'ul',
    
    attributes: {class: 'topcoat-list list'},
    
    initialize: function (){
        var self = this;
        this.model.on("reset", this.render, this);
        console.log("initialize postlistview...");
        this.model.on("add", function (post){
            self.$el.append(new app.views.PostListItemView({model:post}).render().el);
        });
    },
    
    render: function(){        
        this.$el.empty();
        //console.log(this.model.models);
        this.$el.html(this.template());
        var i = 1;
        _.each(this.model.models, function (post){
            console.log("render postlistview" + (i++) + "...");
            $('.scroller', this.el).append(new app.views.PostListItemView({model:post}).render().el);
        }, this);
        return this;
    }
});


app.views.PostListItemView = Backbone.View.extend({

    tagName:"li",

    className:"topcoat-list__item",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        console.log("render postlistitemview...");
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});