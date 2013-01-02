jQuery(document).ready(function(){
// Wrap an image with a span to allow for greater manipulation
// See http://webdesignerwall.com/tutorials/css3-image-styles
  jQuery('img').each(function() {
    var imgClass = jQuery(this).attr('class');
    jQuery(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
    jQuery(this).removeAttr('class');
  });
});