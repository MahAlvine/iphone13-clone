const imageHolder = document.querySelector('.imageHolder')
const activeImage = document.querySelector('.activeImage')

function changeIphone(e) {
    var btnId = e.id
    var activeImageSrc = 'images/' + btnId + '.jpg'
    activeImage.src = activeImageSrc
}