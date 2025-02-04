# No.1 Jestを使ったテストの基本を学ぼう

## 目標
- アサーション、マッチャーの基本的な使い方がわかる
- 基本的なテスト関数の使い方がわかる

## 課題
1. `index.test.ts`ファイルをこの階層に作成し、`sum`関数のテストを書いてみよう
2. テストをグルーピングしてみよう

## 概要
```typescript
var test: jest.It
(name: string, fn?: jest.ProvidesCallback, timeout?: number) => void
Creates a test closure.

@param name — The name of your test

@param fn — The function for your test

@param timeout — The timeout for an async function test
```
- `test`関数では主に2つの引数が使用される。
  - 第一引数のテストタイトルには、テストの内容を簡単に記述する(日本語でOK)。
  - 第二引数には、テストしたい関数を渡す。

- テスト関数内では、**アサーション**と**マッチャー**を記述する。
  - アサーション: 検証値が期待通りであるかを検証するための文。`expect`関数で表現する。
  - マッチャー: テストの評価の条件を定義するための関数。 `expect`関数に続けて記述する。

- いくつかのテストをグルーピングしたい場合、`describe`関数を使用できる。
  - `describe`関数はネストすることができる。
  - `test`関数はネストできないため、細かい分類をしたい時は`describe`関数を使用すると良い。

- `test`関数は、`it`関数でも代用することができる。
  - 用途は変わらない。
  - 英語で、it is...の形でスマートな文に見えることが由来らしい。どちらを使うかはプロジェクトのルールに従いましょう。