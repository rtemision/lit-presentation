# Жизненный цикл

<br>

* `hostConnected()`. Вызывается, когда хост подключен. Подписка на события, обсерверы.
* `hostUpdate()`. Вызывается перед методами `update()` и `render()`. Используется для чтения DOM до его обновления (например, для анимации).
* `hostUpdated()`. Вызывается после обновления, перед методом `updated()` хоста. Используется для чтения DOM после его изменения (например, для анимации).
* `hostDisconnected()`. Вызывается при отключении хоста. Отписка событий, обсерверов.
