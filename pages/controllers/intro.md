# Reactive Controllers

Используются для реализации функций, которые требуют собственного состояния и доступа к жизненному циклу компонента, например:

* Обработка глобальных событий, таких как события мыши
* Управление асинхронными задачами, такими как получение данных по сети
* Запуск анимации

<h2 class="mb-3">Инициализация</h2>

```ts
class ClockController implements ReactiveController {
  private host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host; // Store a reference to the host
    host.addController(this); // Register for lifecycle updates
  }
}
```
