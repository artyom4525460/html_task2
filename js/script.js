var shareButton = document.getElementById('share-button')
var sharePalet = document.getElementById('share-palet')

shareButton.addEventListener('click', function(event){
    sharePalet.style.display = 'block';
})

document.body.addEventListener('click', function(event){
    if(!sharePalet.contains(event.target)){
        sharePalet.style.display = 'none';
    }
}, true); 