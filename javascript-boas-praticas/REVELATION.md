# Module Pattern / Revelation

No arquivo [xhr.js](https://github.com/wbruno/boas-praticas-js/blob/master/xhr.js) eu criei um objeto javascript com notação literal, e usei o pattern conhecido com Revelation, que é uma "evolução" do Module Pattern.

Consiste basicamente em aproveitar o fato de que apesar de javascript não possuir uma palavra reservada pra indicar escopos (privado/proteced), ele funciona com escopo de função, então o que foi declarado dentro de uma função, é privado dela.

E assim, utilizando uma anônima autoexecutável:

``` js
(function() {
    //..
}());
```

Eu só exponho ao público a api que interessa, deixando privado as propriedades e métodos que o cliente que irá utilizar a classe, não precisa/não pode conhecer.

``` js
(function() {
    'use strict';

    var module = {};

    module._init = function() {
        //...  
    };
    module.get = function() {
        //...  
    };

    return {
        get:  module.get    
    };
}());
```

Utilizei também um underline (_) na frente do nome do método init para indicar com notação que esse é um método privado.
Note que não faz o parser entender, pq para ele não faz diferença, mas sim para nós humanos compreendermos o código mais facilmente.
