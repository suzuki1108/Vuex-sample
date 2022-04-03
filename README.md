# vuex-sample

PJにVuexを導入するため、復習

参考：
[Vuex 公式](https://vuex.vuejs.org/ja/)
[Vuex 公式サンプル](https://github.com/vuejs/vuex/tree/main/examples/composition)


## データの流れ
### データの表示
1. components が Vuex store の state を参照する

### データの更新
1. components が Vuex store の actions を呼び出す
2. actions が commit() メソッドで mutation をコール
3. mutation が state を更新

## State
state は Vuex で管理する状態。
リアクティブなデータで、state の変更は Vue の検知対象。

## Mutations
mutations は state を変更する。
Vuex で state を変更する際は、必ずmutationを介して行う。

## Actions
action はstateの変更のトリガー。
基本的には非同期処理を行い、Mutationsにcommitする。

## Getters
getter は state の算出データを定義。

## コンポーネントからの利用
コンポーネントから action をコールする際は store.dispatch を使用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
