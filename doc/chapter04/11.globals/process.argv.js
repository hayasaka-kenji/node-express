// process.argv は配列に格納されている。

for (let i = 0; i < process.argv.length; i++) {
  console.log(`${i}: ${process.argv[i]}`)
}

// node process.js --hoge b で実行
// 0: /Users/~/.anyenv/envs/ndenv/versions/~
// 1: /Users/~/~/node-hiyoko/doc/chapter04/process.js
// 2: --hoge
// 3: b