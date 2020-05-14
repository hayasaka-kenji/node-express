## グローバルで使えるメソッド
- モジュール関連
require(x)

## requireの取り扱いについて
[参考ページ](https://nodejs.org/api/modules.html#modules_all_together)

翻訳
`require(X) from module at path Y`
1. Xがコアモジュールであればコアモジュールを返して終了
1. X が '/'であればファイルシステムルートを参照
1. X './' か '/' か '../' では始まっていれば、
    1. 実際のJavaScriptを探す
    1. .json
    1. .node
    1. X をフォルダ名として見立ててpackage.jsonを探す
        1. フォルダ内の実際のJavaScriptを探す
        1. フォルダ内の.json
        1. フォルダ内の.node
1. Nodeモジュールの読み込み（探し方は上記と一緒）
1. "not found" エラー

## 再帰呼び出し
nodeではrequireをするとキャッシュをもつので、ループはしないようになっている。