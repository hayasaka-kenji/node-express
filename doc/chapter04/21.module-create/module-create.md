## モジュール作成の基本
1. jsファイルを作成
1. `module.exports`へモジュール化したいものを出力

```js
const someClass = function() {};
module.exports = someClass;
```
exportsのみの記述だとオブジェクト型のものが出力できないので基本的には`module.exports`で使用するようにする。