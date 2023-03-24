# Дочерние контроллеры

Контроллеры могут состоять и из других контроллеров.

```ts
class DualClockController implements ReactiveController {
  private clock1: ClockController;
  private clock2: ClockController;

  constructor(host: ReactiveControllerHost, delay1: number, delay2: number) {
    this.clock1 = new ClockController(host, delay1);
    this.clock2 = new ClockController(host, delay2);
  }

  get time1() { return this.clock1.value; }
  get time2() { return this.clock2.value; }
}
```

<div class="mt-4 flex gap-2" v-click>
  <img src="/assets/images/clock2.jpg">
  <img src="/assets/images/clock.jpg">
</div>

<style>
  img {
    height: 134px;
    width: auto;
  }
</style>
