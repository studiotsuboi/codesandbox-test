/**const,let */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// var val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let2 = "let変数を再宣言";

//constは、上書きも再宣言もできない
// const val3 = "const変数";
// console.log(val3);

// val3 = "constを上書き";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "taka",
//   age: 47
// };
// val4.name = "隆宗";
// val4.address = "Fukuokaaaaa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "apple";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "たかむね";
// const age = 47;

// const message1 = "私の名前は" + name + "です。" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}ですよー。`;
// console.log(message2);

//アロー関数
//従来の関数の書き方
// function func1(str){
//   return str;
// }
///上記と同じ
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// //アロー関数の書き方
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です。"));

//分割代入
// const myProfile = {
//   name: "taka",
//   age: 47,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列でも分割代入
// const myProfile = ["taka", 47];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにには！${name}さん！`);
// sayHello();

//スプレッド構文
//配列の展開
// const arr1 = [1, 3];
// // console.log(arr1);
// // console.log(...arr1);

// // const sumFunc = (num1, num2) => {
// //   return console.log(num1 + num2);
// // }
// // sumFunc(arr1[0], arr1[1]);

// const sumFunc2 = (num1, num2) => console.log(num1 + num2);
// sumFunc2(arr1[0], arr1[1]);
// sumFunc2(...arr1);

//スプレッド構文
//纏める
// const arr2 = [1,2,3,4,5];
// const [...arr3] = arr2;
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "中山"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

//filter
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["田中", "山田", "中山"];

// // nameArr.map((name,index) => console.log(`${index}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "中山") {
//     return `${name}くん`;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//参考演算子
//ある条件? 条件がtrueのとき: 条件がfalsのとき;
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "文字列";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力しなさい！';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(55,89));

// 論理演算子の本当の意味
// const flag1 = true;
// const flag2 = false;

// // if (flag1 || flag2) {
// //   console.log("1か2はtrueになります");
// // }
// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

//JavaScriptでの || 判定は、左側がfalseなら右側を返す
// const num = 10000000;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&の場合
const num1 = 100;
const num2 = 100;
const fee2 = num2 && num1;
console.log(fee2);
