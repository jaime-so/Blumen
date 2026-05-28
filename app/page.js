import { Flower2, Heart, Gift, MapPin, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const whatsappNumber = "528182035437";
const whatsappMessage = encodeURIComponent("Hola, quiero hacer un pedido de flores para graduación con Blumen.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

        <a className="button small" href={whatsappLink} target="_blank">
          Pedir por WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="pill">
            <Sparkles size={16} /> Flores para graduaciones
          </div>

          <h2>Flores elegantes para celebrar momentos inolvidables.</h2>

          <p>
            En Blumen diseñamos ramos y arreglos florales con un estilo delicado,
            romántico y especial para graduaciones, regalos y celebraciones.
          </p>

          <div className="actions">
            <a className="button" href={whatsappLink} target="_blank">
              <MessageCircle size={20} /> Hacer pedido
            </a>

            <a className="button secondary" href="/flores">
              Ver colección <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="heroImageBox">
          <img
            src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&w=1200&q=80"
            alt="Flores Blumen"
          />
          <div className="priceCard">
            <span>Pedidos personalizados</span>
            <strong>Ramos desde $1,140 MXN</strong>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <Heart />
          <h3>Diseño romántico</h3>
          <p>Arreglos suaves, elegantes y perfectos para regalar.</p>
        </div>

        <div className="feature">
          <Gift />
          <h3>Personalizable</h3>
          <p>Elige estilo, tamaño y mensaje especial para tu ocasión.</p>
        </div>

        <div className="feature">
          <MapPin />
          <h3>Entrega coordinada</h3>
          <p>Coordinamos horario y lugar para entregar tu arreglo puntualmente.</p>
        </div>
      </section>

      <section className="premiumSection">
        <p className="sectionLabel">Experiencia Blumen</p>
        <h2>Más que flores, un detalle que se siente pensado.</h2>
        <p>
          Cada arreglo se prepara con cuidado para que llegue bonito, fresco y listo
          para regalar en ese momento especial.
        </p>

        <a className="button secondary" href="/flores">
          Explorar colección <ArrowRight size={18} />
        </a>
      </section>

      <footer>Blumen · Flores para graduaciones · Pedidos por WhatsApp</footer>
    </main>
  );
}
