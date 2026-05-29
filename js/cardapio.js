const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

let modalKey = 0 //codigo de qual pizza ta mudando no modal 

let quantPizzas = 1 //controlar a qntt inicial de pizzas no modal

let cart = [] //carrinho

let pizzaPromoQuartaUm = [2, 6, 4, 5, 7, 8, 11, 14, 15, 20, 24]
let pizzaPromoQuartaDois = [26, 39, 29, 32, 42]

let termoAtual = ''

let categoriaAtual = 'all'

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if (valor) {
        return valor.toFixed(2)
    }
}

const abrirModal = () => {
    const area = seleciona('.pizzaWindowArea');
    const body = seleciona('.pizzaWindowBody');

    // Coloca display flex para ele existir na tela (invisível no inicio)
    area.style.display = 'flex';

    // Animação GSAP: Aparece o fundo escuro (fade in)
    gsap.to(area, { opacity: 1, duration: 0.3 });

    // Animação GSAP: Surge o Modal com efeito elástico de "Gelatina/Mola"
    // scale de 0.4 para 1 criando o movimento, com a ease "elastic.out(1, 0.5)"
    gsap.fromTo(body,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "elastic.out(1, 0.4)" }
    );


}

const fecharModal = () => {
    const area = seleciona('.pizzaWindowArea');
    const body = seleciona('.pizzaWindowBody');

    // Anima a janela para dar uma "encolhida e apagada" rapidamente
    gsap.to(body, {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in"
    });

    // Apaga o fundo escuro suavemente
    // O onComplete é a magia aqui: ele espera a animação acabar para tirar o elemento (display: none)
    // Se tirasse antes, a animação cortaria no meio!
    gsap.to(area, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            area.style.display = 'none';
        }
    });
}

const botoesFechar = () => {
    selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fecharModal)
    })

    // Adicionando evento de clique no fundo escuro para fechar o modal
    seleciona('.pizzaWindowArea').addEventListener('click', (e) => {
        if (e.target.classList.contains('pizzaWindowArea')) {
            fecharModal()
        }
    })
}

const preencheDadosPizza = (pizzaItem, item, index) => {
    pizzaItem.setAttribute('data-key', index) // ISSO AQUI FALTAVA!
    pizzaItem.querySelector(".card-pizza-img").src = item.img
    pizzaItem.querySelector(".card-title").innerHTML = item.name
    pizzaItem.querySelector(".card-price").innerHTML = `R$ ${item.price[0].toFixed(2).replace('.', ',')}`
}

const preencherDadosModal = (item) => {
    seleciona('.pizzaBig img').src = item.img
    seleciona('.pizzaInfo h1').innerHTML = item.name
    seleciona('.pizzaInfo--desc').innerHTML = item.description
    seleciona('.pizzaInfo--actualPrice').innerHTML = formatoReal(item.price[0])
}

const pegarKey = (e) => {
    //.closest reotnr o elemento mais proximo que tem a class que passamos
    //do .pizza-item. ele vai pegar o valor do atributo data-key

    let key = e.target.closest('.card').getAttribute('data-key')

    quantPizzas = 1

    modalKey = key

    return key
}

const preencherTamanhos = (key) => {
    let currentSelected = seleciona('.pizzaInfo--size.selected')
    if (currentSelected) currentSelected.classList.remove('selected')

    selecionaTodos('.pizzaInfo--size').forEach((size, sizeIndex) => {
        if (pizzaJson[key].sizes[sizeIndex]) {
            size.style.display = 'block'
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        } else {
            size.style.display = 'none'
        }
    })

    let allSizes = selecionaTodos('.pizzaInfo--size')
    if (pizzaJson[key].sizes[1]) {
        allSizes[1].classList.add('selected')
    } else {
        allSizes[0].classList.add('selected')
    }
}

const atualizaPreco = () => {
    //pega qual size ta com .selected(pega o index dele) e armazena em sizeIndex pra poder chamar
    //no price[]
    let sizeIndex = [...selecionaTodos('.pizzaInfo--size')].findIndex(size => size.classList.contains('selected'))
    //uas modalkey pq senao ia ter que botar parametro key, inclusive podia ter usado menos parametro key
    //e mais modalkey
    let precoBase = pizzaJson[modalKey].price[sizeIndex]

    let diaDaSemana = new Date().getDay()
    let quartaFeira = (diaDaSemana === 4)

    if (quartaFeira && sizeIndex === 1) {
        if (pizzaPromoQuartaUm.includes(pizzaJson[modalKey].id)) {
            precoBase -= 10
        } else if (pizzaPromoQuartaDois.includes(pizzaJson[modalKey].id)) {
            precoBase -= 11
        }
    }

    let total = precoBase * quantPizzas

    seleciona('.pizzaInfo--actualPrice').innerHTML = formatoReal(total)

}

