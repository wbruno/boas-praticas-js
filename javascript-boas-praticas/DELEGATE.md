# Delegate events 

O motivo de usarmos delegate, além de conseguirmos "dar vida" a elementos que não estavam presentes no DOM, no momento em que o bind foi feito, é melhorarmos a performance dos nossos scripts.

Imagine uma situação onde vc precise escutar o evento click de 8, 18, 80 elementos, isso exige a utilização de um for, e na maneira clássica, um addEventListener para cada um dos 80 elementos.

Com o delegate, colocamos a escuta do evento no elemento pai desses elementos, e com um simples if, testando o **target** do objeto **event** é o elemento que realmente queremos.


``` javascript
$obj.addEventListener('click', function(event){
    var $this = event.target;

    if($this.tagName === 'INPUT') {
        // do something with $this, child of $obj
    }
});
```