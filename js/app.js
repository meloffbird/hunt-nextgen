// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// FLOORPLAN BUTTONS

$(".focusoverlay").hide();
$(".collaboverlay").hide();
$(".playoverlay").hide();

$(".f-map").click(function(){
    $(".focusoverlay").toggle();

        var el = document.getElementById("f-map");
        if (classie.has(el,"fa-2x")) {
            classie.remove(el,"fa-2x");
        } else {
            classie.add(el,"fa-2x");
        }

    $('html,body').animate({
        scrollTop: $(".floorplan").offset().top},
        'slow');
});


$(".c-map").click(function(){
    $(".collaboverlay").toggle();

    var el = document.getElementById("c-map");
    if (classie.has(el,"fa-2x")) {
        classie.remove(el,"fa-2x");
    } else {
        classie.add(el,"fa-2x");
    }

    $('html,body').animate({
        scrollTop: $(".floorplan").offset().top},
        'slow');

});

$(".p-map").click(function(){
    $(".playoverlay").toggle();

    var el = document.getElementById("p-map");
    if (classie.has(el,"fa-2x")) {
        classie.remove(el,"fa-2x");
    } else {
        classie.add(el,"fa-2x");
    }

    $('html,body').animate({
        scrollTop: $(".floorplan").offset().top},
        'slow');

});



// MENU NAVIGATION

    //toggle 3d navigation
    $('.cd-3d-nav-trigger').on('click', function(){
        toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
    });

    //select a new item from the 3d navigation
    $('.cd-3d-nav a').on('click', function(){
        var selected = $(this);
        selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
        updateSelectedNav('close');
    });

    $(window).on('resize', function(){
        window.requestAnimationFrame(updateSelectedNav);
    });

    function toggle3dBlock(addOrRemove) {
        if(typeof(addOrRemove)==='undefined') addOrRemove = true;
        $('.cd-header').toggleClass('nav-is-visible', addOrRemove);
        $('main').toggleClass('nav-is-visible', addOrRemove);
        $('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
    }

    //this function updates the .cd-marker position
    function updateSelectedNav(type) {
        var selectedItem = $('.cd-selected'),
            selectedItemPosition = selectedItem.index() + 1,
            leftPosition = selectedItem.offset().left,
            backgroundColor = selectedItem.data('color');

        $('.cd-marker').removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
            'left': leftPosition,
        });
        if( type == 'close') {
            $('.cd-marker').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                toggle3dBlock(false);
            });
        }
    }

    $.fn.removeClassPrefix = function(prefix) {
        this.each(function(i, el) {
            var classes = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };




// $(function() {
//     $(".coconut")
//         .mouseover(function() {
//             var src = $(this).attr("src").match(/[^\.]+/) + "../images/chair_coconut.jpg";
//             $(this).attr("src", src);
//             alert ("hey hot stuff");
//         })
//         .mouseout(function() {
//             var src = $(this).attr("src").replace("over.gif", "../images/chair_scissor.jpg");
//             $(this).attr("src", src);
//         });
// });






$(function() {
    $("#ball").hover(function() {
        $("#c_group-single").attr("src", "../images/chair_coconut.jpg");
        $("#wtf").attr("src", "../images/chair_coconut.jpg");

    }, function() {
        $("#c_group-single").attr("src", "../images/f_student-group-study.jpg");
        $("#wtf").attr("src", "../images/f_student-group-study.jpg");
    });

})
