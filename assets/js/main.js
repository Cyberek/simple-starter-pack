requirejs.config({
    paths: {
        almond: "bower_components/almond/almond",
        jquery: "bower_components/jquery/dist/jquery.min",
        'eventEmitter/EventEmitter': "bower_components/eventEmitter/EventEmitter.min",
        'eventie/eventie': "bower_components/eventie/eventie",
        picturefill: "bower_components/picturefill/picturefill",
        imagesLoaded: "bower_components/imagesloaded/imagesloaded",
        debounce: "bower_components/jquery-throttle-debounce/jquery.ba-throttle-debounce.min",
        inView: "bower_components/protonet/jquery.inview/jquery.inview.min"
    },
    shim: {
        'modules/scripts': {
            deps: ['jquery', 'picturefill', 'imagesLoaded', 'debounce'],
        },
        debounce: {
        	deps: ['jquery']
        },
        imagesLoaded: {
            deps: ['jquery']
        },
        inView: {
            deps: ['jquery']
        }
    }
});

require(["application/app", 'jquery'],function(MyProject, $){
    $(function(){
        MyProject.init();
    });
});
