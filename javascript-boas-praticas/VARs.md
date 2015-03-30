# Assign de Variáveis

É mais performático agruparmos o assign de variáveis em uma única instrução var, do que fazermos o seguinte:
``` javascript
var i = 0;
var BASE = '';
var $btn = document.getElementById('btn');
```

Ficando:
``` javascript
var i = 0,
    BASE = '',
    $btn = document.getElementById('btn');
```

Há quem prefira utilizar **comma first**, eu não costumo, mas é muito questão de gosto.
``` javascript
var i = 0
    ,BASE = ''
    ,$btn = document.getElementById('btn');
```

## Padrão de nomenclatura
Note também que nas variáveis que guardam objetos DOM, nós iniciamos o nome dela com o símbolo $.
Não tem nada a ver com o objeto jQuery em si, apesar de vc também poder utilizar esse padrão nos seus códigos jQuery.

A idéia é distinguir facilmente apenas de olhar, o "tipo" de variável que estamos lidando. Sendo que ao ver algo com $var, sabemos que isso é uma representação de algum elemento do DOM.

Outra prática, é utilizar todas as letras em maiúcula para indicar CONSTANTES no nosso código.
Não altera em nada o funcionamento do programa, e nem faz diferença para o interpretador javascript, mas facilita e melhora a nossa leitura do código.