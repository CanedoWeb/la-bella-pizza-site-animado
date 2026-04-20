// Este arquivo contém todas as pizzas extraídas do cardápio físico.
// As imagens estão usando placeholders das disponíveis na pasta assets.
// O tamanho "Grande 35 cm" foi mantido como padrão para os displays iniciais nos cartões pequenos
// (o JavaScript principal vai usar o index 1 do array de price se a matriz tiver quatro tamanhos e assim por diante).

let pizzaJson = [
    // --- CATEGORIA 1: R$ 54,90 à R$ 86,90 ---
    {
        id: 1,
        category: 'Pizzas Tradicionais',
        name: 'Muçarela',
        img: 'assets/img/pizza calabresa.png',
        price: [54.90, 64.90, 76.90, 86.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Molho de tomate italiano, muçarela e orégano'
    },

    // --- CATEGORIA 2: R$ 62,90 à R$ 93,90 ---
    {
        id: 2,
        category: 'Pizzas Tradicionais',
        name: 'Atum',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Atum, azeitona preta e cebola'
    },
    {
        id: 3,
        category: 'Pizzas Tradicionais',
        name: 'Alho Torrado',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Alho torrado'
    },
    {
        id: 4,
        category: 'Pizzas Tradicionais',
        name: 'Calabresa',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa'
    },
    {
        id: 5,
        category: 'Pizzas Tradicionais',
        name: 'Margherita',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Tomate, burrata e manjericão fresco'
    },
    {
        id: 6,
        category: 'Pizzas Tradicionais',
        name: 'Presunto',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto'
    },
    {
        id: 7,
        category: 'Pizzas Tradicionais',
        name: 'Três Queijos',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Requeijão cremoso e parmesão'
    },
    {
        id: 8,
        category: 'Pizzas Tradicionais',
        name: 'Americana',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Bacon torrado, ovo e cebola'
    },
    {
        id: 9,
        category: 'Pizzas Tradicionais',
        name: 'Alho e Parmesão',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Tomate, alho torrado, parmesão e azeite'
    },
    {
        id: 10,
        category: 'Pizzas Tradicionais',
        name: 'Bacon',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Bacon, cebola e alho torrado'
    },
    {
        id: 11,
        category: 'Pizzas Tradicionais',
        name: 'Baiana',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa picante, ovos, pimenta biquinho e cebola'
    },
    {
        id: 12,
        category: 'Pizzas Tradicionais',
        name: 'Calabresa c/ Cebola',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa e cebola'
    },
    {
        id: 13,
        category: 'Pizzas Tradicionais',
        name: 'Calabresa c/ Catupiry',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa e requeijão cremoso'
    },
    {
        id: 14,
        category: 'Pizzas Tradicionais',
        name: 'Frango c/ Catupiry',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Frango e requeijão cremoso'
    },
    {
        id: 15,
        category: 'Pizzas Tradicionais',
        name: 'Fiorentina',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, champignon e azeitona preta'
    },
    {
        id: 16,
        category: 'Pizzas Tradicionais',
        name: 'La Bella',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Tomates, manjericão, parmesão e alho frito'
    },
    {
        id: 17,
        category: 'Pizzas Tradicionais',
        name: 'Presunto c/ Catupiry',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto e requeijão cremoso'
    },
    {
        id: 18,
        category: 'Pizzas Tradicionais',
        name: 'Presunto c/ Champignon',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto e champignon'
    },
    {
        id: 19,
        category: 'Pizzas Tradicionais',
        name: '3 Porquinhos',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa, presunto e bacon'
    },
    {
        id: 20,
        category: 'Pizzas Tradicionais',
        name: 'Portuguesa',
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, calabresa, pimentão, azeitona preta, ovo e cebola'
    },
    {
        id: 21,
        category: 'Pizzas Tradicionais',
        name: 'Quatro Queijos',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Gorgonzola, requeijão cremoso e parmesão'
    },
    {
        id: 22,
        category: 'Pizzas Tradicionais',
        name: 'Romanesca',
        img: 'assets/img/pizza calabresa.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, champignon, bacon e requeijão cremoso'
    },
    {
        id: 23,
        category: 'Pizzas Tradicionais',
        name: "Salaminho D'Itália",
        img: 'assets/img/pizza brasileira.png',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Salaminho e cebola'
    },
    {
        id: 24,
        category: 'Pizzas Tradicionais',
        name: 'Siciliana',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [62.90, 69.90, 86.90, 93.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa, champignon e alho'
    },

    // --- CATEGORIA 3: R$ 68,90 à R$ 96,90 ---
    {
        id: 25,
        category: 'Pizzas Tradicionais',
        name: 'À Moda do Pizzaiolo',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense, champignon e provolone'
    },
    {
        id: 26,
        category: 'Pizzas Tradicionais',
        name: 'À Moda do Cheff',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa, bacon, tomate e cebola'
    },
    {
        id: 27,
        category: 'Pizzas Tradicionais',
        name: 'Gorgonzola',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Gorgonzola e champignon'
    },
    {
        id: 28,
        category: 'Pizzas Tradicionais',
        name: 'Imperial',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense, palmito, champignon, ervilha e tomate'
    },
    {
        id: 29,
        category: 'Pizzas Tradicionais',
        name: 'Italiana',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Calabresa, bacon, requeijão cremoso e cebola'
    },
    {
        id: 30,
        category: 'Pizzas Tradicionais',
        name: 'Lombo Canadense c/ Catupiry',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense e requeijão cremoso'
    },
    {
        id: 31,
        category: 'Pizzas Tradicionais',
        name: 'Lombo à Moda',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense, champignon, ovo, requeijão cremoso e azeitonas pretas'
    },
    {
        id: 32,
        category: 'Pizzas Tradicionais',
        name: 'Lombo Canadense',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense e azeitona preta'
    },
    {
        id: 33,
        category: 'Pizzas Tradicionais',
        name: 'Mista',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, calabresa, tomate e azeitona preta'
    },
    {
        id: 34,
        category: 'Pizzas Tradicionais',
        name: 'Napolitana',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Tomate, parmesão e azeitona preta'
    },
    {
        id: 35,
        category: 'Pizzas Tradicionais',
        name: 'Palmito c/ Champignon',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Palmito e champignon'
    },
    {
        id: 36,
        category: 'Pizzas Tradicionais',
        name: 'Peito de Peru c/ Catupiry',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Peito de peru e requeijão cremoso'
    },
    {
        id: 37,
        category: 'Pizzas Tradicionais',
        name: 'Peito de Peru c/ Champignon',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Peito de peru defumado, champignon, bacon, parmesão e requeijão cremoso'
    },
    {
        id: 38,
        category: 'Pizzas Tradicionais',
        name: 'Peito de Peru c/ Palmito',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Peito de peru e palmito'
    },
    {
        id: 39,
        category: 'Pizzas Tradicionais',
        name: 'Pepperoni',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Pepperoni, azeitona preta e cebola'
    },
    {
        id: 40,
        category: 'Pizzas Tradicionais',
        name: 'Presunto c/ Ovos',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, ovo, champignon e azeitona preta'
    },
    {
        id: 41,
        category: 'Pizzas Tradicionais',
        name: 'Primavera',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Presunto, palmito, champignon e provolone'
    },
    {
        id: 42,
        category: 'Pizzas Tradicionais',
        name: 'Saborosa',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Peito de peru, tomate, alho poró, cebola e requeijão cremoso'
    },
    {
        id: 43,
        category: 'Pizzas Tradicionais',
        name: 'Tomate Sêco c/ Rúcula',
        img: 'assets/img/pizza calabresa.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Tomate seco e rúcula'
    },
    {
        id: 44,
        category: 'Pizzas Tradicionais',
        name: 'Vitello',
        img: 'assets/img/pizza brasileira.png',
        price: [68.90, 76.90, 89.90, 96.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Lombo canadense, ovo, alho frito, parmesão e requeijão cremoso'
    },

    // --- CATEGORIA 4: R$ 73,90 à R$ 103,90 ---
    {
        id: 45,
        category: 'Pizzas Tradicionais',
        name: 'Brócolis',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [73.90, 77.90, 96.90, 103.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Gorgonzola e brócolis'
    },
    {
        id: 46,
        category: 'Pizzas Tradicionais',
        name: '5 Queijos',
        img: 'assets/img/pizza calabresa.png',
        price: [73.90, 77.90, 96.90, 103.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Gorgonzola, provolone, requeijão cremoso e parmesão'
    },
    {
        id: 47,
        category: 'Pizzas Tradicionais',
        name: 'Requintada',
        img: 'assets/img/pizza brasileira.png',
        price: [73.90, 77.90, 96.90, 103.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Peito de peru, lombo canadense, tomate, palmito, parmesão e rúcula'
    },

    // --- CATEGORIA 5: R$ 75,90 à R$ 105,90 ---
    {
        id: 48,
        category: 'Pizzas Tradicionais',
        name: 'Camarão c/ Catupiry',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [75.90, 82.90, 99.90, 105.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Camarão e requeijão cremoso'
    },
    {
        id: 49,
        category: 'Pizzas Tradicionais',
        name: 'Camarão do Cheff',
        img: 'assets/img/pizza calabresa.png',
        price: [75.90, 82.90, 99.90, 105.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Camarão, alho poró e tomate'
    },
    {
        id: 50,
        category: 'Pizzas Tradicionais',
        name: 'Shitake 1',
        img: 'assets/img/pizza brasileira.png',
        price: [75.90, 82.90, 99.90, 105.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Shitake refogado, alho poró e azeitona preta'
    },
    {
        id: 51,
        category: 'Pizzas Tradicionais',
        name: 'Shitake 2',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [75.90, 82.90, 99.90, 105.90],
        sizes: ['Média 30 cm', 'Grande 35 cm', 'Super 40 cm', 'Max 45 cm'],
        description: 'Shitake refogado, gorgonzola, alho poró e azeitona preta'
    },

    // --- PIZZAS DOCES: R$ 44,90 à R$ 54,90 (Apenas Média e Grande) ---
    {
        id: 52,
        category: 'Pizzas Doces',
        name: 'Banana c/ Canela',
        img: 'assets/img/pizza calabresa.png',
        price: [44.90, 49.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Muçarela, banana, canela e açúcar'
    },
    {
        id: 53,
        category: 'Pizzas Doces',
        name: 'Brigadeiro',
        img: 'assets/img/pizza brasileira.png',
        price: [47.90, 51.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate e granulado'
    },
    {
        id: 54,
        category: 'Pizzas Doces',
        name: 'Brigadeiro Especial',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [49.90, 54.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate, granulado e muçarela'
    },
    {
        id: 55,
        category: 'Pizzas Doces',
        name: 'Chocolate c/ Banana',
        img: 'assets/img/pizza calabresa.png',
        price: [47.90, 51.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate e banana'
    },
    {
        id: 56,
        category: 'Pizzas Doces',
        name: 'Chocolate c/ Morango',
        img: 'assets/img/pizza brasileira.png',
        price: [49.90, 54.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate e morango'
    },
    {
        id: 57,
        category: 'Pizzas Doces',
        name: 'Festa',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [49.90, 54.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate e confete de chocolate'
    },
    {
        id: 58,
        category: 'Pizzas Doces',
        name: 'Prestígio',
        img: 'assets/img/pizza calabresa.png',
        price: [49.90, 54.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Chocolate e coco ralado'
    },
    {
        id: 59,
        category: 'Pizzas Doces',
        name: 'Romeu e Julieta',
        img: 'assets/img/pizza brasileira.png',
        price: [44.90, 49.90],
        sizes: ['Média 30 cm', 'Grande 35 cm'],
        description: 'Goiabada cremosa e requeijão cremoso'
    },

    // --- PIZZAS GOURMET: R$ 98,90 à R$ 104,90 (Apenas Grande) ---
    {
        id: 60,
        category: 'Pizzas Gourmet',
        name: 'Abobrinha Natural',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [98.90],
        sizes: ['Grande 35 cm'],
        description: 'Abobrinha fresca, alho poró, requeijão cremoso, pesto e manjericão'
    },
    {
        id: 61,
        category: 'Pizzas Gourmet',
        name: 'Burrata',
        img: 'assets/img/pizza calabresa.png',
        price: [98.90],
        sizes: ['Grande 35 cm'],
        description: 'Tomate cereja, burrata, manjericão, pesto e orégano'
    },
    {
        id: 62,
        category: 'Pizzas Gourmet',
        name: 'Caprese',
        img: 'assets/img/pizza brasileira.png',
        price: [98.90],
        sizes: ['Grande 35 cm'],
        description: 'Tomate cereja, azeitona preta e manjericão'
    },
    {
        id: 63,
        category: 'Pizzas Gourmet',
        name: 'Gorgonzola c/ Pêra',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [98.90],
        sizes: ['Grande 35 cm'],
        description: 'Gorgonzola, pêra e um leve toque de geleia de pimenta'
    },
    {
        id: 64,
        category: 'Pizzas Gourmet',
        name: 'Margherita de Sevóia',
        img: 'assets/img/pizza calabresa.png',
        price: [104.90],
        sizes: ['Grande 35 cm'],
        description: 'Cubos de muçarela de bufúla, tomate cereja e manjericão'
    },
    {
        id: 65,
        category: 'Pizzas Gourmet',
        name: 'Parma',
        img: 'assets/img/pizza brasileira.png',
        price: [104.90],
        sizes: ['Grande 35 cm'],
        description: 'Presunto serrano, parmesão e rúcula'
    },
    {
        id: 66,
        category: 'Pizzas Gourmet',
        name: 'Paluza de Roni',
        img: 'assets/img/pizza frango catupiry.webp',
        price: [104.90],
        sizes: ['Grande 35 cm'],
        description: 'Peito de peru, alho poró, tomate cereja, azeitona preta, manjericão e orégano'
    },
    {
        id: 67,
        category: 'Combos',
        name: 'Combo Super + Doce + Refri',
        img: '',
        price: [120.00],
        sizes: ['1 Super + 1 Média Doce 30cm + 1 Refri'],
        description: 'Combo 01: 1 Super + 1 Média Doce 30cm + 1 Refri'
    },
    {
        id: 68,
        category: 'Combos',
        name: 'Combo 2 Grandes + Refri',
        img: '',
        price: [120.00],
        sizes: ['2 Grandes + Refri'],
        description: 'Combo 02: 2 Grandes + Refri'
    },
    {
        id: 69,
        category: 'Bebidas',
        name: 'Coca-Cola',
        img: 'assets/img/logo.webp',
        price: [8.00, 14.00],
        sizes: ['600ml', '2L'],
        description: 'Refrigerante Coca-Cola geladinho'
    },
    {
        id: 70,
        category: 'Bebidas',
        name: 'Pepsi',
        img: 'assets/img/logo.webp',
        price: [8.00, 14.00],
        sizes: ['600ml', '2L'],
        description: 'Refrigerante Pepsi geladinho'
    },
    {
        id: 71,
        category: 'Bebidas',
        name: 'Guaraná Antarctica',
        img: 'assets/img/logo.webp',
        price: [8.00, 14.00],
        sizes: ['600ml', '2L'],
        description: 'Refrigerante Guaraná Antarctica geladinho'
    },
    {
        id: 72,
        category: 'Bebidas',
        name: 'Sprite',
        img: 'assets/img/logo.webp',
        price: [8.00, 14.00],
        sizes: ['600ml', '2L'],
        description: 'Refrigerante Sprite geladinho'
    }
];