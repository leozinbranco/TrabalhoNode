// Compiled using marko@4.18.25 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabNodeJS19367$1.0.0/src/app/views/usuarios/registrarUsuario.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><title> Página de Login </title></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\"><ul class=\"navbar-nav\"><li class=\"nav-item \"><a class=\"nav-link mx-4\" href=\"/\">Login</a></li><li class=\"nav-item\"><i class=\"fas fa-shopping-cart\"></i><a class=\"nav-link mx-4\" href=\"/produtos\">Listagem Produtos</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"/carrinho\">Carrinho</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"/pedidos\">Pedidos Feitos</a></li><li class=\"nav-item active\"><a class=\"nav-link mx-4\" href=\"/registroUsuario\">Registre-se</a></li></ul></nav><br><h1>Cadastro</h1><br><br><form action=\"/registroUsuarioBD\" method=\"post\"><div class=\"form-group row\"></div><div class=\"form-group row\"><label for=\"cpf\" class=\"col-sm-2 col-form-label\">CPF</label><div class=\"col-sm-10\"><input type=\"text\" required=\"required\" class=\"form-control\" id=\"cpf\" name=\"cpf\" placeholder=\"xxxxxxxxxxx\" style=\"width: 700px;\" pattern=\"[0-9]+$\"></div></div><div class=\"form-group row\"><label for=\"senha\" class=\"col-sm-2 col-form-label\">Senha</label><div class=\"col-sm-10\"><input type=\"password\" required=\"required\" class=\"form-control\" id=\"senha\" name=\"senha\" style=\"width: 700px;\"></div></div><div class=\"form-group row\"><label for=\"nome\" class=\"col-sm-2 col-form-label\">Nome</label><div class=\"col-sm-10\"><input type=\"text\" required=\"required\" class=\"form-control\" id=\"nome\" name=\"nome\" style=\"width: 700px;\"></div></div><div class=\"form-group row\"><label for=\"celular\" class=\"col-sm-2 col-form-label\">Celular</label><div class=\"col-sm-10\"><input type=\"tel\" required=\"required\" class=\"form-control\" id=\"celular\" name=\"celular\" placeholder=\"99999 9999\" style=\"width: 700px;\"></div></div><div class=\"form-group row\"><label for=\"telFixo\" class=\"col-sm-2 col-form-label\">Telefone Fixo</label><div class=\"col-sm-10\"><input type=\"tel\" required=\"required\" class=\"form-control\" id=\"telFixo\" name=\"telFixo\" placeholder=\"9999 9999\" style=\"width: 700px;\"></div></div><div class=\"form-group row\"><label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label><div class=\"col-sm-10\"><input type=\"email\" required=\"required\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"exemplo@trab.com\" style=\"width: 700px;\"></div></div><div class=\"form-group row\"><label for=\"dataNasc\" class=\"col-sm-2 col-form-label\">Data De Nascimento</label><div class=\"col-sm-10\"><input type=\"date\" required=\"required\" class=\"form-control\" id=\"dataNasc\" name=\"dataNasc\" placeholder=\"2020-04-20\" style=\"width: 700px;\"><button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" value=\"Inserir Dados\" style=\"width:500px; position: relative; top: 30px;\">Validar Dados</button></div></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/trabNodeJS19367$1.0.0/src/app/views/usuarios/registrarUsuario.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
