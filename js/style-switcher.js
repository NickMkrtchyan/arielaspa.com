
// Red Style
if('styles-mint.css' == getUrlParam('style') ) {
    $('link[href="css/styles.css"]').attr('href','css/styles-mint.css');
    $('.header-full-screen-img .logo').attr('src', 'img/header-logo-mint.png');
    $('.navbar-brand img').attr('src', 'img/nav-logo-mint.png');
}

// Green Style
if('styles-coral.css' == getUrlParam('style') ) {
    $('link[href="css/styles.css"]').attr('href','css/styles-coral.css');
    $('.header-full-screen-img .logo').attr('src', 'img/header-logo-coral.png');
    $('.navbar-brand img').attr('src', 'img/nav-logo-coral.png');
}



function getUrlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}