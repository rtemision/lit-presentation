# Примитивные значения

Lit может отображать почти все примитивные значения и преобразует их в строки при интерполяции в текстовый контент:

* `5` -> `'5'`
* `true` -> `'true'`
* `false` -> `'false'`
* `''`, `null`, `undefined` -> ничего не рендерят. Вместе с `nothing` sentinel value удаляют любой предыдущий отрендеренный контент.