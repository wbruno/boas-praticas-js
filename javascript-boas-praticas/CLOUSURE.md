# Clousure

Funções anônimas são funções que não possuem nome. Dahn..

``` js
(function(){
    
});
```

Como ela não possui "nome", não temos como invocá-la, chamando ** getUrl() ** por exemplo.
Então, a forma é inserir os () de invocação antes ou depois do fechamento dos parânteses que envolvem a function em si:

``` js
(function(){
    
})();

// ou ..
(function(){
    
}());
```

Fazemos isso, pq javascript trabalha com escopo de funções, e assim conseguimos definir variáveis, objetos e funções "privadas" naquele contexto.
