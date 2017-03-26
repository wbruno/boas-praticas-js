# Doctypes
Sempre que iniciamos um projeto html, antes da abertura da tag &lt;html>, precisamos declarar para o browser que vai renderizar nosso html, qual é o tipo/versão do html que estamos escrevendo.


## xHTML 1.0
Gosto muito desse aqui, pois prefiro escrever com a normas do xml + html.
``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```


## HTML 4
Doctype recomendado para projetos em html4. Strict significa que você deve seguir as normas a risca.
``` html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Existem outros DOCTYPEs para html4 e xhtml, que são: Transitional (para quem ainda não sabe escrever nas normas) e Frameset (para usar a tag frameset no documento). Eu não recomendo nenhum desses dois.


### HTML 5
Eu nunca digitei nenhum dos doctypes acima, eu sempre pesquiso, copio e colo. No html5, resolveram essa situação simplificando a tag do DOCTYPE para apenas:
``` html
<!DOCTYPE html>
```
