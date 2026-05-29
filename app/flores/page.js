"use client";

import { useState } from "react";

const whatsappNumber = "528182035437";

const flowers = [
  {
    name: "Orquídea Rosé Signature",
   price: "$2,999 MXN",
    images: [
      "/orquidias.jpeg",
      "/orqudias2.jpeg",
      "/orqudias3.jpeg",
      "/orqudias4.jpeg",
      "/orqudias5.jpeg",
      "/orqudias6.jpeg",
      "/orqudias7.jpeg",
      "/orqudias8.jpeg"
    ],
    description: "Una pieza premium con rosas, anémonas y orquídeas. Elegante, delicada y perfecta para un regalo inolvidable.",
    tier: "signature"
  },
  {
    name: "Caja Rosé & Blanco",
   price: "$2,450 MXN",
    images: [

      "/rosasblancas2.jpeg",
      "/rosasblancas3.jpeg",
      "/rosasblancas4.jpeg",
      "/rosasblancas5.jpeg",
      "/rosasblancas6.jpeg"
    ],
    description: "Una combinación suave de rosas rosadas y blancas, diseñada para verse fina, limpia y muy especial.",
    tier: "signature"
  },
  {
    name: "Caja Blanca con Lisianthus",
   price: "$2,350 MXN",
    images: [
      "/lisiantuscaja.jpeg",
      "/lisiantuscaja2.jpeg",
      "/lisiantuscaja3.jpeg"
    ],
    description: "Arreglo blanco con lisianthus, ideal para un detalle elegante, sobrio y con mucha presencia.",
    tier: "signature"
  },
  {
  name: "Tulipe Rosé Signature",
  price: "$2,090 MXN",
  images: [
    "/tulipanesrosa1.jpeg",
    "/tulipanesrosa2.jpeg",
    "/tulipanesrosa3.jpeg",
    "/tulipanesrosa4.jpeg",
    "/tulipanesrosa5.jpeg",
    "/tulipanesrosa6.jpeg",
    "/tulipanesrosa7.jpeg",
    "/tulipanesrosa8.jpeg",
    "/tulipanesrosa9.jpeg"
  ],
  description:
    "Tulipanes rosados en una composición delicada y elegante. Un diseño premium con tonos suaves, románticos y modernos que destacan por su presencia y detalle.",
  tier: "signature"
},
  {
    name: "Ramo Tulipán Blanco",
   price: "$1,990 MXN",
    images: [
      "/tulipanesblancos.jpeg",
      "/tulipanesblancos2.jpeg",
      "/tulipanesblancos3.jpeg",
      "/tulipanesblancos4.jpeg",
      "/tulipanesblancos5.jpeg"
    ],
    description: "Rosas y tulipanes blancos en un ramo delicado, romántico y con estilo premium.",
    tier: "classic"
  },
  {
    name: "Ramo Rojo con Lisianthus",
   price: "$1,890 MXN",
    images: [
      "/roja.lisiantus.jpeg",
      "/roja.lisiantus2.jpeg",
      "/roja.lisiantus3.jpeg"
    ],
    description: "Rosas rojas con lisianthus. Un diseño romántico, intenso y elegante.",
    tier: "classic"
  },
  {
    name: "Ramo Rosé Clásico",
  price: "$1,050 MXN",
    images: [
      "/ramorosa.jpeg",
      "/ramorosa2.jpeg",
      "/ramorosa3.jpeg",
      "/ramorosa4.jpeg",
      "/ramorosa5.jpeg",
      "/ramorosa6.jpeg",
      "/ramorosa7.jpeg"
    ],
    description: "Ramo de rosas rosadas con un estilo limpio, dulce y perfecto para regalar.",
    tier: "classic"
  }
];

