import { Flower2, Heart, Gift, MapPin, Sparkles, ArrowRight } from "lucide-react";

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

        <a className="button small" href="/flores">
          Ver colección
        </a>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="pill">
            <Sparkles size={16} /> Flores para momentos especiales
          </div>

          <h2>Arreglos florales elegantes para celebrar lo inolvidable.</h2>

          <p>
            En Blumen diseñamos ramos y arreglos florales con un estilo romántico,
            delicado y premium para graduaciones, regalos y celebraciones especiales.
          </p>

          <div className="actions">
            <a className="button" href="/flores">
              Explorar colección <ArrowRight size={18} />
            </a>
          </div>
        </div>
 
        <div className="heroImageBox">
          <img
          src="/combo3.jpeg"
            alt="Flores Blumen"
          />

          <div className="priceCard">
            <span>Colección floral</span>
            <strong>Diseños por pedido</strong>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <Heart />
          <h3>Diseño romántico</h3>
          <p>Arreglos suaves, elegantes y pensados para regalar.</p>
        </div>

        <div className="feature">
          <Gift />
          <h3>Personalizable</h3>
          <p>Elige el arreglo ideal según la ocasión y el estilo que buscas.</p>
        </div>

        <div className="feature">
          <MapPin />
          <h3>Entrega coordinada</h3>
          <p>Coordinamos contigo horario y lugar para entregar tu arreglo puntualmente.</p>
        </div>
      </section>

      <section className="premiumSection">
        <p className="sectionLabel">Blumen Collection</p>

        <h2>Conoce nuestros arreglos disponibles.</h2>

        <p>
          En la colección puedes ver cada diseño, precio y pedir directamente el arreglo
          que más te guste por WhatsApp.
        </p>

        <a className="button secondary" href="/flores">
          Ver catálogo completo <ArrowRight size={18} />
        </a>
      </section>

      <footer>Blumen · Flores para graduaciones · Pedidos por WhatsApp</footer>
    </main>
  );
}