const escolherTamanho = (key) => {
    selecionaTodos('.pizzaInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            seleciona('.pizzaInfo--size.selected').classList.remove('selected')

            size.classList.add('selected')

            atualizaPreco()
        })
    })
}

const mudarQuantidadeModal = () => {

    seleciona('.pizzaInfo--qtmais').addEventListener('click', () => {
        quantPizzas++
        seleciona('.pizzaInfo--qt').innerHTML = quantPizzas
        atualizaPreco()
    })

    seleciona('.pizzaInfo--qtmenos').addEventListener('click', () => {
        if (quantPizzas > 0) {
            quantPizzas--
            seleciona('.pizzaInfo--qt').innerHTML = quantPizzas
            atualizaPreco()

        }
    })

}

const abrirCarrinho = () => {
    if (cart.length > 0) {
        seleciona('aside').classList.add('show')
    }
    seleciona('.menu-openner').addEventListener('click', () => {
        seleciona('aside').classList.add('show')
    })
}

const fecharCarrinho = () => {
    // 1. Fechar clicando no 'X'
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').classList.remove('show')
    })

    // 2. A MÁGICA: Fechar clicando fora do Carrinho
    document.addEventListener('click', (e) => {
        const carrinhoAberto = seleciona('aside').classList.contains('show')

        if (carrinhoAberto) {
            if (!document.body.contains(e.target)) return
            // Verifica se o lugar que clicamos NÃO está dentro do Carrinho
            const clicouForaDoCarrinho = !e.target.closest('aside')
            // Proteção para não fechar o carrinho exatamente na hora que apertamos um botão de abrir ele
            const clicouNoBotaoAbrirCarrinho = e.target.closest('.menu-openner')
            const clicouNoAdicionar = e.target.closest('.pizzaInfo--addButton')

            if (clicouForaDoCarrinho && !clicouNoBotaoAbrirCarrinho && !clicouNoAdicionar) {
                seleciona('aside').classList.remove('show')
            }
        }
    })

    // 3. Fechar pelo botão de pedir mais pizzas
    const pedirMaisBtn = seleciona('.cart--pedirmais')
    if (pedirMaisBtn) {
        pedirMaisBtn.addEventListener('click', () => {
            seleciona('aside').classList.remove('show')
        })
    }
}

const adicionarNoCarrinho = () => {
    seleciona('.pizzaInfo--addButton').addEventListener('click', () => {

        // O 'size' é a letra ('P', 'M', 'G', 'Mx') pra salvar no carrinho e ficar bonito na tela depois
        let size = seleciona('.pizzaInfo--size.selected').getAttribute('data-key')

        // O 'sizeIndex' é o NÚMERO (0, 1, 2, 3) obrigatório para conseguir puxar o preço do array [P, M, G, Mx]!
        let sizeIndex = [...selecionaTodos('.pizzaInfo--size')].findIndex(size => size.classList.contains('selected'))

        let price = pizzaJson[modalKey].price[sizeIndex]

        let identificador = pizzaJson[modalKey].id + 't' + size

        let enderecoDaPizza = cart.findIndex((item) => item.identificador == identificador)

        // Maior que -1 conserta o bug fatal (Porque -1 no Javascript é tido como Verdadeiro e o IF quebrava!)
        if (enderecoDaPizza > -1) {
            cart[enderecoDaPizza].qt += quantPizzas
        } else {
            let pizzaNoCarrinho = {
                identificador,
                id: pizzaJson[modalKey].id,
                size: size,
                qt: quantPizzas,
                price: price // <-- Você tinha esquecido de colocar o preço no pacote!
            }
            cart.push(pizzaNoCarrinho)
        }
        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()

    })
}

