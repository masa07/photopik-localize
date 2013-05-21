var enData={"items":[
// Array Start
// 0
{	"title":"Instruction",
"text":"Each item could be extended by tapping to read all text. Then, tapping again minimize segment. Tapping text make itsself appear/disappear.",
"imgSource":""},

// 1
{	"title":"1.Select Group",
"text":"Please select groups which have your preferable photos. Only photos in selected groups are used in this App. Selecting is finished, Tap 'Done' button. If you don't have any certain groups, you shoud choose 'Photo Library'. At first selection, it take about one minute to analize data of 500 photos.",
"imgSource":"seletgroup-en.jpg"},

// 2
{	"title":"2.View Photos",
"text":"First Page is a cover page which shows year of following photos. You could turn page by panning or tapping right/left edge. Turning page hide StatusBar and NavigationBar. So You want to return to the first page, you should tap center of a page and let them be displayed. Then, Tap top Right button shows first page of that day. Top Left button shows Assistant",
"imgSource":"today-photo-en.png"},

// 3
{	"title":"Assistant",
"text":"'Select Group' shows photo group selection view. After selection is done, photo date analyzing starts automaticaly. 'Instructon' shows this page. 'Send Message' allow you to send request for this app or share infomation about this app with your friend. In 'facebook page' you could get latest information of this App. 'Data Migration' could send analyzed photo date to another PhotoPik App which has been downloaded from App Store.",
"imgSource":"assistant-en.png"},

// 4
{	"title":"Send Message",
"text":"You can send a meesage by some ways. If you have a request for this app, you shoud tweet that with '#PhotoPik' Tag. So Your request will be referenced for next version.",
"imgSource":"sendmessage-en.png"}

// 5


// 6

/*
// 
{	"title":"",
"text":"",
"imgSource":""}
*/

]// End of Array
};// End of Json

var jaData={"items":[
// Array Start
// 0
{	"title":"使い方",
"text":"各項目はタップすることで広がって、全文を読むことが出来ます。もう一度タップすると、元に戻ります。本文をタップすると非表示なり、 背景の画像をご覧に慣れます。もう一度タップすると、再び表示されます。",
"imgSource":""},

// 1
{	"title":"1. グループ選択",
"text":"このアプリケーションで使いたい写真を含むグループを選択してください。選択が終わったら右上の「完了」ボタンをタップしてください。どのグループを選択するか決められない場合は、「フォトライブラリ」を選んでください。初めてグループ選択をした場合、写真500枚につき1分ほどの処理時間がかかります。",
"imgSource":"selectgroup-ja.jpg"},

// 2
{	"title":"4. 写真を見る",
"text":"表示される写真の撮影された年がはじめに表示されます。画面の左右をタップするか、スワイプすることでページをめくることができます。ページをめくると、ステータスバーとナビゲーションバーが隠れます。先頭ページに戻る場合は、画面の中央付近をタップしてステータスバーとナビゲーションバーを表示させて、右上のボタンをタップしてください。左上の「アクション」ボタンをタップすると「アシスタント」画面が表示されます。",
"imgSource":"today-photo-ja.png"},

// 3
{	"title":"アシスタント",
"text":"「グループ選択」はグループ選択画面を表示します。グループ選択が完了すると自動的に写真データの分析が始まります。「説明書」はこの画面を表示します。「メッセージを送る」はこのアプリに関するご意見を様々な方法で送ることができます。「フェイスブックページ」はこのアプリに関する情報を表示します。「データ移行」は写真日付解析データを他のPhotoPikアプリに送ることができます。",
"imgSource":"assistant-ja.png"},

// 4
{	"title":"メッセージを送る",
"text":"様々な方法でメッセージを送ることができます。このアプリ関するご意見は、「#PhotoPik」タグでツイートしてください。次のバージョンの参考にさせて頂きます。",
"imgSource":"sendmessage-ja.png"}

// 5


// 6

/*
// 
{	"title":"",
"text":"",
"imgSource":""}
*/

]// End of Array
};// End of Json

/*var loadData=function () {
	var t=document.getElementsByTagName("table").item(0); 
	var tbody=t.innerHTML;
	var tbodies=[];
	var items;
	var lang=location.search.substring(1);
	if (!lang.length) {
		lang='ja';
	}
	if ('ja'==lang) {
		items=jaData.items;
	}else{
		items=enData.items;
	}
	//alert(items);
	for (var i = 0; i < items.length; i++) {
		var rtbody=tbody;
		rtbody=rtbody.replace('-title-', items[i].title);
		rtbody=rtbody.replace('-text-', items[i].text);
		rtbody=rtbody.replace('-src-', items[i].imgSource);
	//	alert(rtbody);
		tbodies.push(rtbody);
	}
	//alert(tbodies);
	t.innerHTML=tbodies.join('');
};
*/
loadData();