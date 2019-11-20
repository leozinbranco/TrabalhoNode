// Compiled using marko@4.18.25 - DO NOT EDIT
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

  out.w("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\"><ul class=\"navbar-nav\"><li class=\"nav-item active\"><a class=\"nav-link mx-4\" href=\"/\">Login</a></li><li class=\"nav-item\"><i class=\"fas fa-shopping-cart\"></i><a class=\"nav-link mx-4\" href=\"/produtos\">Listagem Produtos</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"#\">Carrinho</a></li><li class=\"nav-item\"><a class=\"nav-link mx-4\" href=\"#\">Disabled</a></li></ul></nav><br><h1>Acesso ao Sistema</h1><br><br><header class=\"cabecalhoFundo\"></header><i class=\"fas fa-shopping-cart\"></i><div><form><div class=\"form-group\"><label for=\"exampleInputEmail1\">Email</label><input type=\"email\" class=\"form-control w-50\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Seu email\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Senha</label><input type=\"password\" class=\"form-control w-50\" id=\"exampleInputPassword1\" placeholder=\"Senha\"></div><div class=\"form-group form-check\"></div><button type=\"submit\" class=\"btn btn-primary\">Enviar</button></form></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

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