const atualizarCarrinho = () => {
    let subtotal = 0
    let desconto = 0
    let total = 0

    let diaDaSemana = new Date().getDay()
    let quartaFeira = (diaDaSemana === 4)

    if (cart.length > 0) {
        seleciona('aside').classList.add('show')
        //so pra limpar por seguranca, dps adicionamos dnv
        seleciona('.cart').innerHTML = ''

        cart.forEach((itemDoCarrinho) => {

            let pizzaItem = pizzaJson.find((item) => item.id == itemDoCarrinho.id)

            let cartItem = seleciona('.models .cart--item').cloneNode(true)


            let pizzaName = `${pizzaItem.name} (${itemDoCarrinho.size})`

            cartItem.querySelector('.cart--item img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML = itemDoCarrinho.qt

            seleciona('.cart').append(cartItem)

            seleciona('.menu-openner span').innerHTML = cart.length

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                itemDoCarrinho.qt++
                atualizarCarrinho()
            })

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (itemDoCarrinho.qt > 1) {
                    itemDoCarrinho.qt--
                } else {
                    let indexDoItem = cart.findIndex(cartItem => cartItem.identificador === itemDoCarrinho.identificador)
                    cart.splice(indexDoItem, 1)
                    seleciona('.cart').innerHTML = ''
                    seleciona('.menu-openner span').innerHTML = 0
                    seleciona('.subtotal span:last-child').innerHTML = 'R$ --'
                    seleciona('.desconto span:last-child').innerHTML = 'R$ --'
                    seleciona('.total span:last-child').innerHTML = 'R$ --'
                }
                atualizarCarrinho()
            })
            seleciona('.cart').append(cartItem)

            subtotal += itemDoCarrinho.qt * itemDoCarrinho.price

            if (quartaFeira && itemDoCarrinho.size === 'M') {
                if (pizzaPromoQuartaUm.includes(itemDoCarrinho.id)) {
                    desconto += (itemDoCarrinho.qt * 10)
                } else if (pizzaPromoQuartaDois.includes(itemDoCarrinho.id)) {
                    desconto += (itemDoCarrinho.qt * 11)
                }
            }
        })

        //desconto = subtotal * 0.1
        total = subtotal - desconto

        seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
        seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
        seleciona('.total span:last-child').innerHTML = formatoReal(total)
    } else {
        seleciona('aside').classList.remove('show')
    }

}

const capturarDadosDoPedido = () => {
    let pedido = {
        itens: [],
        subtotal: 0,
        desconto: 0,
        total: 0
    }

    let diaDaSemana = new Date().getDay()
    let quartaFeira = (diaDaSemana === 4)

    cart.forEach((itemDoCarrinho) => {

        let pizzaItem = pizzaJson.find((item) => item.id == itemDoCarrinho.id)

        let pizzaName = pizzaItem.name
        let pizzaSize = itemDoCarrinho.size
        let pizzasQt = itemDoCarrinho.qt
        let pizzaPrice = itemDoCarrinho.price
        let pizzaTotal = 0

        pizzaTotal += pizzasQt * pizzaPrice

        pedido.itens.push(
            {
                nome: pizzaName,
                tamanho: pizzaSize,
                quantidade: pizzasQt,
                preco: pizzaPrice,
                totalPizza: pizzaTotal
            }
        )

        pedido.subtotal += pizzaTotal

        if (quartaFeira && itemDoCarrinho.size === 'M') {
            if (pizzaPromoQuartaUm.includes(itemDoCarrinho.id)) {
                pedido.desconto += (itemDoCarrinho.qt * 10)
            } else if (pizzaPromoQuartaDois.includes(itemDoCarrinho.id)) {
                pedido.desconto += (itemDoCarrinho.qt * 11)
            }
        }
    })
    
    pedido.total = pedido.subtotal - pedido.desconto
    return pedido
}

const abrirCheckout = () => {
    // 1. Oculta o carrinho lateral
    seleciona('aside').classList.remove('show')

    // 2 e 3. Prepara pro fade-in invisível
    seleciona('.checkoutWindowArea').style.opacity = 0
    seleciona('.checkoutWindowArea').style.display = 'flex'

    // 4. Animação mágica de pulo dps de 200ms
    setTimeout(() => {
        seleciona('.checkoutWindowArea').style.opacity = 1
        // Assim que a tela aparecer inteira, joga o cursor de digitação direto pro campo do Nome!
        seleciona('#checkout-nome').focus()
    }, 200)
}

const fecharCheckout = () => {
    // 1. O Form desliza pra ficar invisível primeiro
    seleciona('.checkoutWindowArea').style.opacity = 0

    // 2. A gente dá 500ms de tempo pro Fade-out acontecer e tira a janela do site
    setTimeout(() => {
        seleciona('.checkoutWindowArea').style.display = 'none'
    }, 500)
}

