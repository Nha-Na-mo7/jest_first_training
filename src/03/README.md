# No.3 例外処理を書いてみよう

## 目標
- 正常系と例外発生時のテストの両方を書けるようになる
- `toThrow`マッチャーの使い方がわかる

## 課題
1. `FizzBuzz` 関数のテストを書いてみよう
2. 例外発生時のテストを書いてみよう

## 概要
- 例外発生時のマッチャーとして、`toThrow`を使う。
  - `toThrow`マッチャーを使う際は、expect関数にはアロー関数式でラップさせた状態の関数を引数として渡す。
  - `toThrow`マッチャーには、クラスを与えることもできる。throwされた例外が、該当クラスのインスタンスであるかの検証も可能。