app.adapters.DrupalsAdapter = function() {

        
    this.initialize = function(data) {
        console.log("Initializing drupals adapter");
        var deferred = $.Deferred();
        //url = data;
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "node/" + id + ".json", dataType: "jsonp"});
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey, dataType: "jsonp"});
    }
    
    this.findAll = function() {
        return $.ajax({url: url + "node.json?limit=3" , dataType: "jsonp"});
    }

    var url = "http://atomicosonoro.com/";
        
};