const configurarCheckout = () => {
    // === MÁGICA DO ENTER PARA PULAR DE LINHA ===
    let inputsFormulario = document.querySelectorAll('.checkout-form input, .checkout-form select')
    inputsFormulario.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault() // Evita que o Enter recarregue a página sem querer
                // Se não for o último campo, pula pro próximo
                if (index < inputsFormulario.length - 1) {
                    inputsFormulario[index + 1].focus()
                } else {
                    // Se for o último (Pagamento), já clica no botão Verde!
                    seleciona('.checkoutInfo--confirmButton').click()
                }
            }
        })
    })

    seleciona('.checkoutInfo--cancelMobileButton').addEventListener('click', () => {
        fecharCheckout()
        setTimeout(() => {
            seleciona('aside').classList.add('show')
        }, 300)
    })

    seleciona('.checkoutInfo--cancelButton').addEventListener('click', () => {
        fecharCheckout()
        setTimeout(() => {
            seleciona('aside').classList.add('show')
        }, 300)
    })

    // 1. O VIGIA DO CEP (Fora do botão confirmar!)
    let campoCep = seleciona('#checkout-cep')

    campoCep.addEventListener('input', () => {
        campoCep.value = campoCep.value.replace(/[^0-9]/g, "")
    })

    campoCep.addEventListener('blur', () => {
        if (campoCep.value.length !== 8) {
            alert('CEP inválido! O CEP deve conter 8 números.')
            return
        } else {
            fetch(`https://viacep.com.br/ws/${campoCep.value}/json/`)
                .then(resposta => {
                    if (!resposta.ok) {
                        throw new Error('Erro no status do servidor: ' + resposta.status)
                    }
                    return resposta.json();
                })
                .then(data => {
                    if (data.erro) {
                        alert('CEP não encontrado!')
                        return
                    } else {
                        // Sem forEach! Injetando os dados diretos da API pro HTML:
                        seleciona('#checkout-endereco').value = data.logradouro
                        seleciona('#checkout-bairro').value = data.bairro

                        // Foco automático no campo do Número
                        seleciona('#checkout-numero').focus()
                    }
                })
        }
    })

    // 2. O VIGIA DO BOTÃO CONFIRMAR
    seleciona('.checkoutInfo--confirmButton').addEventListener('click', () => {

        let nomePessoa = seleciona('#checkout-nome').value
        let telefonePessoa = seleciona('#checkout-telefone').value
        let enderecoPessoa = seleciona('#checkout-endereco').value
        let numeroCasaPessoa = seleciona('#checkout-numero').value
        let bairroPessoa = seleciona('#checkout-bairro').value
        let complementoPessoa = seleciona('#checkout-complemento').value
        let formaPagamento = seleciona('#checkout-pagamento').value // Corrigido para "#" ao invés de "."

        if (!nomePessoa || !telefonePessoa || !enderecoPessoa || !numeroCasaPessoa || !bairroPessoa) {
            alert('Atenção: Parece que você esqueceu de preencher algum campo obrigatório!')
            return
        }

        let pedido = capturarDadosDoPedido()
        let mensagem = `Olá, gostaria de fazer um pedido:\n\n`
        pedido.itens.forEach((item) => {
            // Nota que aqui eu tive que buscar a propriedade .totalPizza que nós construimos juntos na outra aula
            mensagem += `🍕 ${item.nome} (${item.tamanho}) - ${item.quantidade}x - ${formatoReal(item.totalPizza)}\n`
        })

        if (pedido.desconto > 0) {
            mensagem += `\nSubtotal: ${formatoReal(pedido.subtotal)}`
            mensagem += `\nDesconto promocional: -${formatoReal(pedido.desconto)}`
        }

        mensagem += `\n💰 Total do pedido: ${formatoReal(pedido.total)}\n`

        // 3.4 Injetando os dados da entrega no final do bilhete
        mensagem += `\n🛵 DADOS DE ENTREGA:\n`
        mensagem += `Nome: ${nomePessoa}\n`
        mensagem += `Telefone: ${telefonePessoa}\n`
        mensagem += `Endereço: ${enderecoPessoa}, Número ${numeroCasaPessoa} - ${bairroPessoa}\n`
        mensagem += `Forma de pagamento: ${formaPagamento}`

        if (complementoPessoa !== '') {
            mensagem += `Complemento: ${complementoPessoa}`
        }

        let mensagemFinal = encodeURIComponent(mensagem)

        let url = `https://wa.me/5524999323962?text=${mensagemFinal}`

        window.open(url, '_blank')

        cart = []
        fecharCheckout()
        atualizarCarrinho()
    })

}

