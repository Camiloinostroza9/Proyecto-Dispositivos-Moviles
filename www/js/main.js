// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
    $('#name').html('<b>' + localStorage.getItem('nombre') + '</b>');
    $('#mail').html('<b>' + localStorage.getItem('mail') + '</b>');
    $('#cam').bind('click', cam);
    $('#ver').bind('click', ver);
}, false);

function cam(){
    navigator.camera.getPicture(function(photo){
        myApp.prompt('Agregue una Descripción','REMEMBER', function (value) {
        $('#img_cam').attr('src',photo);
        myApp.popup('.popup-cam');
            });
    }, function(error){
        myApp.alert('Error al tomar la fotografía','REMEMBER')
    }, {
        quality:100,
        correctOrientation:true,
        saveToPhotoAlbum:true,
        cameraDirection: 1
    });
}

function ver(){
    window.location = "main2.html";
}

function ver2(){
    var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            url: 'http://lorempixel.com/1024/1024/sports/1/',
            caption: 'Caption 1 Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        // This one without caption
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-captions').on('click', function () {
    myPhotoBrowserPopupDark.open();
});
}