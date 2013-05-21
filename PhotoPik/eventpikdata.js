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
{	"title":"2. Select Calender",
"text":"Please select calendar having your inpressive events. This App shows only events of selected calennder in a latest year.  If you don't have any events in your Calendars, you need to add one events at least. To complete calendar selectioln, you should tap 'Done'. ",
"imgSource":"selectcalendar-en.jpg"},

// 3
{	"title":"3.Select Event",
"text":"Tapping an event, photos of that day would be shown by year descending. Birthday person image which is same date of today is highlited by 'Today!' image. Top left 'Action' button shows 'Assistant' View. Top Right 'Contacts' button shows 'Select Action' sheet to edit your contacts.",
"imgSource":"event-list-en.png"},

// 4
{	"title":"4.View Photos",
"text":"First Page is a cover page which shows year of following photos. You could turn page by panning or tapping right/left edge. Turning page hide StatusBar and NavigationBar. So You want to return to the list, you should tap center of a page and let them be displayed. Top Left '+' button shows 'Take photo' view.",
"imgSource":"event-photo-en.png"},

// 5
{	"title":"Assistant",
"text":"'Select Group' shows photo group selection view. After selection is done, photo date analyzing starts automaticaly. 'Instructon' shows this page. 'Send Message' allow you to send request for this app or share infomation about this app with your friend. In 'facebook page' you could get latest information of this App. 'Data Migration' could send analyzed photo date to another PhotoPik App which has been downloaded from App Store.",
"imgSource":"assistant-en.png"},

// 6
{	"title":"Send Message",
"text":"You can send a meesage by some ways. If you have a request for this app, you shoud tweet that with '#PhotoPik' Tag. So Your request will be referenced for next version.",
"imgSource":"sendmessage-en.png"}
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
"text":"各項目はタップすることで広がって、全文を読むことが出来ます。もう一度タップすると、元に戻ります。本文をタップするととで表示/非表示が切り替わり、 背景の画像をご覧に慣れます。",
"imgSource":""},

// 1
{	"title":"1. グループ選択",
"text":"このアプリケーションで使いたい写真を含むグループを選択してください。選択が終わったら右上の「完了」ボタンをタップしてください。どのグループを選択するか決められない場合は、「フォトライブラリ」を選んでください。初めてグループ選択をした場合、写真500枚につき1分ほどの処理時間がかかります。",
"imgSource":"selectgroup-ja.jpg"},

// 2
{	"title":"2. カレンダーを選択する",
"text":"最近1年以内のイベントを含むカレンダーを選択してください。このアプリで表示されるのは、最近1年分のイベントのみです。「すべてのカレンダーを表示」をタップすることで全てのカレンダーを選択出来ます。",
"imgSource":"selectcalender-ja.jpg"},

// 3
{	"title":"3. イベントを選択する",
"text":"イベントをタップすると、その日付に撮影された写真が年の新しい順にまとめられて表示されます。当日のイベント欄は'Today!'の画像で飾られます。左上の「アクション」ボタンをタップすると「アシスタント」画面が表示されます。右上の「カレンダー」ボタンをタップすると、アクションシートが表示されます。カレンダーの選択、イベントの追加や編集をすることができます。",
"imgSource":"event-list-ja.png"},

// 4
{	"title":"4. イベントの写真を見る",
"text":"これから表示される写真の撮影された年がはじめに表示されます。画面の左右をタップするか、スワイプすることでページをめくることができます。ページをめくると、ステータスバーとナビゲーションバーが隠れます。イベントのリストに戻る場合は、画面の中央付近をタップしてステータスバーとナビゲーションバーを表示させてください。右上の「+」ボタンをタップするとカメラが起動して撮影することができます。",
"imgSource":"event-photo-ja.png"},

// 5
{	"title":"アシスタント",
"text":"「グループ選択」はグループ選択画面を表示します。グループ選択が完了すると自動的に写真データの分析が始まります。「説明書」はこの画面を表示します。「メッセージを送る」はこのアプリに関するご意見を様々な方法で送ることができます。「フェイスブックページ」はこのアプリに関する情報を表示します。「データ移行」は写真日付解析データを他のPhotoPikアプリに送ることができます。",
"imgSource":"assistant-ja.png"},

// 6
{	"title":"メッセージを送る",
"text":"様々な方法でメッセージを送ることができます。このアプリ関するご意見は、「#PhotoPik」タグでツイートしてください。次のバージョンの参考にさせて頂きます。",
"imgSource":"sendmessage-ja.png"}
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