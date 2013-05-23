var contentsData={
// Begining of Englis
"en":[
      "PhotoPik Localization", // 0
      "Instruction Page Example", // 1
      "Instruction Page Localize",
      "Instruction page text is in [application name]data.js file. You can add a language text as hash array. For example, Adding japanese localization should insert following code.",
      "So, the format is ...",
      "[language name] should be replaced 2 literals representing a language. [section title] and [section text] should be replaced with localized text. [image source path] should be replaced localised image path",
      "Application Localize",
      "Application Localize use 2 files 'Localizable.strings' and 'MainStoryboard_iPhone.strings'. Each files store localize strings like ...",
      " So, the format is ...",
      "Only [localised phrase] should be replased with localized words.",
      "Resources",
      "Resources for localization is downloadable from following link as a zip file. ",
      " And you could contribute your work to tweet location of your localised file with #PhotoPik or post it on facebook.",
          ""], // End of English
// Begining of Japanese
"ja":[
      "PhotoPik 多言語化", //0
      "説明書の例", //1
      "説明書の多言語化",
      "説明書の内容は [アプリケーション名]data.js ファイルにあります.このファイルに言語を連想配列で追加します. 例えば、日本語の追加は次のようになります.",
      "フォーマットは、",
      "[language name] は言語を示す英字２文字です. [section title] と [section text] は翻訳した文章を入力します. [image source path] には表示する画像のパスを入力します.",
      "アプリケーションの多言語化",
      "アプリケーションの多言語化は 'Localizable.strings' と 'MainStoryboard_iPhone.strings'の２ファイルで行います. その中身は",
      "フォーマットは",
      "[localised phrase] の部分を翻訳した文にかえてください",
      "資源",
      "資源は次のアドレスからダウンロードできます. ",
      "翻訳できたファイルのアドレスを　'#PhotoPik'でツイートするか or Facebookに投稿してください.",
      ""] // End of Japanese
}; //End Of Hash Array

var lang=query.lang;
var items=document.getElementsByTagName('span');
//alert(item[0].src);
var data=contentsData[lang]
	for (var i = 0; i < data.length; i++) {
        if("localize"==items[i].className){
            items[i].innerHTML=data[i];
        }
//		items[i].innerHTML=data[i];
//		alert(items[i].innerHTML);
};