/*
 * jquery-tree
 * https://github.com/VicWei/jquery-tree
 *
 * Copyright (c) 2013 VicWei
 * Licensed under the MIT license.
 */

(function($) {
    var Tree = $.tree = function(element, options) {
        this.el = $(element);
        this.options = $.extend(true, {}, Tree.defaults, options);
        this.namespace = this.options.namespace;
    };

    Tree.defaults = {
        namespace: 'tree',
        withIcon: false, //true/fase
        autoOpen: false //true/false/1/2...
    };

    Tree.prototype = {
        constructor: Tree
    };

}(jQuery));
