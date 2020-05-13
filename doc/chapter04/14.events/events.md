## イベント駆動
- 起動するとイベント待機
起こったイベントに従って処理をするプログラミング手法。

## event.EventEmitter
- イベントのバインド
.on(name, listener)
name はイベント名、 listner はコールバック（関数）
.addListener(name, listener)
- イベントの発火
.emit(name, [, args])
- イベントのアンバインド(イベントを削除する)
.removeListner(name, listener)