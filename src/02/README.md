# No.2 it.eachを使ったテストを書いてみよう

## 目標
- `it.each`を使ったParameterized Testの基本的な書き方がわかる
- 共通化するテストと、パラメータとして分けるべき値とを見分けられる

## 課題
1. `it.each`を使ってテストを書いてみよう
2. 1月~12月全てのケースを、パラメータを変更するだけでテストしてみよう

## 概要
- `it.each`を使うと、関数の引数と期待値を複数個与えられ、それらを1つずつ全て実行してくれる。
- 境界値ごとの出力の違いなどにとどまる場合など、1つのケースで何パターンもテストしたい時に有効。