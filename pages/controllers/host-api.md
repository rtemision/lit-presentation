# Controller host API

Минимальный API, доступный на хосте контроллера:

* `addController(controller: ReactiveController)`
* `removeController(controller: ReactiveController)`
* `requestUpdate()`
* `updateComplete: Promise<boolean>`

Также можно создавать контроллеры, специфичные для `HTMLElement`, `ReactiveElement`, `LitElement` и требующие больше API; или даже контроллеры, привязанные к определенному классу элемента или другому интерфейсу.

`LitElement` и `ReactiveElement` являются хостами контроллеров, но хостами могут быть и другие объекты, например, базовые классы из других библиотек веб-компонентов, компоненты из фреймворков или другие контроллеры.
