// Compiled using marko@4.18.25 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabNodeJS19367$1.0.0/src/app/views/produtos/listagemPedido.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><title>Pedidos</title></head><nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\"><ul class=\"navbar-nav\"><li class=\"nav-item \"><a class=\"nav-link mx-4\" href=\"/\">Login</a></li><li class=\"nav-item\"><i class=\"fas fa-shopping-cart\"></i><a class=\"nav-link mx-4\" href=\"/produtos\">Listagem Produtos</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"/carrinho\">Carrinho</a></li><li class=\"nav-item active\"><a class=\"nav-link mx-4\" href=\"/pedidos\">Pedidos Feitos</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"/registroUsuario\">Registre-se</a></li><a class=\"nav-link mx-4\" href=\"/deslogar\" style=\"width:100px;  height: 40px; position: relative; left: 700px;\">Deslogar</a></ul></nav><body>");

  component_globals_tag({}, out);

  out.w("<table class=\"table table-dark\"><thead><tr><th scope=\"col\">#</th><th scope=\"col\">Pedido</th><th scope=\"col\">Foto </th><th scope=\"col\">Valor</th><th scope=\"col\">Código do Pedido</th></tr></thead><tbody id=\"myTable\">");

  var $for$0 = 0;

  marko_forEach(data.produtosPedido, function(produtosPedido) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><form" +
      marko_attr("action", "/removeProdutoCarrinho/" + produtosPedido.codProdCarrinho) +
      " method=\"get\"><td>" +
      marko_escapeXml(produtosCarrinho.descricao) +
      "</td><td><img" +
      marko_attr("src", produtosPedido.foto) +
      " alt=\"prod\" class=\"img-thumbnail\" style=\"height: auto; width: 20%; align-self: center;\"></td><td style=\"padding-left: 15px;\">" +
      marko_escapeXml(produtosPedido.preco) +
      "</td><td style=\"padding-left: 15px;\">" +
      marko_escapeXml(produtosPedido.codPedido) +
      "</td></form></tr>");
  });

  out.w("</tbody></table><table class=\"table table-bordered\"> <thead><tr><th>Produto</th><th>Foto</th><th>Quantidade</th><th>Preço Unitário</th><th>Preço Total</th><th></th></tr></thead><tbody id=\"myTable\">");

  var $for$1 = 0;

  marko_forEach(data.produtosCarrinho, function(produtosCarrinho) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<tr><form" +
      marko_attr("action", "/removeProdutoCarrinho/" + produtosCarrinho.codProdCarrinho) +
      " method=\"get\"><td>" +
      marko_escapeXml(produtosCarrinho.nome) +
      "</td><td><img" +
      marko_attr("src", produtosCarrinho.foto) +
      " alt=\"prod\" class=\"img-thumbnail\" style=\"height: auto; width: 20%; align-self: center;\"></td><td style=\"padding-left: 15px;\">" +
      marko_escapeXml(produtosCarrinho.qtde) +
      "</td><td style=\"padding-left: 15px;\">" +
      marko_escapeXml(produtosCarrinho.valTotal) +
      "</td><td style=\"padding-left: 15px;\">" +
      marko_escapeXml(produtosCarrinho.valTotalCompra) +
      "</td><td><a><button type=\"submit\" class=\"btn btn-secondary mx-auto\" style=\" margin-left: 80px; height: 50 px; align-self: center;\">Remover Produto</button></a></td></form></tr>");
  });

  out.w("</tbody></table><nav aria-label=\"Navegação de pagina\"><ul class=\"pagination justify-content-center\"><li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" tabindex=\"-1\">Anterior</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">Próximo</a></li></ul></nav>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "68");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/trabNodeJS19367$1.0.0/src/app/views/produtos/listagemPedido.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
