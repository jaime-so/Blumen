"use client";

import { useState } from "react";

const whatsappNumber = "528182035437";

const flowers = [
  {
    name: "Orchid Lumière",
    price: "$2,961 MXN",
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
    description: "Arreglo premium con rosas, anémona y orquídeas.",
    tier: "signature"
  },
  {
    name: "Scarlet Tulipe",
    price: "$2,790 MXN",
    images: [
      "/roja.lisiantus.jpeg",
      "/roja.lisiantus2.jpeg",
      "/roja.lisiantus3.jpeg"
    ],
    description: "Rosas rojas con tulipanes rosas, intenso y especial.",
    tier: "signature"
  },
  {
    name: "Maison Tulipe",
    price: "$2,220 MXN",
    images: [
      "/tulipanesblancos.jpeg",
      "/tulipanesblancos2.jpeg",
      "/tulipanesblancos3.jpeg",
      "/tulipanesblancos4.jpeg",
      "/tulipanesblancos5.jpeg",
      "/tulipanesblancos6.jpeg"
    ],
    description: "Rosas con tulipanes blancos, suave y elegante.",
    tier: "signature"
  },
  {
    name: "Velvet Romance",
    price: "$2,100 MXN",
    images: [
      "/ramorosa.jpeg",
      "/ramorosa2.jpeg",
      "/ramorosa3.jpeg",
      "/ramorosa4.jpeg",
      "/ramorosa5.jpeg",
      "/ramorosa6.jpeg",
      "/ramorosa7.jpeg"
    ],
    description: "Rosas rojas con lisianthus, romántico y delicado.",
    tier: "classic"
  },
  {
    name: "Ivory Rosé",
    price: "$2,091 MXN",
    images: [
      "/rosasblancas.jpeg",
      "/rosasblancas2.jpeg",
      "/rosasblancas3.jpeg",
      "/rosasblancas4.jpeg",
      "/rosasblancas5.jpeg",
      "/rosasblancas6.jpeg"
    ],
    description: "Rosas rosas y blancas en una combinación limpia.",
    tier: "classic"
  },
  {
    name: "Ivory Lisianthus",
    price: "$1,971 MXN",
    images: [
      "/lisiantuscaja.jpeg",
      "/lisiantuscaja2.jpeg",
      "/lisiantuscaja3.jpeg"
    ],
    description: "Rosas blancas con lisianthus, fino y claro.",
    tier: "classic"
  },
  {
    name: "Rosé Élégance",
    price: "$1,140 MXN",
    images: [
      "/combo1.jpeg",
      "/combo2.jpeg",
      "/combo3.jpeg"
    ],
    description: "Ramo elegante de rosas rosas, delicado y limpio.",
    tier: "classic"
  }
];

