import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0408/9909/files/Air_Max_95_Kim_Jones_-_Footwear-Apparel_-_Feature_-_March_15_2021.jpg?v=1615853175" height={1080}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Segurança sempre!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/38/fb/24/38fb24becd9a52b0278f6e2a8f5d2315.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>A Melhor</h3>
          <p>A melhor loja de ruopas do brasil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dooca.store/28760/brands/banner-lacoste.png?v=1645536532&webp=0" height={400}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Entrega</h3>
          <p>
            Entrega para todo o Brasil com frete gratis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;