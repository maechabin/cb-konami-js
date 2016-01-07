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

[http://jsrun.it/maechabin/UoiG](http://jsrun.it/maechabin/UoiG)

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
