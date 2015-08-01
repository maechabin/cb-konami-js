mocha.setup("bdd");

var assert = chai.assert;
var expect = chai.expect;
chai.Should();

describe("cb-konami.js test", function () {

  var konami = new Konami();
  console.log(konami.command);

  it("initメソッドが存在しているか", function () {
    konami.init();
    expect(konami.init).to.be.ok;
  });

  it("initメソッドは関数型か", function () {
    konami.init();
    expect(typeof konami.init === "function").to.be.ok;
  });

  it("key_arrayとcommandが一致しているか", function () {
    konami.key_array = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    expect(konami.key_array).to.eql(konami.command);
  });

  it("key_arrayとcommandが一致しない場合、key_arrayがリセットされるか", function () {
    konami.key_array = [38, 38, 40, 31, 37, 39, 37, 39, 66, 65];
    konami.action();
    expect(konami.key_array).to.eql([]);
  });

});

describe("cb-konami.js option test", function () {

  it("オプションにコマンドを設定した場合、オプションコード、key_array、commandが一致するか", function () {
    var option_code = [66, 65, 76, 83];
    var konami = new Konami(option_code);
    konami.key_array = [66, 65, 76, 83];
    expect(konami.key_array).to.eql(option_code);
    expect(konami.key_array).to.eql(konami.command);
  });

  it("オプションにコールバック関数を設定した場合、機能するか", function () {
    var test = "";
    var callback = function () {
      test = "konami test";
    };
    var konami = new Konami();
    konami.init(callback);
    konami.action();
    expect(test).to.eql("konami test");
  });

});
