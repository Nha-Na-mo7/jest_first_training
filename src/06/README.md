# No.6 非同期処理のテストを書いてみよう

## 目標
- 非同期処理を伴うテストの基本的な書き方がわかる
- expect.assertionsを使う目的がわかる

## 課題
1. fetchUser関数が resolve した際のテストを書いてみよう
2. fetchUser関数が reject した際のテストを書いてみよう
3. rejectのテストにおいて、必ずアサーションが1回実行されることを保証させよう

## 概要
- 非同期処理のテストの書き方パターン
  - resolve, reject共通
    - 関数の戻り値であるPromiseインスタンスを、関数の戻り値としてreturnさせ、Promiseが解決するまでテストの判定を待機させる方法。
    - resolves, rejectマッチャーを使用する方法。
      - テスト関数が同期関数の場合、Promiseの解決前にテスト自体が終了してしまう場合がある
      - return記述を忘れないようにするか、テスト関数をasync関数とするかのどちらかを行うこと。
    - テスト関数をasync 関数とし、テスト関数内でPromiseの解決を待つ方法。

  - rejectの場合
    - try~catchを使用する方法
      - catchブロック内でエラーを捉え、それをアサーションで検証する。
- アサーションの実行回数の検証
  - reject のテストをしたい場合に、誤って正常終了する引数を渡してしまった時などは、実行されてほしいアサーションに到達することなくテストそのものが終了してしまう。
  - テスト自体が**正常終了**してしまうので、一見するとテストコードの誤りに気付くことができない場合がある。
  - `expect.assertions`は、テスト関数の冒頭で宣言することで、引数に渡した回数だけアサーションが実行されることをテストすることができる。
    - 特にtry~catchを使ったテストでは忘れずに記述しよう。


実行回数の期待値を渡せば、すり抜けてしまったテストにも気付きやすくなる。
```typescript
it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
  expect.assertions(1);
  return fetchUser(1).catch((error) => {
    expect(error).toBe("error");
  });
});
```
```bash
expect.assertions(1)

Expected one assertion to be called but received zero assertion calls.

  15 |   });
  16 |   it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
> 17 |     expect.assertions(1);
```
