# cb-Konami-js

WebサイトにKonamiコマンドを実装するJavaScriptプラグイン。

## About
キーボードでKonamiコマンド**「上上下下左右左右BA」**を打った後に、何か任意の処理を実行させる機能を実装することができます。  

以下の例では、キーボードの[↑] + [↑] + [↓] + [↓] + [←] + [→] + [←] + [→] + [B] + [A]
を打った後に、「konami」とアラートが表示されます。
```js
(function () {
  var konami = new Konami();
  konami.init();
} ());
```

## Demo

[http://www.maechabin.com/cb-konami-js/](http://www.maechabin.com/cb-konami-js/)

## Download

こちらのページから[ダウンロード](https://github.com/maechabin/cb-konami-js/archive/master.zip)するか、`[git clone]`コマンドでローカルにコピーします。

```
$ git clone git@github.com:maechabin/cb-konami-js.git 任意のディレクトリ名
```

npm経由でも入手可能です。
```
$ npm install --save cb-konami-js
```

機能の実装に使用するファイルは以下のjsファイルとなります。
- dist/konami.min.js

## Usage

distディレクトリ内の「konami.min.js」をページに読み込みます。
```html
<script src="../dist/konami.min.js"></script>
```

&lt;body&gt;の閉じタグの直前に以下を挿入。Konamiオブジェクトのインスタンスを作成し、initメソッドを実行。initメソッドの引数には、コナミコマンド入力後に発動させたい処理（関数）を指定可能。
```js
<script>
(function () {
  var konami = new Konami();
  konami.init();
} ());
</script>
```
### example1
```js
<script>
(function () {
  var konami = new Konami();
  var foo = function () {
    console.log("bar"):
  };
  konami.init(foo);
} ());
</script>
```

### example2（匿名関数）
```js
<script>
(function () {
  var konami = new Konami();
  konami.init(function () {
    console.log("bar");
  });
} ());
</script>
```

また、newする際にKonamiオブジェクトの引数にキーの配列を指定することで、トリガーとなるオリジナルのコマンドを設定することも可能です。（Konamiコマンドではないコマンドを指定可能）

### example3 (コマンドに「bals」を指定)

```js
<script>
(function () {
  var konami = new Konami([66, 65, 76, 83]);
  konami.init(function () {
    alert("bals");
  });
} ());
</script>
```

## License

MIT license
