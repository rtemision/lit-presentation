# `type`

Тип свойства.

Значение по умолчанию: `String`.

При преобразовании атрибута со строковым значением в свойство, конвертер атрибутов Lit по умолчанию будет анализировать строку в заданный тип, и наоборот, при преобразовании свойства в атрибут.

Если задана опция `converter`, это поле передается конвертеру. Если тип не указан, конвертер по умолчанию принимает его за тип: `String`