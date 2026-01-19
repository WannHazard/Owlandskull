const products = [
    {
        id: "classic",
        name: "OWLSKULL CLASSIC",
        category: "POLERAS",
        description: "El diseño original de Owl & Skull con tipografía clásica. Esencia underground y estilo atemporal.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Diseños/OwlandSkull letras/owlskull-classic-polera-img1.jpg", "Diseños/OwlandSkull letras/owlskull-classic-polera-img2.jpg", "Diseños/OwlandSkull letras/owlskull-classic-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/OwlandSkull letras/owlskull-classic-polera-img4.jpg", "Diseños/OwlandSkull letras/owlskull-classic-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/OwlandSkull letras/owlskull-classic-polera-img6.jpg", "Diseños/OwlandSkull letras/owlskull-classic-polera-img7.jpg"]
            }
        ]
    },
    {
        id: "owlskull",
        name: "OWLSKULL",
        category: "POLERAS",
        description: "Identidad pura. El logo que define nuestra marca en su máxima expresión. Potencia visual en cada detalle.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Diseños/OwlSkull/owlskull-polera-img1.jpg", "Diseños/OwlSkull/owlskull-polera-img2.jpg", "Diseños/OwlSkull/owlskull-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/OwlSkull/owlskull-polera-img4.jpg", "Diseños/OwlSkull/owlskull-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/OwlSkull/owlskull-polera-img6.jpg", "Diseños/OwlSkull/owlskull-polera-img7.jpg"]
            }
        ]
    },
    {
        id: "chicano",
        name: "CHICANO",
        category: "POLERAS",
        description: "Inspirado en el arte Chicano y la cultura lowrider. Fuerza, herencia y un estilo único que marca la diferencia.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Diseños/Chicano/chicano-polera-img1.jpg", "Diseños/Chicano/chicano-polera-img2.jpg", "Diseños/Chicano/chicano-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/Chicano/chicano-polera-img4.jpg", "Diseños/Chicano/chicano-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/Chicano/chicano-polera-img6.jpg", "Diseños/Chicano/chicano-polera-img7.jpg"]
            }
        ]
    },
    {
        id: "boxing",
        name: "BOXING OWL",
        category: "POLERAS",
        description: "Para los amantes del Sweet Science. Estilo directo, crudo y sin rodeos. Espíritu de club de boxeo.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Diseños/BoxingClub/boxing-owl-polera-img1.jpg", "Diseños/BoxingClub/boxing-owl-polera-img2.jpg", "Diseños/BoxingClub/boxing-owl-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/BoxingClub/boxing-owl-polera-img4.jpg", "Diseños/BoxingClub/boxing-owl-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/BoxingClub/boxing-owl-polera-img6.jpg", "Diseños/BoxingClub/boxing-owl-polera-img7.jpg"]
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
                price: 14990,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img1.jpg", "Diseños/FightFest 2019/fight-fest-polera-img2.jpg", "Diseños/FightFest 2019/fight-fest-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img4.jpg", "Diseños/FightFest 2019/fight-fest-polera-img5.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/FightFest 2019/fight-fest-polera-img2.jpg"]
            }
        ]
    },
    {
        id: "bjj",
        name: "BJJ O&S",
        category: "POLERAS",
        description: "Diseñado para los guerreros del tatami. Resistencia, técnica y disciplina en cada fibra.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Diseños/BJJ/bjj-os-polera-img1.jpg", "Diseños/BJJ/bjj-os-polera-img2.jpg", "Diseños/BJJ/bjj-os-polera-img3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/BJJ/bjj-os-polera-img2.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/BJJ/bjj-os-polera-img3.jpg"]
            }
        ]
    }
];

function getProductById(id) {
    return products.find(p => p.id === id);
}