const enviarPedido = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        if (cart.length > 0) {
            abrirCheckout()
        }
    })
    configurarCheckout()
}

const limparCarrinho = () => {
    const btnLimpar = seleciona('.cart--limpar')
    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            cart = []
            seleciona('.menu-openner span').innerHTML = 0
            atualizarCarrinho()
        })
    }
}

const pesquisar = () => {
    const searchBar = seleciona('.search-bar')
    const searchInput = seleciona('#search-input')
    const searchOpenner = seleciona('.search-openner')
    const searchCloser = seleciona('.search-closer')
    const navActions = seleciona('.nav-actions')

    // Abrir Pesquisa
    searchOpenner.addEventListener('click', () => {
        searchBar.style.display = 'flex'
        navActions.classList.add('search-active')
        setTimeout(() => {
            searchBar.classList.add('show')
            searchInput.focus()
        }, 10)
    })

    // Filtrar em Tempo Real
    searchInput.addEventListener('input', (e) => {
        termoAtual = e.target.value
        carregarPizzas(termoAtual)
    })

    // Fechar Pesquisa
    searchCloser.addEventListener('click', () => {
        searchBar.classList.remove('show')
        navActions.classList.remove('search-active')
        searchInput.value = ''
        termoAtual = ''
        carregarPizzas() // Volta tudo ao normal
        setTimeout(() => {
            searchBar.style.display = 'none'
        }, 400)
    })
}

const filtro = () => {
    let botoes = selecionaTodos('.category-button');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const isCurrentlyActive = botao.classList.contains('active');

            // 1. Remove a classe active de todos os botões
            botoes.forEach(b => b.classList.remove('active'));

            if (isCurrentlyActive) {
                // 2a. Se o botão clicado já estava ativo, voltamos para "Todos"
                categoriaAtual = 'all';
                const btnTodos = [...botoes].find(b => b.getAttribute('data-filter') === 'all');
                //poderia ser seleciona('.pizzas-todas'), mas ai se eu mudo a classe isso da merda,
                //o atual lida diretamente com a logica de dado

                if (btnTodos) btnTodos.classList.add('active');

            } else {
                // 2b. Se não estava ativo, ativa o botão atual e define a categoria
                botao.classList.add('active');
                categoriaAtual = botao.getAttribute('data-filter');
            }

            // 3. Recarrega a vitrine
            carregarPizzas();
        });
    });
}

