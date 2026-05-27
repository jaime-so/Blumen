import { Flower2, Heart, Gift, MapPin, MessageCircle, Sparkles } from 'lucide-react';

const whatsappNumber = '528182035437';
const whatsappMessage = encodeURIComponent('Hola, quiero hacer un pedido de flores para graduación con Blumen.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const products = [
  {
    name: 'Ramo Romántico',
    description: 'Flores delicadas, ideal para regalar después de la ceremonia.',
    price: 'Desde $650 MXN',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Arreglo Aesthetic',
    description: 'Diseño elegante y fotogénico, perfecto para graduaciones.',
    price: 'Desde $850 MXN',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bouquet Especial',
    description: 'Un ramo más grande y premium para celebrar un momento inolvidable.',
    price: 'Desde $1,200 MXN',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logoWrap">
          <div className="iconCircle"><Flower2 size={22} /></div>
          <div>
            <h1 className="logo">BLUMEN</h1>
            <p className="tagline">graduation flowers</p>
          </div>
        </div>
        <a className="button small" href={whatsappLink} target="_blank">Pedir por WhatsApp</a>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="pill"><Sparkles size={16} /> Flores para graduaciones</div>
          <h2>Celebra su gran día con flores que se sienten especiales.</h2>
          <p>En Blumen creamos ramos y arreglos florales para graduaciones, regalos y momentos especiales que merecen sentirse inolvidables.</p>
          <div className="actions">
            <a className="button" href={whatsappLink} target="_blank"><MessageCircle size={20} /> Hacer pedido</a>
            <a className="button secondary" href="#catalogo">Ver catálogo</a>
          </div>
        </div>
        <div className="heroImageBox">
          <img src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&w=1100&q=80" alt="Ramo de flores" />
          <div className="priceCard">
            <span>Pedidos personalizados</span>
            <strong>Ramos desde $650 MXN</strong>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature"><Heart /><h3>Diseño romántico</h3><p>Arreglos suaves, delicados y perfectos para regalar en graduaciones.</p></div>
        <div className="feature"><Gift /><h3>Personalizable</h3><p>Puedes elegir estilo, tamaño y mensaje especial para la persona graduada.</p></div>
      <div className="feature"><MapPin /><h3>Entrega coordinada</h3><p>Coordinamos contigo el horario y lugar ideal para entregar tu arreglo de manera elegante y puntual.</p></div>
      </section>

      <section id="catalogo" className="catalog">
        <p className="sectionLabel">Catálogo</p>
        <h2>Ramos y arreglos para graduación</h2>
        <p className="sectionText">Elige un diseño base y te ayudamos a personalizarlo por WhatsApp.</p>
        <div className="grid">
          {products.map((product) => (
            <article className="card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <div className="cardBody">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <a className="button full" href={whatsappLink} target="_blank">Pedir este diseño</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Haz tu pedido con tiempo</h2>
        <p>Mándanos mensaje por WhatsApp, dinos la fecha de graduación, estilo que te gusta y presupuesto. Nosotros te ayudamos a elegir el arreglo perfecto.</p>
        <a className="button" href={whatsappLink} target="_blank"><MessageCircle size={20} /> WhatsApp +52 818 203 5437</a>
      </section>

      <footer>Blumen · Flores para graduaciones · Pedidos por WhatsApp</footer>
    </main>
  );
}
