# `converter`

Задает кастомный конвертер между свойством и атрибутом.

Может быть объектом или функцией. Если не указано, используются стандартные конвертеры для типов `String`, `Number`, `Boolean`, `Array` и `Object`.

<br>

#### Дефолтный конвертер из атрибута в свойство:
<br>

| Тип               | Преобразование
|-------------------|----------------------------------------------------------------------------|
| `String`          | Если есть соответствующий атрибут, свойство = значение атрибута.
| `Number`          | Если есть соответствующий атрибут, свойство = `Number(attributeValue)`.
| `Boolean`         | Если есть соответствующий атрибут, свойство = `true`, если нет — `false`.
| `Object`, `Array` | Если есть соответствующий атрибут, свойство = `JSON.parse(attributeValue)`.

<style>
  td {
    line-height: 1.5;
  }
</style>
