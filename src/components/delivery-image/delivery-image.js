import Delivery from './Delivery.png';
import './delivery-image.scss';

class DeliveryImage {
  render() {
    const img = document.createElement('img');
    img.src = Delivery;
    img.alt = 'Delivery';
    img.classList.add('delivery-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default DeliveryImage;
