「[しまぶーの IT 大学](https://www.youtube.com/@shimabu_it)」の【Next.js で学ぶ React 講座 】ベースでの作成。

個人的には作ってみたいものがあるのでそれへのモチベーション

## 目的

学習して、自分で好きなツールを作れるようになる。  
React 学んでみないと評価もできないという理由で、React 学習中・・・・

## ゴール

自分でやりたかったことできるレベルまで、React の知識を準備
Notion から抜き出したデータを見やすく評するのがゴール  
Git をいろいろ使って見えるようにすること

## 環境

VSCode 利用
React ＋ NEXTJS  
CSS は検討中。Bootstrap は不向き？（会社で使っているので知識は少しはある。）

## 知識レベル

JavaServlet 1/10  
PythonDjango 1/10  
PythonFastApi 2/10  
Rails 0.5/10  
SQLServer 6.5/10  
Query 5/10  
C# 4/10
付随した、Html や JQuery、Css などは調整程度知識あり。
多分数字だと 0.01 とかになりそう・・・

## メモ

#### イミュータブル、ミュータブル、スプレッド構文

JS 使いこなすためにも学ぶのは有意義  
破壊的メソッド？？使わないほうがいい。コードがややこしくなる可能性あるのを回避するため？
元のオブジェクトを破壊するもの。考えが結びつかない・・・
ミュータブル（変更可：配列）、イミュータブル（変更不可：文字列、数値など）
ミュータブルをイミュータブルで扱いたい場合は、スプレッド構文を使う
配列（ミュータブル）をイミュータブルに扱う＝スプレッド構文を使う  
JS だとイミュータブルが推奨  
C＃、Python とかはどうなんだろう・・・

#### Hook の呼び出しルール

Return 前に呼ぶ  
React 関数内から呼ぶように
ただの JavaScript から呼ぶのは NG  
→ 混乱しないようにカスタムフックの名前は use で始める。
カスタムフックスについてはテンプレートである、共通部分の抜き出し機能かな？
カスタムフックスは挙動のみで、挙動＋ UI の場合はコンポーネントで対応

#### ステートのリストアップ

\_app から配布は可能
Components もリフトアップするこで、各コンポーネントで調整可能になる。

### useMemo

特定のタイミングのみ、新しくインスタンスを作り直す動き。変わった時のみ再度定義するなど。
useMemo UseCallback は再生成してるべきか、どうかの判断。パフォーマンスに対する認識も高まる。
