$(function(){!function($,e,t,i){var o=function(e){this._core=e,this._handlers={"dragged.owl.carousel changed.owl.carousel":$.proxy(function(e){e.namespace&&this._core.settings.linked&&this.update(e)},this),"linked.to.owl.carousel":$.proxy(function(e,t,i,o,n){e.namespace&&this._core.settings.linked&&this.toSlide(t,i,n)},this)},this._core.$element.on(this._handlers),this._core.options=$.extend({},o.Defaults,this._core.options)};o.Defaults={linked:!1},o.prototype.update=function(e){this.toSlide(e.relatedTarget.relative(e.item.index))},o.prototype.toSlide=function(e,t,i){var o=this._core.$element.attr("id"),n="string"==typeof this._core.settings.linked?this._core.settings.linked.split(","):this._core.settings.linked;void 0===i&&(i=!0),e=e||0,i?$.each(n,function(t,i){$(i).trigger("linked.to.owl.carousel",[e,300,!0,!1])}):(this._core.$element.trigger("to.owl.carousel",[e,300,!0]),this._core.settings.current&&this._core._plugins.current.switchTo(e))},o.prototype.destroy=function(){var e,t;for(e in this._handlers)this.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},$.fn.owlCarousel.Constructor.Plugins.linked=o}(window.Zepto||window.jQuery,window,document),$(".desktop-landing").owlCarousel({nav:!1,center:!0,items:2,loop:!0,margin:10,linked:".mobile-landing"});var e=$(".mobile-landing");$(e).owlCarousel({nav:!1,loop:!0,center:!0,items:1,margin:10,linked:e.prev()}).on("initialized.owl.carousel linked.to.owl.carousel",function(){e.find(".owl-item.current").removeClass("current"),(e.find(".owl-item.active.center").length?e.find(".owl-item.active.center"):e.find(".owl-item.active").eq(0)).addClass("current")}),$(".desktop-portal").owlCarousel({nav:!1,center:!0,items:2,loop:!0,margin:10,linked:".mobile-portal"});var t=$(".mobile-portal");$(t).owlCarousel({nav:!1,loop:!0,center:!0,items:1,margin:10,linked:t.prev()}).on("initialized.owl.carousel linked.to.owl.carousel",function(){t.find(".owl-item.current").removeClass("current"),(t.find(".owl-item.active.center").length?t.find(".owl-item.active.center"):t.find(".owl-item.active").eq(0)).addClass("current")}),$(".screens").owlCarousel({nav:!1,center:!0,items:2,loop:!0,margin:10}),$(".slider").owlCarousel({nav:!1,center:!0,autoWidth:!0,items:1,loop:!0,margin:10})});