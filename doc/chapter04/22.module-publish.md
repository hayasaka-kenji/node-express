# モジュールの公開
- npmアカウントがあること
- モジュールの用意

## package.json
- name  
検索しやすいようにする
- version  
[セマンティックバージョニング](https://semver.org/)
    - 変更に互換性のない場合はメジャー
    - 後方互換性があり機能性を追加した場合はマイナー
    - 後方互換性を伴うバグ修正をした場合はパッチバージョン
- main  
ファイルを指定
- private  
    - 公開しない true
    - 公開する false

## 公開手順
1. ログイン  
`npm login`
1. 公開  
`npm publish --access public`

## 取り下げ
1. 非公開  
`npm unpublish --force`  
公開から24時間経過するとメール確認が必要