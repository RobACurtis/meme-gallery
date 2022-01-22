var gallery = document.querySelector('main');
var imageUrls = [
  'https://townsquare.media/site/812/files/2016/07/tk-Motivational-Memes-Featuring-Rappers-6.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
  'https://lifewithoutandy.com/wp-content/uploads/2020/03/90089151_194578595303779_3057294365513815961_n.jpeg',
  'https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg'
];

var imageUrlInput = document.querySelector('input');

var addImageButton = document.querySelector('button');
addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = ' ';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}
updateGallery();
