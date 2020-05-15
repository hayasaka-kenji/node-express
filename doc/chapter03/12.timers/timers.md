## イベントループ
1. Timers  
setTimeout(), setInterval()
1. I/O callbacks  
I/O例外処理
1. idle  
Node.js例外処理
1. poll  
I/O処理、接続処理
1. check  
setImmediate()
1. close callback  
接続処理 (pollの反対の処理)  
...（最初に戻る）

## 遅延実行メソッド
- Timers
    - setTimeout(callback,delay)  
    delayに指定したms後に1回実行する
    - setInterval(callback,delay)  
    delayに指定したms後に繰り返し実行する
    - setImmediate(callback)  
    checkフェイズで実行される
- Process
    - process.nextTick(callback)  
    close callbackで実行される。  
    ループの中で使うのは非推奨。