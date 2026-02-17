const products = [
    {
        id: "classic",
        name: "CLASICA OWL&SKULL",
        category: "POLERAS",
        description: "El diseño original de Owl & Skull con tipografía clásica. Esencia underground y estilo atemporal.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 15000,
                images: ["modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL1.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL2.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL4.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL9.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL10.jpeg", "modelos polera/Clasica OWL&SKULL/WhatsApp Image 2026-02-14 at 1.15.02 PM.jpeg"]
            },
            {
                type: "MANGA LARGA",
                price: 16000,
                images: ["modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL5.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL6.jpeg"]
            },
            {
                type: "SIN MANGA",
                price: 15000,
                images: ["modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL7.jpeg", "modelos polera/Clasica OWL&SKULL/Clasica OWL&SKULL8.jpeg"]
            }
        ]
    },
    {
        id: "owlskull",
        name: "CROPTOP OWL&SKULL",
        category: "POLERAS",
        description: "Identidad pura. El logo que define nuestra marca en su máxima expresión. Potencia visual en cada detalle. Oferta: 2x $17.990 en Croptops básicos.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "CROPTOP",
                price: 9990,
                images: ["modelos polera/Topcroc OWL&SKULL/Topcroc OWL&SKULL1.jpeg", "modelos polera/Topcroc OWL&SKULL/Topcroc OWL&SKULL2.jpeg", "modelos polera/Topcroc OWL&SKULL/Topcroc OWL&SKULL3.jpeg"]
            }
        ]
    },
    {
        id: "chicano",
        name: "CROPTOP CHICANO",
        category: "POLERAS",
        description: "Inspirado en el arte Chicano y la cultura lowrider. Fuerza, herencia y un estilo único. Oferta: 2x $17.990.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "CROPTOP",
                price: 9990,
                images: ["modelos polera/Topcroc Chicano/Topcroc Chicano1.jpeg", "modelos polera/Topcroc Chicano/Topcroc Chicano2.jpeg", "modelos polera/Topcroc Chicano/Topcroc Chicano3.jpeg"]
            }
        ]
    },
    {
        id: "boxing",
        name: "BOXING CLUB OWL&SKULL",
        category: "POLERAS",
        description: "Para los amantes del Sweet Science. Estilo directo, crudo y sin rodeos. Espíritu de club de boxeo.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 15000,
                images: ["modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL1.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL2.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL3.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL8.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL9.jpeg"]
            },
            {
                type: "MANGA LARGA",
                price: 16000,
                images: ["modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL4.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL5.jpeg"]
            },
            {
                type: "SIN MANGA",
                price: 15000,
                images: ["modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL6.jpeg", "modelos polera/Boxing Club OWL&SKULL/Boxing Club OWL&SKULL7.jpeg"]
            }
        ]
    },
    {
        id: "fightfest",
        name: "FIGHT FEST",
        category: "POLERAS",
        description: "Edición conmemorativa inspirada en el festival de lucha más crudo. Para los que viven el combate.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 15000,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img1.jpg", "Diseños/FightFest 2019/fight-fest-polera-img2.jpg", "Diseños/FightFest 2019/fight-fest-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16000,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img4.jpg", "Diseños/FightFest 2019/fight-fest-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15000,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img2.jpg"]
            }
        ]
    },
    {
        id: "bjj",
        name: "BJJ URBANO",
        category: "POLERAS",
        description: "Diseñado para los guerreros del tatami. Resistencia, técnica y disciplina en cada fibra.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 15000,
                images: ["modelos polera/BJJ Urbano/BJJ Urbano1.jpeg", "modelos polera/BJJ Urbano/BJJ Urbano2.jpeg", "modelos polera/BJJ Urbano/BJJ Urbano3.jpeg"]
            },
            {
                type: "SIN MANGA",
                price: 15000,
                images: ["modelos polera/BJJ Urbano/BJJ Urbano4.jpeg", "modelos polera/BJJ Urbano/BJJ Urbano5.jpeg"]
            }
        ]
    },
    {
        id: "bjj-poleron",
        name: "POLERON BJJ URBANO",
        category: "POLERONES",
        description: "Abrigo técnico para el post-entreno o la calle. Diseño BJJ Urbano en formato hoodie de alta calidad.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO"],
        variants: [
            {
                type: "POLERON",
                price: 25000,
                images: ["modelos polera/BJJ Urbano/Poleron BJJ Urbano2.jpeg", "modelos polera/BJJ Urbano/Poleron BJJ Urbano1.jpeg"]
            }
        ]
    }
];

function getProductById(id) {
    return products.find(p => p.id === id);
}
