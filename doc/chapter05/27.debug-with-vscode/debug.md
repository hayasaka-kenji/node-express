# VSCode デバッグ
## ブレイクポイント
- エディター行数の左に設定する
- ステップオーバーすることで次のポイントへ。  
    関数の中に入らない。
- ステップインすることで実行することができる。
    関数の中に入って動作させる。
- 変数上にカーソルを当てることで現在の値を確認することができる。
- ウオッチ式に追加することで常に、常に表示させておくことができる。

## 実行する
- 現在開いているファイルに対して実行を行う。
- エントリーポイントではないほかのファイルをデバッグする場合は構成して貰う必要がある。(/.vscode/launch.json)

## VSCode デバッグのショートカット
|キー	|動作|コマンドID|
|---|---|----|
|F9|	ブレークポイントのトグル	|editor.debug.action.toggleBreakpoint|
|F5|	コンティニュー	|workbench.action.debug.continue|
|F5|	ポーズ	|workbench.action.debug.start|
|F11|	ステップイン |	workbench.action.debug.stepInto|
|⇧F11|	ステップアウト	|workbench.action.debug.stepOut|
|F10|	ステップオーバー	|workbench.action.debug.stepOver|
|⇧F5|	ストップ	|workbench.action.debug.stop|