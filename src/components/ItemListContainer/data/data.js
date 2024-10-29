const products = [
    {
        id: 1,
        name: 'Dragon Ball',
        description: 'Dragon Ball es un legendario manga de Akira Toriyama que sigue a Goku en su búsqueda de las Dragon Balls, esferas que conceden deseos. A lo largo de su viaje, enfrenta poderosos enemigos y se convierte en un guerrero excepcional.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Dragon-ball-0.webp', '/img/shonen/Dragon-ball-1.jpg']
    },
    {
        id: 2,
        name: 'One Piece',
        description: 'One Piece es un popular manga creado por Eiichiro Oda que sigue las aventuras de Monkey D. Luffy, un joven pirata con el poder de estirarse como goma. Luffy y su tripulación navegan en busca del legendario tesoro conocido como "One Piece" para que Luffy pueda convertirse en el Rey de los Piratas.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/One-piece-0.webp','/img/shonen/One-piece-1.jpg']
    },
    {
        id: 3,
        name: 'Naruto',
        description: 'Naruto es un icónico manga de Masashi Kishimoto que sigue la historia de Naruto Uzumaki, un joven ninja decidido a convertirse en el Hokage, el líder de su aldea, mientras lucha por ganar el respeto de los demás. A lo largo de su viaje, enfrenta enemigos poderosos, descubre sus raíces y forja vínculos fuertes con sus compañeros.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Naruto-0.jpg','/img/shonen/Naruto-1.jpg']
    },
    {
        id: 4,
        name: 'Black Clover',
        description: 'Black Clover es un manga de Yūki Tabata que sigue a Asta, un joven sin habilidades mágicas en un mundo donde la magia lo es todo. A pesar de esto, Asta sueña con convertirse en el Rey Mago. Con la ayuda de su grimorio único y sus amigos, lucha para superar desafíos mágicos.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Black-clover-0.webp', '/img/shonen/Black-clover-1.jpg']
    },
    {
        id: 5,
        name: 'Shingeki no Kyojin',
        description: 'Shingeki no Kyojin (Attack on Titan) es un oscuro y emocionante manga de Hajime Isayama que narra la lucha de la humanidad contra los gigantescos Titanes, seres que devoran humanos. La historia sigue a Eren Jaeger y sus amigos mientras descubren secretos oscuros sobre los Titanes y el mundo que los rodea.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Shingeki-no-kyojin-0.webp', '/img/shonen/Shingeki-no-kyojin-1.webp']
    },
    {
        id: 19,
        name: 'My Hero Academia',
        description: 'My Hero Academia es un manga de Kōhei Horikoshi que sigue a Izuku Midoriya, un joven sin superpoderes en un mundo donde la mayoría de la población los posee. A pesar de esto, sueña con convertirse en un héroe y proteger a los demás. Gracias a su determinación y la ayuda de su mentor All Might, Izuku entra en la academia de héroes y se enfrenta a desafíos para lograr su meta.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/My-hero-academia-0.webp']
    },
    {
        id: 20,
        name: 'Bleach',
        description: 'Bleach es un manga de Tite Kubo que sigue la historia de Ichigo Kurosaki, un joven que accidentalmente obtiene los poderes de un Shinigami (dios de la muerte). A partir de ese momento, se convierte en protector de la humanidad y lucha contra espíritus malignos conocidos como Hollows, descubriendo a su vez los secretos de los mundos espirituales.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Bleach-0.webp']
    },
    {
        id: 21,
        name: 'Hunter x Hunter',
        description: 'Hunter x Hunter es un manga de Yoshihiro Togashi que sigue las aventuras de Gon Freecss, un joven que aspira a convertirse en un "Hunter" para encontrar a su padre, un legendario cazador. En su viaje, Gon enfrenta desafíos y hace amigos mientras descubre misterios y amenazas en el mundo de los Hunters.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Hunter-x-hunter-0.jpg']
    },
    {
        id: 22,
        name: 'Fairy Tail',
        description: 'Fairy Tail es un manga de Hiro Mashima que narra las aventuras de Lucy Heartfilia, una joven maga que se une al gremio Fairy Tail, famoso por sus excéntricos y poderosos miembros. Junto a Natsu Dragneel y sus amigos, luchan contra amenazas mágicas y protegen a sus seres queridos mientras fortalecen sus lazos de amistad.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Fairy-tail-0.jpg']
    },
    {
        id: 23,
        name: 'Demon Slayer',
        description: 'Demon Slayer (Kimetsu no Yaiba) es un manga de Koyoharu Gotouge que sigue la historia de Tanjiro Kamado, un joven que se convierte en cazador de demonios para vengar a su familia y salvar a su hermana Nezuko, quien fue convertida en demonio. En su viaje, Tanjiro enfrenta peligrosos demonios y forma lazos con otros cazadores en su búsqueda de justicia y redención.',
        category: 'Shonen',
        price: 5000,
        stock: 10,
        image: ['/img/shonen/Demon-slayer-0.jpg']
    },
    {
        id: 6,
        name: "Vagabond",
        description: "Vagabond es un aclamado manga de Takehiko Inoue que sigue la vida de Musashi Miyamoto, un legendario espadachín. A través de intensos combates y profundas reflexiones, explora el camino de la maestría y la soledad del guerrero.",
        category: "Seinen",
        price: 5200,
        stock: 10,
        image: ["/img/seinen/Vagabond.jpg"]
    },
    {
        id: 7,
        name: "Vinland Saga",
        description: "Vinland Saga, creado por Makoto Yukimura, narra la historia de Thorfinn, un joven guerrero vikingo que busca venganza mientras explora el conflicto entre la guerra y la paz. Con acción épica y profundas tramas, es un clásico del manga histórico.",
        category: "Seinen",
        price: 5100,
        stock: 10,
        image: ["/img/seinen/Vinland-saga.jpg"]
    },
    {
        id: 8,
        name: "Berserker",
        description: "Berserker es un oscuro manga de Kentaro Miura que sigue a Guts, un guerrero solitario en un mundo de violencia y fantasía. Con intensas batallas, temas de destino y tragedia, Berserk es un referente en el género de fantasía oscura.",
        category: "Seinen",
        price: 5500,
        stock: 10,
        image: ["/img/seinen/Berserker.webp"]
    },
    {
        id: 9,
        name: "Monster",
        description: "Monster, de Naoki Urasawa, es un thriller psicológico que sigue al doctor Kenzo Tenma, quien se ve envuelto en una caza mortal de un asesino en serie. Con una trama intrincada y suspense, Monster es una obra maestra del género.",
        category: "Seinen",
        price: 5300,
        stock: 10,
        image: ["/img/seinen/Monster.webp"]
    },
    {
        id: 10,
        name: "Tokyo Ghoul",
        description: "Tokyo Ghoul es un oscuro manga de Sui Ishida que sigue a Ken Kaneki, un joven convertido en ghoul, criaturas que se alimentan de humanos. Mientras lucha por mantener su humanidad, la serie explora temas de identidad y supervivencia.",
        category: "Seinen",
        price: 4900,
        stock: 10,
        image: ["/img/seinen/Tokyo-ghoul.jpg"]
    },
    {
        id: 24,
        name: 'Akira',
        description: 'Akira es un revolucionario manga de Katsuhiro Otomo que presenta un futuro post-apocalíptico en Neo-Tokio, donde Kaneda, un líder de pandillas, se enfrenta a poderes psíquicos desatados. La obra explora temas de poder, corrupción y los límites de la humanidad.',
        category: 'Seinen',
        price: 5600,
        stock: 10,
        image: ['/img/seinen/Akira.jpg']
    },
    {
        id: 25,
        name: '20th Century Boys',
        description: '20th Century Boys es un manga de Naoki Urasawa que sigue a un grupo de amigos que luchan contra una secta que busca controlar el mundo. A medida que el pasado y el presente se entrelazan, los protagonistas deben resolver el misterio de un símbolo que crearon en su infancia.',
        category: 'Seinen',
        price: 5300,
        stock: 10,
        image: ['/img/seinen/20th-century-boys.jpg']
    },
    {
        id: 26,
        name: 'Hellsing',
        description: 'Hellsing, creado por Kouta Hirano, sigue la historia de la organización Hellsing, dedicada a eliminar amenazas sobrenaturales en Inglaterra. La historia se centra en Alucard, un poderoso vampiro, y su lucha contra seres oscuros en un mundo de violencia y conspiración.',
        category: 'Seinen',
        price: 5100,
        stock: 10,
        image: ['/img/seinen/Hellsing.jpg']
    },
    {
        id: 11,
        name: "Noblesse",
        description: "Noblesse es un manhwa que sigue a Cadis Etrama di Raizel, un noble vampiro que despierta después de 820 años y se enfrenta a organizaciones secretas y enemigos sobrenaturales. Con una mezcla de acción y elementos sobrenaturales, es un viaje fascinante de amistad y poder.",
        category: "Manhwa",
        price: 4800,
        stock: 10,
        image: ["/img/manwha/Noblesse.jpg"]
    },
    {
        id: 12,
        name: "Omniscient Reader's Viewpoint",
        description: "Omniscient Reader's Viewpoint sigue a Kim Dokja, un lector que se encuentra atrapado en el mundo de su novela favorita. Con la capacidad de ver los eventos desde una perspectiva única, debe usar su conocimiento para sobrevivir en un mundo lleno de peligros.",
        category: "Manhwa",
        price: 4900,
        stock: 10,
        image: ["/img/manwha/Omniscient-readers-viewpoint.webp"]
    },
    {
        id: 13,
        name: "Solo Leveling",
        description: "Solo Leveling narra la historia de Sung Jin-Woo, un cazador de bajo nivel que obtiene la habilidad de subir de nivel y convertirse en el más poderoso. Con emocionantes batallas y un sistema de juego fascinante, este manhwa ha capturado la atención de muchos fanáticos.",
        category: "Manhwa",
        price: 5000,
        stock: 10,
        image: ["/img/manwha/Solo-leveling.jpg"]
    },
    {
        id: 14,
        name: "The God of High School",
        description: "The God of High School sigue a Jin Mori, un artista marcial que participa en un torneo para determinar quién es el más fuerte. Con intensas peleas y una trama que involucra dioses y poderes sobrenaturales, este manhwa combina acción y mitología de manera impresionante.",
        category: "Manhwa",
        price: 4700,
        stock: 10,
        image: ["/img/manwha/The-god-of-highschool.jpg"]
    },
    {
        id: 15,
        name: "Tower of God",
        description: "Tower of God sigue a Bam, un joven que entra a una misteriosa torre donde los deseos se cumplen. En su ascenso, enfrenta desafíos y conoce a diversos personajes mientras busca a su amiga. Con una trama intrigante y un mundo vasto, es un viaje épico de aventura y autodescubrimiento.",
        category: "Manhwa",
        price: 5100,
        stock: 10,
        image: ["/img/manwha/Tower-of-god.webp"]
    },
    {
        id: 16,
        name: "Yuji Itadori",
        description: "Figura coleccionable de Yuji Itadori",
        category: "Collection",
        price: 7500,
        stock: 10,
        image: ["/img/collection/itadori-0.webp", "/img/collection/itadori-1.webp", "/img/collection/itadori-2.webp"]
    },
    {
        id: 17,
        name: "sasuke",
        description: "Figura coleccionable de Sasuke",
        category: "Collection",
        price: 7000,
        stock: 10,
        image: ["/img/collection/sasuke-0.webp", "/img/collection/sasuke-1.webp", "/img/collection/sasuke-2.webp"]
    },
    {
        id: 18,
        name: "Goku & Frieza",
        description: "Figura coleccionable de Goku y Frieza",
        category: "Collection",
        price: 12000,
        stock: 10,
        image: ["/img/collection/goku-frieza-0.jpg", "/img/collection/goku-frieza-1.jpg", "/img/collection/goku-frieza-2.jpg"]
    }
]
const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)              
    })
}
const getProductById = (idProduct) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(idProduct)))
        }, 2000);                      
    })
}
export { getProducts, getProductById }