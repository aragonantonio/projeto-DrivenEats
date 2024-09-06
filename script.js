let contador = 0;
let selecionado = 0;


function selecionarPrato(prato) {
  let pratoSelecionadoAntes = document.querySelector(".selecionado-prato")
  if (pratoSelecionadoAntes !== null) {
    pratoSelecionadoAntes.classList.remove("selecionado-prato")
    contador -= 1;
  }
  
  prato.classList.add("selecionado-prato");
  
  selecionado = 1;
  contador += selecionado;

  let iconeCarne = document.querySelector(".icone-carne");
  let iconeCalabresa = document.querySelector(".icone-calabresa");
  let iconeFrango = document.querySelector(".icone-frango");
  if (prato.classList.contains("selecionado-prato") && prato.classList.contains("carne")) {
    iconeCarne.classList.remove("escondido");
    iconeCalabresa.classList.add("escondido");
    iconeFrango.classList.add("escondido");
    } else if (prato.classList.contains("selecionado-prato") && prato.classList.contains("calabresa")) {
    iconeCalabresa.classList.remove("escondido");
    iconeCarne.classList.add("escondido");
    iconeFrango.classList.add("escondido");
  } else if (prato.classList.contains("selecionado-prato") && prato.classList.contains("frango")) {
    iconeFrango.classList.remove("escondido");
    iconeCarne.classList.add("escondido");
    iconeCalabresa.classList.add("escondido");
  }
  const botaoFecharPedido = document.querySelector(".fechar-pedido")
  botaoFecharPedido.disabled = true;
  if (contador >= 3) {
    botaoFecharPedido.disabled = false;  
}

  if (!botaoFecharPedido.disabled) {
    botaoFecharPedido.classList.add("habilitado");
    botaoFecharPedido.innerHTML = "Fechar pedido";
}
}

function selecionarBebida(bebida) {
  let bebidaSelecionadaAntes = document.querySelector(".selecionado-bebida");
  if (bebidaSelecionadaAntes !== null) {
    bebidaSelecionadaAntes.classList.remove("selecionado-bebida");
    contador -= 1;
  }
  
  bebida.classList.add("selecionado-bebida");
  selecionado = 1;
  contador += selecionado;

  let iconeCoca = document.querySelector(".icone-coca");
  let iconeFanta = document.querySelector(".icone-fanta");
  let iconeSuco = document.querySelector(".icone-suco");
  if (bebida.classList.contains("selecionado-bebida") && bebida.classList.contains("coca")) {
    iconeCoca.classList.remove("escondido");
    iconeFanta.classList.add("escondido");
    iconeSuco.classList.add("escondido");
    } else if (bebida.classList.contains("selecionado-bebida") && bebida.classList.contains("fanta")) {
    iconeFanta.classList.remove("escondido");
    iconeCoca.classList.add("escondido");
    iconeSuco.classList.add("escondido");
  } else if (bebida.classList.contains("selecionado-bebida") && bebida.classList.contains("suco")) {
    iconeSuco.classList.remove("escondido");
    iconeFanta.classList.add("escondido");
    iconeCoca.classList.add("escondido");
  }
  const botaoFecharPedido = document.querySelector(".fechar-pedido")
  botaoFecharPedido.disabled = true;
  if (contador >= 3) {
    botaoFecharPedido.disabled = false;  
}

  if (!botaoFecharPedido.disabled) {
    botaoFecharPedido.classList.add("habilitado");
    botaoFecharPedido.innerHTML = "Fechar pedido";
}
}

function selecionarSobremesa(sobremesa) {
  let sobremesaSelecionadaAntes = document.querySelector(".selecionado-sobremesa");
  if (sobremesaSelecionadaAntes !== null) {
    sobremesaSelecionadaAntes.classList.remove("selecionado-sobremesa");
    contador -= 1;
  }
  
  sobremesa.classList.add("selecionado-sobremesa");
  selecionado = 1;
  contador += selecionado;

  let iconePudim = document.querySelector(".icone-pudim");
  let iconeMousse = document.querySelector(".icone-mousse");
  let iconeBrownie = document.querySelector(".icone-brownie");
  if (sobremesa.classList.contains("selecionado-sobremesa") && sobremesa.classList.contains("pudim")) {
    iconePudim.classList.remove("escondido");
    iconeMousse.classList.add("escondido");
    iconeBrownie.classList.add("escondido");
    } else if (sobremesa.classList.contains("selecionado-sobremesa") && sobremesa.classList.contains("mousse")) {
    iconeMousse.classList.remove("escondido");
    iconePudim.classList.add("escondido");
    iconeBrownie.classList.add("escondido");
  } else if (sobremesa.classList.contains("selecionado-sobremesa") && sobremesa.classList.contains("brownie")) {
    iconeBrownie.classList.remove("escondido");
    iconeMousse.classList.add("escondido");
    iconePudim.classList.add("escondido");
  }

  const botaoFecharPedido = document.querySelector(".fechar-pedido")
  botaoFecharPedido.disabled = true;
  if (contador >= 3) {
    botaoFecharPedido.disabled = false;  
}

  if (!botaoFecharPedido.disabled) {
    botaoFecharPedido.classList.add("habilitado");
    botaoFecharPedido.innerHTML = "Fechar pedido";
}
}

