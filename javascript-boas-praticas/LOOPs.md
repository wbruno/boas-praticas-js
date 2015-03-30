# Otimização de Loops

Poderíamos transformar o NodeList retornado pela getElementsByTagName em um array, e ai percorrê-lo com a função forEach nativa do prototype do objeto Array.


## forEach(function($each)){}
``` javascript
$arr = [].slice.call($arr);
$arr.forEach(function($each){
   // do something with $each 
});
```

## for () {}
Mas isso é menos performático do que utilizar um for puro:

``` javascript
for (var i = 0; i < $arr.length; i++) {
    //...
}
```

Pois além do forEach ser um pouco mais lento, ainda não tivemos que fazer a mágica de usar o .slice()

## Otimizando o loop for:
``` javascript
var i = 0,
    max = $arr.length;
for (; i < max; i++) {
    //...
}
```
Evitamos ficar recalculando a propriedade .length a cada iteração do loop, e cortamos fora a inicialização, para antes de chamarmos o for()


## Utilizando um loop reverso

E caso a ordem dos elementos não seja importante, como por exemplo, qndo estamos atrelando eventos a uma lista de elementos do DOM, é utilizar um while reverso

``` javascript
while(max--) {
    // do something with $arr[max];
}
```

## O melhor loop é aquele que não precisa ser feito

No caso mostrado no WorkShop, usei uma técnica chamada **delegate** , para atrelar eventos a diversos objetos do DOM, evitando fazer qualquer loop, e chamando a função addEventListener uma única vez, apenas para o elemento pai.



