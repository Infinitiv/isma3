// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require foundation/foundation
//= require foundation/foundation.accordion
//= require foundation/foundation.clearing
//= require foundation/foundation.dropdown
//= require foundation/foundation.orbit
//= require foundation/foundation.reveal
//= require foundation/foundation.topbar
Foundation.set_namespace = function() {};
$(function(){ $(document).foundation(); });
var CKEDITOR_BASEPATH = '/assets/ckeditor/'
Foundation.libs.topbar['settings']['back_text'] = 'Назад'