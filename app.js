function crriaCartao(categoria, pergunta, reposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `<div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
                </div> `



            let respostaEstaVisivil = false

            function viraCartao () {
                respostaEstaVisivil = !respostaEstaVisivil;
                cartao.classList.toggle('active', respostaEstaVisivil);
            }
            cartao.addEventListener('click', viraCartao)
                container.appendChild(cartao);
      
                
}