function painelConfirmarPedido() {
  const confirmarPedido = document.querySelector(".confirmar-pedido")
  const modal = document.querySelector(".modal")
  confirmarPedido.classList.remove("escondido")
  modal.classList.remove("escondido")

  let pedidoPrato = document.querySelector(".selecionado-prato");
  let nomePedidoPrato = document.querySelector(".nome-pedido-prato");
  let precoPedidoPrato = document.querySelector(".preco-pedido-prato")
  if (pedidoPrato.classList.contains("carne")) {
    nomePedidoPrato.innerHTML = "PF de Carne";
    precoPedidoPrato.innerHTML = "18.90"
  } else if (pedidoPrato.classList.contains("frango")) {
    nomePedidoPrato.innerHTML = "PF de frango";
    precoPedidoPrato.innerHTML = "16.90"
  } else if (pedidoPrato.classList.contains("calabresa")) {
    nomePedidoPrato.innerHTML = "PF de Calabresa";
    precoPedidoPrato.innerHTML = "15.90"
  }

  let pedidoBebida = document.querySelector(".selecionado-bebida");
  let nomePedidoBebida = document.querySelector(".nome-pedido-bebida");
  let precoPedidoBebida = document.querySelector(".preco-pedido-bebida")
  if (pedidoBebida.classList.contains("coca")) {
    nomePedidoBebida.innerHTML = "Coca-cola";
    precoPedidoBebida.innerHTML = "4.90"
  } else if (pedidoBebida.classList.contains("fanta")) {
    nomePedidoBebida.innerHTML = "Fanta";
    precoPedidoBebida.innerHTML = "4.90"
  } else if (pedidoBebida.classList.contains("suco")) {
    nomePedidoBebida.innerHTML = "Suco";
    precoPedidoBebida.innerHTML = "6.90"
  }

  let pedidoSobremesa = document.querySelector(".selecionado-sobremesa");
  let nomePedidoSobremesa = document.querySelector(".nome-pedido-sobremesa");
  let precoPedidoSobremesa = document.querySelector(".preco-pedido-sobremesa")
  if (pedidoSobremesa.classList.contains("pudim")) {
    nomePedidoSobremesa.innerHTML = "Pudim";
    precoPedidoSobremesa.innerHTML = "7.90"
  } else if (pedidoSobremesa.classList.contains("mousse")) {
    nomePedidoSobremesa.innerHTML = "Mousse";
    precoPedidoSobremesa.innerHTML = "7.90"
  } else if (pedidoSobremesa.classList.contains("brownie")) {
    nomePedidoSobremesa.innerHTML = "Brownie";
    precoPedidoSobremesa.innerHTML = "7.90"
  }

  nomePedidoPrato = nomePedidoPrato.innerHTML
  nomePedidoBebida = nomePedidoBebida.innerHTML
  nomePedidoSobremesa = nomePedidoSobremesa.innerHTML

  let total = 0;
  let precoPrato = parseFloat(precoPedidoPrato.innerHTML);
  let precoBebida = parseFloat(precoPedidoBebida.innerHTML);
  let precoSobremesa = parseFloat(precoPedidoSobremesa.innerHTML);
  let precoTotal = document.querySelector(".preco-total");
  total = precoPrato + precoBebida + precoSobremesa;
  precoTotal.innerHTML = total.toFixed(2);

  let textoPedidoWpp = `Olá gostaria de fazer um pedido: \n - Prato: ${nomePedidoPrato} \n - Bebida: ${nomePedidoBebida} \n - Sobremesa: ${nomePedidoSobremesa} \n Total: R$${total.toFixed(2)} `;
  let textoCodificado = encodeRFC5987ValueChars(textoPedidoWpp);
  return enviarPedido(textoCodificado);
 }

 function encodeRFC5987ValueChars(textoPedidoWpp) {
  return (encodeURIComponent(textoPedidoWpp))
 }  

 function enviarPedido(textoCodificado) {
  let linkWhatsApp = `https://wa.me/5547997761854/?text=${textoCodificado}`;
  let mensagem = document.querySelector(".botao-confirmar-pedido");
  mensagem.href = linkWhatsApp;
 }

function cancelarPedido() {
  const confirmarPedido = document.querySelector(".confirmar-pedido")
  const modal = document.querySelector(".modal")
  confirmarPedido.classList.add("escondido")
  modal.classList.add("escondido")
}
