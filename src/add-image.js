import Delivery from './Delivery.png';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Delivery';
  img.width = 300;
  img.src = Delivery;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
