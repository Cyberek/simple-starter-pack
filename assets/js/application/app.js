define(['jquery', 'imagesLoaded'],function($){
    'use strict';

    var MyProject = {};

    MyProject.DOM = {
        BODY: $('body')
    };
    
    MyProject.SETTINGS = {
        CUSTOM_CLASS: 'class_name'
    };

    MyProject.init = function() {
        console.log('App started');
        if (MyProject.DOM.BODY.length) {
            this.customFunction(MyProject.DOM.BODY);
        }

    };
    
    MyProject.customFunction = function($elem){
       $elem.addClass(MyProject.SETTINGS.CUSTOM_CLASS);
    };
    
    return MyProject;
});
