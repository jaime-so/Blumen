const whatsappNumber = "528182035437";

const flowers = [
  {
    name: "Ramo pura rosas rosa",
    price: "$1,140 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (1).jpeg",
    description: "Ramo elegante de rosas rosas, delicado y limpio."
  },
  {
    name: "Ramo rosas rojas con lisianthus",
    price: "$2,100 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (2).jpeg",
    description: "Diseño romántico con rosas rojas y lisianthus."
  },
  {
    name: "Ramo rosas con tulipanes blancos",
    price: "$2,220 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (3).jpeg",
    description: "Arreglo suave con rosas y tulipanes blancos."
  },
  {
    name: "Rosas rosas y blancas",
    price: "$2,091 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (4).jpeg",
    description: "Combinación elegante de tonos rosas y blancos."
  },
  {
    name: "Rosas rosa, anémona y orquídeas",
    price: "$2,961 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (5).jpeg",
    description: "Arreglo premium con flores protagonistas."
  },
  {
    name: "Rosas blancas con lisianthus",
    price: "$1,971 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28.jpeg",
    description: "Diseño fino, claro y muy elegante."
  },
  {
    name: "Ramo rosas rojas con tulipanes rosas",
    price: "$2,790 MXN",
    image: "/WhatsApp Image 2026-05-27 at 17.20.28 (2).jpeg",
    description: "Arreglo intenso y especial para regalar."
  }
];

function getWhatsappLink(flower) {
  const message = encodeURIComponent(
    `Hola, quiero pedir este arreglo de Blumen:\n\n${flower.name}\nPrecio: ${flower.price}\n\n¿Me puedes ayudar a coordinar fecha, horario y lugar de entrega?`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

export default function FloresPage() {
  return (
    <main style={{
      background: "#faf7f4",
      minHeight: "100vh",
      padding: "50px 24px",
      fontFamily: "Arial, sans-serif"
    }}>
      <a
        href="/"
        style={{
          color: "#8B3A4A",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "16px"
        }}
      >
        {"<- Volver a Blumen"}
      </a>

      <section style={{
        textAlign: "center",
        margin: "55px auto 70px",
        maxWidth: "850px"
      }}>
        <p style={{
          color: "#8B3A4A",
          letterSpacing: "3px",
          textTransform: "uppercase",
          fontSize: "13px",
          fontWeight: "700"
        }}>
          Colección Blumen
        </p>

        <h1 style={{
          fontSize: "58px",
          margin: "10px 0",
          color: "#232323",
          fontFamily: "Georgia, serif",
          lineHeight: "1.05"
        }}>
          Arreglos florales para momentos especiales
        </h1>

        <p style={{
          color: "#666",
          fontSize: "18px",
          lineHeight: "1.6"
        }}>
          Elige tu arreglo favorito y mándanos WhatsApp. Cada botón ya incluye el nombre y precio del diseño para que el pedido sea claro.
        </p>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        gap: "34px",
        maxWidth: "1250px",
        margin: "0 auto"
      }}>
        {flowers.map((flower) => (
          <article
            key={flower.name}
            style={{
              background: "white",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.11)",
              border: "1px solid rgba(139,58,74,0.14)"
            }}
          >
            <div style={{
              height: "360px",
              overflow: "hidden",
              background: "#efe6e4"
            }}>
              <img
                src={flower.image}
                alt={flower.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            <div style={{
              padding: "28px"
            }}>
              <p style={{
                color: "#8B3A4A",
                fontSize: "13px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "10px"
              }}>
                Blumen Design
              </p>

              <h2 style={{
                fontSize: "26px",
                margin: "0 0 12px",
                color: "#242424",
                fontFamily: "Georgia, serif"
              }}>
                {flower.name}
              </h2>

              <p style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.6",
                minHeight: "48px"
              }}>
                {flower.description}
              </p>

              <strong style={{
                display: "block",
                fontSize: "22px",
                margin: "22px 0",
                color: "#232323"
              }}>
                {flower.price}
              </strong>

              <a
                href={getWhatsappLink(flower)}
                target="_blank"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#8B3A4A",
                  color: "white",
                  padding: "15px 20px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  fontWeight: "700",
                  boxShadow: "0 10px 24px rgba(139,58,74,0.25)"
                }}
              >
                Pedir este arreglo
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
