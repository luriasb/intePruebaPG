app.views.QuizView = Backbone.View.extend({
    
    render: function(){
        console.log("render QuizView..."  );
        console.log(this.model  );
        this.$el.html(this.template());
        $('.scroller', this.el).append(new app.views.QuizListView({model:this.model}).render().el);
        //console.log(this.$el.html());
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


app.views.QuizListView = Backbone.View.extend({
    
    tagname:'ul',
    
    attributes: {class: 'topcoat-list list '}, 
    
    initialize: function (){
        var self = this;
        console.log(this.model  );                        
    },
    
    render: function(){        
        this.$el.empty();              
        var i = 1;
        _.each(this.model.attributes.quiz, function (quizes){
            console.log("render QuizListView" + (i) + "...");
            console.log(quizes);
            quizes.i = i;
            this.$el.append(new app.views.QuizQuestionListView({model:quizes}).render().el);
            i++;
        }, this);
        return this;
    }
});


app.views.QuizQuestionListView = Backbone.View.extend({

    tagName:"li",

    className:"topcoat-list__item",
    
    initialize: function (){        
        console.log(this.model);                        
    },
    
    render:function () {
        console.log("render quizlistitemview...");
        this.$el.html(this.template(this.model));
        var j = this.model.i;
        return this;
    }

});