const carregarPizzas = () => {
    let grid = seleciona('.cards-grid');
    grid.innerHTML = '';

    const promoSection = document.querySelector('.promocao');
    if (promoSection && window.location.href.includes('card')) {
        if (termoAtual !== '' || categoriaAtual !== 'all') {
            promoSection.style.display = 'none';
        } else {
            promoSection.style.display = '';
        }
    }

    // Regra da Promoção
    const diaDaSemana = new Date().getDay();
    const quartaFeira = (diaDaSemana === 4); // Definido como 4 (Quinta) para você testar hoje

    // Listas separadas
    let pizzasPromo = [];
    let pizzasNormais = [];

    // Mapeamos para não perder o index original (que é vital para o modal abrir a pizza certa)
    pizzaJson.forEach((item, originalIndex) => {
        let ehPromo = quartaFeira && (pizzaPromoQuartaUm.includes(item.id) || pizzaPromoQuartaDois.includes(item.id));
        if (ehPromo) {
            pizzasPromo.push({ item, index: originalIndex });
        } else {
            pizzasNormais.push({ item, index: originalIndex });
        }
    });

    let ultimaCategoria = '';

    // Função interna só para montar o card na tela, evitando repetir código
    const desenharCard = ({ item, index }, ehPromoSection) => {
        const categoriaSlug = item.category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

        let nomeBate = item.name.toLowerCase().includes(termoAtual.toLowerCase());
        let categoriaBate = categoriaAtual === 'all' || categoriaAtual === categoriaSlug;

        // Filtro da barra de pesquisa e botoes de categoria
        if (!nomeBate || !categoriaBate) {
            return;
        }

        let pizzaItem = seleciona('.models .card').cloneNode(true);
        pizzaItem.classList.add(categoriaSlug);

        // Se NÃO for a seção de promoção, renderizamos os títulos de categoria padrão
        if (!ehPromoSection) {
            if (item.category && item.category !== ultimaCategoria) {
                ultimaCategoria = item.category;

                let titulo = document.createElement('h2');
                titulo.classList.add('category-title');
                titulo.classList.add(categoriaSlug);
                titulo.innerHTML = ultimaCategoria;
                grid.append(titulo);
                if (window.animateTitle) window.animateTitle(titulo);
            }
        }

        // Ciclagem de cores (usa o index original para manter a consistência de cor da pizza)
        const cores = ['card-red', 'card-white', 'card-green'];
        const cor = cores[index % 3];
        pizzaItem.classList.add(cor);

        if (cor === 'card-white') {
            const btn = pizzaItem.querySelector('.card-btn');
            if (btn) btn.classList.add('btn-outline');
        }

        grid.append(pizzaItem);
        if (window.observeCard) window.observeCard(pizzaItem);

        preencheDadosPizza(pizzaItem, item, index);

        if (ehPromoSection) {
            let precoBase = item.price[1] || item.price[0];
            if (pizzaPromoQuartaUm.includes(item.id)) {
                precoBase -= 10;
            } else if (pizzaPromoQuartaDois.includes(item.id)) {
                precoBase -= 11;
            }

            // Atualiza apenas visualmente o valor exibido na vitrine de ofertas
            pizzaItem.querySelector(".card-price").innerHTML = `R$ ${precoBase.toFixed(2).replace('.', ',')}`;
        }

        // Ação do clique para abrir o Modal
        pizzaItem.querySelector('.card-btn').addEventListener('click', (e) => {
            e.preventDefault();
            let chave = pegarKey(e);
            abrirModal();
            preencherDadosModal(item);
            preencherTamanhos(chave);
            seleciona('.pizzaInfo--qt').innerHTML = quantPizzas;
            escolherTamanho(chave);
            atualizaPreco();
        });

        botoesFechar();
    };

    // 1. Renderiza "Ofertas do Dia" primeiro (se existir promoção)
    if (pizzasPromo.length > 0) {
        // Verifica se alguma pizza de promo passou no filtro atual pra não colocar um H2 fantasma na tela
        let temPromoPraMostrar = pizzasPromo.some(({ item }) => {
            const catSlug = item.category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            return item.name.toLowerCase().includes(termoAtual.toLowerCase()) &&
                (categoriaAtual === 'all' || categoriaAtual === catSlug);
        });

        if (temPromoPraMostrar) {
            let tituloPromo = document.createElement('h2');
            tituloPromo.classList.add('category-title');
            tituloPromo.innerHTML = "Ofertas do Dia";
            grid.append(tituloPromo);

            pizzasPromo.forEach(obj => desenharCard(obj, true));
        }
    }

    // 2. Renderiza as pizzas Normais em seguida
    pizzasNormais.forEach(obj => desenharCard(obj, false));
}

const promocoes = () => {

}

const tratarParametrosURL = () => {
    const params = new URLSearchParams(window.location.search);

    // Tratamento de filtro
    const filtroParams = params.get('filter');
    if (filtroParams) {
        let categoriaSlug = `pizzas-${filtroParams}`;
        let botaoCorrespondente = [...selecionaTodos('.category-button')].find(b => b.getAttribute('data-filter') === categoriaSlug);

        if (botaoCorrespondente) {
            selecionaTodos('.category-button').forEach(b => b.classList.remove('active'));
            botaoCorrespondente.classList.add('active');
            categoriaAtual = categoriaSlug;
            // Recarrega as pizzas com o filtro ativo
            carregarPizzas();
        }
    }

    // Tratamento de modal aberto direto
    const modalParams = params.get('modal');
    if (modalParams) {

        let pizzaNomeBuscado = modalParams.replace(/-/g, ' ');
        const normalizeStr = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        pizzaNomeBuscado = normalizeStr(pizzaNomeBuscado);

        let indexAchado = pizzaJson.findIndex(item => {
            let nomeItem = normalizeStr(item.name);
            return nomeItem === pizzaNomeBuscado;
        });

        if (indexAchado > -1) {
            let item = pizzaJson[indexAchado];
            quantPizzas = 1;
            modalKey = indexAchado;

            abrirModal();
            preencherDadosModal(item);
            preencherTamanhos(indexAchado);
            seleciona('.pizzaInfo--qt').innerHTML = quantPizzas;
            escolherTamanho(indexAchado);
        }
    }
}

carregarPizzas()
filtro()
pesquisar()
abrirCarrinho()
mudarQuantidadeModal()
adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
enviarPedido()
limparCarrinho()
tratarParametrosURL()

