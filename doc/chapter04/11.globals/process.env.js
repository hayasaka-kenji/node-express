// process.argv はオブジェクト;

for (const key in process.env) {
  console.log(`${key}: ${process.env[key]}`);
}

// setで得られる環境変数が取得できる。
// 必要な設定を外部ファイルから渡すことができる。