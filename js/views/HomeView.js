app.views.HomeView = Backbone.View.extend({

    initialize: function(){
        this.menu = null;
    },
    
    events:{
        "click .open-left": "menuleft",
        "click .videos": "videos",
        "click .close-left":"menuleft",
        "click .menu-blog":"goBlog"
    },
    
    render: function(){        
        $(this.el).html(this.template());     
        return this;
    },
    
    menuleft: function(){
        console.log("menu view");
        app.utils.menu.toggleMenu();
    },
    
    videos: function(){
        console.log('videos');
    },
    
    goBlog: function(){
        app.utils.menu.toggleMenu();
        console.log(app.router.navigate('blog', {trigger: true}));
        console.log(app.views.HomeView);
        //this.navigate("/blog", true);        
    }        
    
});