# No.6 非同期処理のテストを書いてみよう

## 目標
- 非同期処理を伴うテストの基本的な書き方がわかる

## 課題
1. fetchUser関数が resolve した際のテストを書いてみよう
2. fetchUser関数が reject した際のテストを書いてみよう

## 概要
- 非同期処理のテストの書き方パターン
  - resolve, reject共通
    - 関数の戻り値であるPromiseインスタンスを、関数の戻り値としてreturnさせ、Promiseが解決するまでテストの判定を待機させる方法。
    - resolves, rejectマッチャーを使用する方法。
    - テスト関数をasync 関数とし、テスト関数内でPromiseの解決を待つ方法。

  - rejectの場合
    - try~catchを使用する方法
      - catchブロック内でエラーを捉え、それをアサーションで検証する。