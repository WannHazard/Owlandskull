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
                images: ["Diseños/OwlandSkull letras/DSC09739.jpg", "Diseños/OwlandSkull letras/DSC09742.jpg", "Diseños/OwlandSkull letras/DSC09812.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/OwlandSkull letras/DSC09760.jpg", "Diseños/OwlandSkull letras/DSC09764.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/OwlandSkull letras/DSC09767.jpg", "Diseños/OwlandSkull letras/DSC09782.jpg"]
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
                images: ["Diseños/OwlSkull/Set-Owlandskull-7.jpg", "Diseños/OwlSkull/DSC_2193.JPG", "Diseños/OwlSkull/OWL-fighter-29.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/OwlSkull/DSC_1907.JPG", "Diseños/OwlSkull/Set-Owlandskull-26.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/OwlSkull/Set-Owlandskull-31.jpg", "Diseños/OwlSkull/OWL-fighter-28.jpg"]
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
                images: ["Diseños/Chicano/DSC_1559.jpg", "Diseños/Chicano/DSC_1560.jpg", "Diseños/Chicano/DSC_1611.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/Chicano/DSC_1570.jpg", "Diseños/Chicano/DSC_1738.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/Chicano/DSC_1661.jpg", "Diseños/Chicano/DSC_1664.jpg"]
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
                images: ["Diseños/BoxingClub/DSC_1510.jpg", "Diseños/BoxingClub/DSC_1513.jpg", "Diseños/BoxingClub/DSC_1386.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/BoxingClub/DSC_1522.jpg", "Diseños/BoxingClub/DSC_1531.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/BoxingClub/Set-Owlandskull-8.jpg", "Diseños/BoxingClub/OWL-fighter-24.jpg"]
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
                images: ["Diseños/FightFest 2019/OWL-fighter-1.jpg", "Diseños/FightFest 2019/OWL-fighter-11.jpg", "Diseños/FightFest 2019/OWL-fighter-2.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/FightFest 2019/OWL-fighter-12.jpg", "Diseños/FightFest 2019/OWL-fighter-8.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/FightFest 2019/OWL-fighter-11.jpg"]
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
                images: ["Diseños/BJJ/Set-Owlandskull-40.jpg", "Diseños/BJJ/Set-Owlandskull-42 (1).jpg", "Diseños/BJJ/Set-Owlandskull-43 (1).jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Diseños/BJJ/Set-Owlandskull-42 (1).jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Diseños/BJJ/Set-Owlandskull-43 (1).jpg"]
            }
        ]
    },
    {
        id: "shorts",
        name: "EQUIPAMIENTO",
        category: "EQUIPAMIENTO",
        description: "Equipamiento de alta resistencia para el entrenamiento más exigente.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "GRIS"],
        variants: [
            {
                type: "SHORT DEPORTIVO",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1245.jpg"]
            },
            {
                type: "PANTALÓN BUZO",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1653.jpg"]
            },
            {
                type: "POLERÓN RESILIENCE",
                price: 28990,
                images: ["Imagenes/Nueva carpeta/DSC_1680.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-40.jpg"]
            }
        ]
    }
];

function getProductById(id) {
    return products.find(p => p.id === id);
}
