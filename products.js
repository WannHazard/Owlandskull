const products = [
    {
        id: "classic",
        name: "CLÁSICO",
        category: "CLÁSICO",
        description: "El diseño original que lo empezó todo. Algodón premium de alto gramaje para soportar el día a día y el entrenamiento duro.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1256.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-1.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-3.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1323.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-7.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1531.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-8.jpg"]
            }
        ]
    },
    {
        id: "resilience",
        name: "RESILIENCIA",
        category: "RESILIENCIA",
        description: "La resiliencia no es una opción, es una necesidad. Diseño inspirado en la capacidad de levantarse una y otra vez.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1242.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-14.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1253.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-18.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1243.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-23.jpg"]
            }
        ]
    },
    {
        id: "fighter",
        name: "FIGHTER",
        category: "FIGHTER",
        description: "Para los que pelean dentro y fuera del ring. Espíritu de lucha en cada costura.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1304.jpg", "Imagenes/Nueva carpeta/OWL-fighter-13.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1305.jpg", "Imagenes/Nueva carpeta/OWL-fighter-14.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1306.jpg", "Imagenes/Nueva carpeta/OWL-fighter-25.jpg"]
            }
        ]
    },
    {
        id: "dirty",
        name: "DIRTY BOXING",
        category: "DIRTY BOXING",
        description: "Dirty Boxing: donde las reglas se rompen y solo importa ganar. Estilo urbano y crudo.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1319.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-26.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1330.jpg", "Imagenes/Nueva carpeta/Set-Owlandskull-28.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1352.JPG", "Imagenes/Nueva carpeta/Set-Owlandskull-31.jpg"]
            }
        ]
    },
    {
        id: "underground",
        name: "UNDERGROUND",
        category: "UNDERGROUND",
        description: "Desde las sombras. Para aquellos que construyen en silencio.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1386.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1532.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1536.jpg"]
            }
        ]
    },
    {
        id: "skull",
        name: "SKULL & BONES",
        category: "SKULL & BONES",
        description: "Huesos y determinación. Un recordatorio de nuestra mortalidad y nuestra fuerza.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1538.jpg"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_1678.jpg"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_1679.jpg"]
            }
        ]
    },
    {
        id: "ethos",
        name: "ETHOS",
        category: "ETHOS",
        description: "Nuestro credo hecho prenda. Viste tus principios.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["NEGRO", "BLANCO"],
        variants: [
            {
                type: "MANGA CORTA",
                price: 14990,
                images: ["Imagenes/Nueva carpeta/DSC_1906.JPG"]
            },
            {
                type: "MANGA LARGA",
                price: 16990,
                images: ["Imagenes/Nueva carpeta/DSC_2001.JPG"]
            },
            {
                type: "SIN MANGA",
                price: 15990,
                images: ["Imagenes/Nueva carpeta/DSC_2003.JPG"]
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
