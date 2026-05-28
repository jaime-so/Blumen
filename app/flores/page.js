export default function FloresPage() {
  const flowers = [
    {
      name: "Rosé Élégance",
      image: "/ramo-rose.jpg",
      price: "$690 MXN"
    },
    {
      name: "Velvet Romance",
      image: "/velvet-romance.jpg",
      price: "$890 MXN"
    },
    {
      name: "Maison Tulipe",
      image: "/maison-tulipe.jpg",
      price: "$980 MXN"
    },
    {
      name: "Ivory Rosé Box",
      image: "/ivory-rose.jpg",
      price: "$1,150 MXN"
    },
    {
      name: "Orchid Lumière",
      image: "/orchid-lumiere.jpg",
      price: "$1,490 MXN"
    },
    {
      name: "Château Rosé",
      image: "/chateau-rose.jpg",
      price: "$1,350 MXN"
    }
  ];

  return (
    <main style={{
      background: "#faf7f4",
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "Arial"
    }}>
      return (
  <main style={{
    background: "#faf7f4",
    minHeight: "100vh",
    padding: "60px 20px",
    fontFamily: "Arial"
  }}>

    <a
      href="/"
      style={{
        display: "inline-block",
        marginBottom: "30px",
        color: "#8B3A4A",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "16px"
      }}
    >
      ← Volver a Blumen
    </a>

    <div style={{
      <div style={{
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{
          fontSize: "52px",
          marginBottom: "10px"
        }}>
          Blumen Collection
        </h1>

        <p style={{
          color: "#666",
          fontSize: "18px"
        }}>
          Arreglos florales premium para momentos especiales
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        
        {flowers.map((flower) => (
          <div key={flower.name} style={{
            background: "white",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            
            <img
              src={flower.image}
              alt={flower.name}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover"
              }}
            />

            <div style={{
              padding: "24px"
            }}>
              <h2 style={{
                marginBottom: "10px"
              }}>
                {flower.name}
              </h2>

              <p style={{
                color: "#777",
                marginBottom: "18px"
              }}>
                Diseño floral premium
              </p>

              <strong style={{
                fontSize: "20px"
              }}>
                {flower.price}
              </strong>

              <a
                href="https://wa.me/528182035437"
                target="_blank"
                style={{
                  display: "block",
                  marginTop: "20px",
                  background: "#111",
                  color: "white",
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: "14px",
                  textDecoration: "none"
                }}
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
