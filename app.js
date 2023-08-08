let images = document.querySelectorAll('.im');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', ()=> {
    for (let j = 0; j < resimler.length; j++) {
      images[j].style.width = '200px';
    }
    this.style.width = '300px';
  });
}


