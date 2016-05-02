require.config({
    baseUrl: "",
    paths: {
        "jQuery": "bower_components/jquery/dist/jquery",
        "knockout": "bower_components/knockout/dist/knockout",
        "knockout-mapping": "bower_components/bower-knockout-mapping/dist/knockout.mapping",
        "text": "bower_components/text/text",
        "checkmark": "js/components/checkmark",
        "phonelist": "js/components/phonelist",
        "phonedetail": "js/components/phonedetail"        
    },
    shim: {
        "jQuery": {
            exports: "$"
        }
    },
    //cache buster, remove for production!
    urlArgs: "bust=" + (new Date()).getTime()    
});
require(["js/app"]);