function getWhatsappLink(flower) {
  const message = encodeURIComponent(
    `Hola, quiero pedir este arreglo de Blumen:\n\n${flower.name}\nPrecio: ${flower.price}\n\n¿Me puedes ayudar a coordinar fecha, horario y lugar de entrega?`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

function FlowerCard({ flower, setSelectedFlower }) {
  const isSignature = flower.tier === "signature";
  const isPremium = flower.tier === "premium";

  return (
    <article
      style={{
        background: "white",
        borderRadius: isSignature ? "38px" : "30px",
        overflow: "hidden",
        boxShadow: isSignature
          ? "0 30px 80px rgba(80, 35, 45, 0.20)"
          : isPremium
          ? "0 22px 55px rgba(80, 35, 45, 0.14)"
          : "0 16px 40px rgba(0,0,0,0.08)",
        border: isSignature
          ? "1px solid rgba(139,58,74,0.28)"
          : "1px solid rgba(139,58,74,0.12)",
        gridColumn: isSignature ? "span 2" : "span 1"
      }}
    >
      <div
        style={{
          height: isSignature ? "560px" : isPremium ? "440px" : "360px",
          overflow: "hidden",
          background: "#efe6e4",
          position: "relative"
        }}
      >
        {isSignature && (
          <div
            style={{
              position: "absolute",
              top: "22px",
              left: "22px",
              zIndex: 2,
              background: "rgba(255,255,255,0.88)",
              padding: "10px 16px",
              borderRadius: "999px",
              color: "#8B3A4A",
              fontSize: "12px",
              letterSpacing: "1.8px",
              fontWeight: "800",
              textTransform: "uppercase"
            }}
          >
            Signature Design
          </div>
        )}

        <img
         src={flower.images[0]}
          alt={flower.name}
          onClick={() => setSelectedFlower(flower)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            cursor: "zoom-in",
            transition: "transform 0.5s ease"
          }}
        />
      </div>

      <div
        style={{
          padding: isSignature ? "36px" : "28px"
        }}
      >
        <p
          style={{
            color: "#8B3A4A",
            fontSize: "13px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "1.8px",
            marginBottom: "10px"
          }}
        >
          {isSignature ? "Blumen Signature" : isPremium ? "Premium Selection" : "Blumen Design"}
        </p>

        <h2
          style={{
            fontSize: isSignature ? "42px" : "28px",
            margin: "0 0 12px",
            color: "#242424",
            fontFamily: "Georgia, serif"
          }}
        >
          {flower.name}
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: isSignature ? "17px" : "15px",
            lineHeight: "1.6"
          }}
        >
          {flower.description}
        </p>

        <strong
          style={{
            display: "block",
            fontSize: isSignature ? "30px" : "23px",
            margin: "24px 0",
            color: "#232323"
          }}
        >
          {flower.price}
        </strong>

        <a
          href={getWhatsappLink(flower)}
          target="_blank"
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            background: isSignature ? "#6f2f3d" : "#8B3A4A",
            color: "white",
            padding: isSignature ? "18px 22px" : "15px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "800",
            boxShadow: "0 12px 28px rgba(139,58,74,0.25)"
          }}
        >
          Pedir este arreglo
        </a>
      </div>
    </article>
  );
}

export default function FloresPage() {
  const [selectedFlower, setSelectedFlower] = useState(null);

  return (
    <main
      style={{
        background: "#faf7f4",
        minHeight: "100vh",
        padding: "50px 24px",
        fontFamily: "Arial, sans-serif"
      }}
    >
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

      <section
        style={{
          textAlign: "center",
          margin: "55px auto 70px",
          maxWidth: "850px"
        }}
      >
        <p
          style={{
            color: "#8B3A4A",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "13px",
            fontWeight: "800"
          }}
        >
          Colección Blumen
        </p>

        <h1
          style={{
            fontSize: "58px",
            margin: "10px 0",
            color: "#232323",
            fontFamily: "Georgia, serif",
            lineHeight: "1.05"
          }}
        >
          Arreglos florales para momentos especiales
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: "1.6"
          }}
        >
          Diseños seleccionados por estilo, ocasión y presencia visual. Cada arreglo puede pedirse directamente por WhatsApp con nombre y precio incluido.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "38px",
          maxWidth: "1280px",
          margin: "0 auto"
        }}
      >
        {flowers.map((flower) => (
          <FlowerCard
            key={flower.name}
            flower={flower}
            setSelectedFlower={setSelectedFlower}
          />
        ))}
      </section>

      {selectedFlower && (
        <div
          onClick={() => setSelectedFlower(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "30px",
            backdropFilter: "blur(8px)"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1000px",
              width: "100%",
              position: "relative"
            }}
          >
            <img
              src={selectedFlower.image}
              alt={selectedFlower.name}
              style={{
                width: "100%",
                maxHeight: "88vh",
                objectFit: "contain",
                borderRadius: "28px",
                boxShadow: "0 20px 80px rgba(0,0,0,0.45)"
              }}
            />

            <button
              onClick={() => setSelectedFlower(null)}
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "44px",
                height: "44px",
                borderRadius: "999px",
                border: "none",
                background: "rgba(255,255,255,0.9)",
                fontSize: "22px",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
