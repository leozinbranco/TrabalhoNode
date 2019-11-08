// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabNodeJS19367$1.0.0/src/app/views/usuarios/login.marko",
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

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">Logar</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Alterna navegação\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\"><ul class=\"navbar-nav\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/login\">Acesso<span class=\"sr-only\">(Página atual)</span></a></li> <li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes\">ListagemClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/inclusaoCliente\">InclusaoClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/consultaProd\">ConsultaProduto</a></li></ul></div></nav><br><h1>Acesso ao Sistema</h1><br><br><header class=\"cabecalhoFundo\"></header><div><form action=\"/validaBDUsuarios\" method=\"post\"><main class=\"conteudoPrincipal\"><div class=\"tabelaAcesso\"><input type=\"hidden\" id=\"id\" name=\"id\"><table class=\"table-mm\"><tr><td><label for=\"nome\">Login:</label></td><td><input type=\"text\" id=\"login\" name=\"login\" size=\"40\"></td></tr><tr><td><label for=\"data\">Senha:</label></td><td><input type=\"password\" id=\"senha\" name=\"senha\" size=\"10\"></td></tr></table><br><input type=\"submit\" value=\"Fazer login\" class=\"btn btn-secondary\"></div></main></form></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "44");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/trabNodeJS19367$1.0.0/src/app/views/usuarios/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
