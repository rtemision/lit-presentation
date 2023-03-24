---
layout: two-cols
---

```ts
import { ReactiveController, ReactiveControllerHost } from 'lit';

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;

  value = new Date();
  timeout: number;
  private _timerID?: number;

  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout;
  }
  hostConnected() {
    // Start a timer when the host is connected
    this._timerID = setInterval(() => {
      this.value = new Date();
      // Update the host with new value
      this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    // Clear the timer when the host is disconnected
    clearInterval(this._timerID);
    this._timerID = undefined;
  }
}
```


::right::

```ts {1-99} {maxHeight:'464px'}
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
import { ClockController } from './clock-controller';

@customElement('my-element')
class MyElement extends LitElement {
  // Create the controller and store it
  private clock = new ClockController(this, 1000);

  // Use the controller in render()
  render() {
    const formattedTime = timeFormat.format(
      this.clock.value
    );

    return html`Current time: ${formattedTime}`;
  }
}

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
```

<style>
  .slidev-layout {
    padding: 24px;
  }
</style>