function getWhatsappLink(flower) {
  const message = encodeURIComponent(
    `Hola, quiero pedir este arreglo de Blumen:\n\n${flower.name}\nPrecio: ${flower.price}\n\n¿Me puedes ayudar a coordinar fecha, horario y lugar de entrega?`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

export default function FloresPage() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const openLightbox = (flower, index = 0) => {
    setSelectedFlower(flower);
    setSelectedImage(index);
    setZoom(false);
  };

  const closeLightbox = () => {
    setSelectedFlower(null);
    setSelectedImage(0);
    setZoom(false);
  };

  const nextImage = () => {
    if (!selectedFlower) return;
    setSelectedImage((prev) =>
      prev === selectedFlower.images.length - 1 ? 0 : prev + 1
    );
    setZoom(false);
  };

  const prevImage = () => {
    if (!selectedFlower) return;
    setSelectedImage((prev) =>
      prev === 0 ? selectedFlower.images.length - 1 : prev - 1
    );
    setZoom(false);
  };

  return (
    <main style={{ background: "#faf7f4", minHeight: "100vh", padding: "50px 24px", fontFamily: "Arial, sans-serif" }}>
      <a href="/" style={{ color: "#8B3A4A", textDecoration: "none", fontWeight: "700" }}>
        ← Volver a Blumen
      </a>

      <section style={{ textAlign: "center", margin: "60px auto", maxWidth: "850px" }}>
        <p style={{ color: "#8B3A4A", letterSpacing: "3px", fontSize: "13px", fontWeight: "800" }}>
          BLUMEN COLLECTION
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(42px, 7vw, 86px)", lineHeight: "1", margin: "15px 0" }}>
          Arreglos florales para momentos especiales.
        </h1>
        <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.7" }}>
          Elige tu arreglo favorito. Cada diseño incluye fotos, precio y pedido directo por WhatsApp.
        </p>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
        gap: "34px",
        maxWidth: "1250px",
        margin: "0 auto"
      }}>
        {flowers.map((flower) => (
          <article key={flower.name} style={{
            background: "white",
            borderRadius: "34px",
            overflow: "hidden",
            boxShadow: flower.tier === "signature"
              ? "0 25px 70px rgba(139,58,74,0.20)"
              : "0 18px 45px rgba(0,0,0,0.10)",
            border: flower.tier === "signature"
              ? "1px solid rgba(139,58,74,0.25)"
              : "1px solid rgba(139,58,74,0.10)"
          }}>
            <div style={{ height: flower.tier === "signature" ? "430px" : "350px", overflow: "hidden", background: "#efe6e4" }}>
              <img
                src={flower.images[0]}
                alt={flower.name}
                onClick={() => openLightbox(flower, 0)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: "zoom-in",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>

            <div style={{ padding: "30px" }}>
              <p style={{ color: "#8B3A4A", fontSize: "12px", letterSpacing: "2px", fontWeight: "800" }}>
                {flower.tier === "signature" ? "BLUMEN SIGNATURE" : "BLUMEN CLASSIC"}
              </p>

              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", margin: "10px 0" }}>
                {flower.name}
              </h2>

              <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
                {flower.description}
              </p>

              <strong style={{ display: "block", fontSize: "28px", margin: "22px 0" }}>
                {flower.price}
              </strong>

              {flower.images.length > 1 && (
                <div style={{ display: "flex", gap: "8px", marginBottom: "22px", overflowX: "auto" }}>
                  {flower.images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt={`${flower.name} ${index + 1}`}
                      onClick={() => openLightbox(flower, index)}
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        cursor: "pointer",
                        border: "2px solid #ead7d8"
                      }}
                    />
                  ))}
                </div>
              )}

              <a
                href={getWhatsappLink(flower)}
                target="_blank"
                style={{
                  display: "block",
                  background: "#8B3A4A",
                  color: "white",
                  textAlign: "center",
                  padding: "16px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: "800"
                }}
              >
                Pedir este arreglo
              </a>
            </div>
          </article>
        ))}
      </section>

      {selectedFlower && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(20,18,18,0.88)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px"
        }}>
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "25px",
              right: "25px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: "white",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            ×
          </button>

          {selectedFlower.images.length > 1 && (
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                background: "white",
                fontSize: "28px",
                cursor: "pointer"
              }}
            >
              ‹
            </button>
          )}

          <div style={{ maxWidth: "1000px", width: "100%", textAlign: "center" }}>
            <img
              src={selectedFlower.images[selectedImage]}
              alt={selectedFlower.name}
              onClick={() => setZoom(!zoom)}
              style={{
                maxWidth: zoom ? "140%" : "100%",
                maxHeight: zoom ? "none" : "76vh",
                objectFit: "contain",
                borderRadius: "24px",
                cursor: "zoom-in",
                transition: "all 0.35s ease",
                boxShadow: "0 30px 90px rgba(0,0,0,0.45)"
              }}
            />

            <p style={{ color: "white", marginTop: "18px", fontWeight: "700" }}>
              🔍 Click para zoom · {selectedImage + 1} / {selectedFlower.images.length}
            </p>

            {selectedFlower.images.length > 1 && (
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
                {selectedFlower.images.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt=""
                    onClick={() => {
                      setSelectedImage(index);
                      setZoom(false);
                    }}
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      cursor: "pointer",
                      border: selectedImage === index ? "3px solid white" : "2px solid rgba(255,255,255,0.35)"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {selectedFlower.images.length > 1 && (
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                background: "white",
                fontSize: "28px",
                cursor: "pointer"
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}
