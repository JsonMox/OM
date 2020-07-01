var navTitles = new Vue({
	el: "#menu-list",
	data: {
		titles: [{
				name: "Remote",
				href: "#REMOTE",
				id: "Remote"
			}, {
				name: "Select",
				href: "#SELECT",
				id: "Select"
			},
			{
				name: "From",
				href: "#FROM",
				id: "From"
			}, {
				name: "Where",
				href: "#WHERE",
				id: "Where"
			},
			{
				name: "TimeRange",
				href: "#TIMERANGE",
				id: "TimeRange"
			}, {
				name: "Sort/Group",
				href: "#SORT",
				id: "Sort"
			},
			{
				name: "Data",
				href: "#DATA",
				id: "Data"
			}
		]

	}
});

var AA = new Vue({
	el: "#AA",
	data: {
		cc: "clise cronton",
		checkbox: [{
				id: "ALL",
				name: "aa",
				val: "ALL"
			},
			{
				id: "ALERT",
				name: "aa",
				val: "ALERT"
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var SELECT = new Vue({
	el: "#SELECT",
	data: {
		options: [{
				id: "_original.._value",
				val: "_original.._value"
			},
			{
				id: "_original.._stime",
				val: "_original.._stime"
			},
			{
				id: "_online.._value",
				val: "_online.._value"
			},
			{
				id: "_online.._stime",
				val: "_online.._stime"
			},
			{
				id: "_offline.._value",
				val: "_offline.._value"
			},
			{
				id: "_offline.._stime",
				val: "_offline.._stime"
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var FROM = new Vue({
	el: "#FROM",
	data: {
		options: [{
			id: "id",
			val: "when u say nothing at all"
		}],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var REMOTE = new Vue({
	el: "#REMOTE",
	data: {
		couponList: [{
				id: 'D09S01',
				name: 'D09S01'
			},
			{
				id: 'D09S02',
				name: 'D09S02'
			},
			{
				id: 'D09S03',
				name: 'D09S03'
			},
			{
				id: 'D09S04',
				name: 'D09S04'
			},
			{
				id: 'D09S05',
				name: 'D09S05'
			},
			{
				id: 'D09S06',
				name: 'D09S06'
			},
			{
				id: 'D09S07',
				name: 'D09S07'
			},
			{
				id: 'D09S08',
				name: 'D09S08'
			},
			{
				id: 'D09S09',
				name: 'D09S09'
			},
			{
				id: 'D09S10',
				name: 'D09S10'
			},
			{
				id: 'D09S11',
				name: 'D09S11'
			},
			{
				id: 'D09S12',
				name: 'D09S12'
			},
			{
				id: 'D09S13',
				name: 'D09S13'
			},
			{
				id: 'D09S14',
				name: 'D09S14'
			},
			{
				id: 'D09S15',
				name: 'D09S15'
			},
			{
				id: 'D09S16',
				name: 'D09S16'
			},
			{
				id: 'D09S17',
				name: 'D09S17'
			},
			{
				id: 'D09S18',
				name: 'D09S18'
			},
			{
				id: 'D09S19',
				name: 'D09S19'
			},
			{
				id: 'D09S20',
				name: 'D09S20'
			},
			{
				id: 'D09S21',
				name: 'D09S21'
			},
			{
				id: 'D09S22',
				name: 'D09S22'
			},
			{
				id: 'D09S23',
				name: 'D09S23'
			},
			{
				id: 'D09S91',
				name: 'D09S91'
			},
			{
				id: 'D09S50',
				name: 'D09S50'
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var WHERE = new Vue({
	el: "#WHERE",
	data: {
		keywords: [{
				id: "_original.._value",
				val: "_original.._value"
			},
			{
				id: "_original.._stime",
				val: "_original.._stime"
			},
			{
				id: "_online.._value",
				val: "_online.._value"
			},
			{
				id: "_online.._stime",
				val: "_online.._stime"
			},
			{
				id: "_offline.._value",
				val: "_offline.._value"
			},
			{
				id: "_offline.._stime",
				val: "_offline.._stime"
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var TIMERANGE = new Vue({
	el: "#TIMERANGE",
	data: {
		options: [{
				name: "email",
				val: "email"
			},
			{
				name: "twitter",
				val: "twitter"
			},
			{
				name: "linkedin",
				val: "linkedin"
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var SORT = new Vue({
	el: "#SORT",
	data: {
		options: [{
				id: "_original.._value",
				val: "_original.._value"
			},
			{
				id: "_original.._stime",
				val: "_original.._stime"
			},
			{
				id: "_online.._value",
				val: "_online.._value"
			},
			{
				id: "_online.._stime",
				val: "_online.._stime"
			},
			{
				id: "_offline.._value",
				val: "_offline.._value"
			},
			{
				id: "_offline.._stime",
				val: "_offline.._stime"
			}
		],
		obj: [{
				block_id: "sort-block-1",
				block_content: [{
						type: "radio",
						id: "none",
						name: "sort",
						val: ""
					},
					{
						type: "radio",
						id: "time",
						name: "sort",
						val: "TIME"
					}, {
						type: "radio",
						id: "dpe",
						name: "sort",
						val: "DP element"
					}
				]
			},
			{
				block_id: "sort-block-2",
				block_content: [{
						type: "radio",
						id: "none",
						name: "sort-type",
						val: ""
					},
					{
						type: "radio",
						id: "asc",
						name: "sort-type",
						val: "ASC"
					}, {
						type: "radio",
						id: "desc",
						name: "sort-type",
						val: "DESC"
					}
				]
			}
		],
		illustrate: [{
				text: "- The use of ALL and ALERT is optional,"
			},
			{
				text: "- ALL select all (!) data form the database,"
			},
			{
				text: "i.e. historical and current data."
			},
			{
				text: "Regardless of this option it is still required to choose between alerts and other values."
			},
			{
				text: "(see ALERT)"
			},
			{
				text: "To access only historical data use the TIMERANGE argument together with ALL."
			},
			{
				text: "if neither ALL nor TIMERANGE are used. current values will be selected."
			},
			{
				text: "NOTE: The ALL query might take a long time."
			},
			{
				text: "- By using the option ALERT, only alerts will be selected by the SELECT" +
					"statement. if the option ALERT is not bing uesed, ohter configs will be" +
					"available in the SELECT statement."
			},
			{
				text: "Both options refer to the SELECT statement."
			}
		]
	}
});

var slider = new Vue({
	el: "#slider",
	data: {
		slider: [{
				class_name: "slide slide--current",
				data_content: "content-1",
				img_src: "images/macbook.png",
				img_alt: "监视",
				svg_src: "images/moniter.svg",
				svg_alt: "Oracel Database Management -- moniter viewport",
				zoomer_class: "zoomer__area zoomer__area--size-2",
				title_1: "数据库管理系统(OM)",
				title_2: "监视"
			},
			{
				class_name: "slide",
				data_content: "content-2",
				img_src: "images/macbook.png",
				img_alt: "查询",
				svg_src: "images/moniter.svg",
				svg_alt: "Oracel Database Management -- moniter viewport",
				zoomer_class: "zoomer__area zoomer__area--size-4",
				title_1: "数据库管理系统(OM)",
				title_2: "查询"
			}, {
				class_name: "slide",
				data_content: "content-3",
				img_src: "images/macbook.png",
				img_alt: "维护",
				svg_src: "images/moniter.svg",
				svg_alt: "Oracel Database Management -- moniter viewport",
				zoomer_class: "zoomer__area zoomer__area--size-3",
				title_1: "数据库管理系统(OM)",
				title_2: "维护"
			}
		]
	}
});


var configList = new Array();
var fromList = new Array();
var strFromOptions = "";

var queryTimeStrap = "";
var totalTimeStrap = "";
var completeTS = "";

var ws = new WebSocket("ws://localhost:8088/getDps");

ws.onopen = () => {
	console.log("已建立链接...");
};

ws.onmessage = (evt) => {
	let obj = JSON.parse(evt.data);
	let iterator = 0; //迭代器
	let dpeArray = new Array(); //用于存放处理过的dpe数组
	// console.log(obj.dpe);
	if (obj.hasOwnProperty("dpe")) {
		obj.dpe.forEach(ele => {
			let temp = new Object();
			temp.id = iterator;
			temp.val = ele;
			dpeArray.push(temp);
			iterator++;
		});
		if (dpeArray.length > 0) {
			dpeArray.forEach(ele => {
				let temp = "<option value=" + ele.val + " >" + ele.val + "</option>"
				strFromOptions += temp;
			})
		}
	}
	if ("res" in obj) {
		totalTimeStrap = +new Date();
		if (obj.res.length <= 0) {
			return;
		}
		let clumons = obj.res.length;
		let rows = obj.res[0].length;
		let tab = "<table id='dataTable' bordercolor = 'white'>";
		for (let i = 0; i < clumons; i++) {
			tab += "<tr>";
			for (let j = 0; j < rows; j++) {
				const element = obj.res[i][j];
				tab += "<td>" + element + "</td>"
			}
			tab += "</tr>";
		}
		tab += "</table>";
		$("#tableDis").html(tab);
		completeTS = +new Date();
		$("#lineNum").html(clumons);
		$("#queryTime").html((totalTimeStrap - queryTimeStrap) / 1000);
		$("#totalTime").html((completeTS - queryTimeStrap) / 1000);
	}
};

ws.onclose = () => {
	// alert("连接已关闭...");
};

/* for Select */
function getSelectVal() {
	let source = $("#configuration").val();
	$("#forconfiguration").val(source);
}

function addConfig() {
	let source = $("#configuration").val();
	let addli = document.createElement("li");

	console.log(configList);
	if (source == "") {
		alert("please choose one configuration at lest");
		return;
	}
	for (let i = 0; i < configList.length; i++) {
		const ele = configList[i];
		if (ele == source) {
			alert("you have two identical config");
			return;
		}
	}
	configList.push(source);
	addli.innerHTML = "<span>" + source + "</span>";
	$("#show-config").append(addli);
}

function clcConfig() {
	$("#forconfiguration").val("");
	$("#show-config").html("");
}

$("#Select").bind("click", function (e) {
	let message = {
		system: $("#remote-select option:selected").val() + ":",
		sql: "",
		stime: "",
		etime: ""
	};
	ws.send(JSON.stringify(message));
	console.log(message);
});

/* for From */
$("#From").bind("click", function (e) {
	$("#from").html(strFromOptions);
});

function getFromVal() {
	let source = $("#from").val();
	$("#forfrom").val(source);
}

function addFrom() {
	let source = $("#from").val();
	let addli = document.createElement("li");

	console.log(fromList);
	if (source == "") {
		alert("please choose one element at lest");
		return;
	}
	for (let i = 0; i < fromList.length; i++) {
		const ele = fromList[i];
		if (ele == source) {
			alert("you have two identical config");
			return;
		}
	}
	fromList.push(source);
	addli.innerHTML = "<span>" + source + "</span>";
	$("#show-from").append(addli);
}

function clcFrom() {
	$("#forfrom").val("");
	$("#show-from").html("");
}

/* for remote */
function showRemote() {
	if ($('#remote').is(':checked')) {
		$("#option-remote").css("visibility", "visible")
	} else {
		$("#option-remote").css("visibility", "hidden")
	}
}

/* for where */
function addWhere() {
	let keywords = $("#where-keywords").val();
	let way = $("#where-compare-way").val();
	let val = $("#comparions").val();
	$("#forwhere").val("'" + keywords + "'" + way + val);
}

function clcWhere() {
	$("#forwhere").val("");
	$("#comparions").val("");
}

/* for timerange */
$('.strat_datetime').datetimepicker({
	format: 'yyyy.mm.dd hh:ii:ss',
	autoclose: true,
	minView: 0,
	minuteStep: 1,
	pickerPosition: "bottom-left"
});

function showTR() {
	if ($('#timerange').is(':checked')) {
		$("#option-timerange").css("visibility", "visible");
	} else {
		$("#option-timerange").css("visibility", "hidden");
	}
}

/* for sort */
function getFL() {
	let stan = $("input[name='sort']:checked").val();
	if (stan == "DP element") {
		$("#sort-block-2").css("visibility", "visible");
		$("#option-dp").css("visibility", "visible");
	} else {
		$("#sort-block-2").css("visibility", "hidden");
		$("#option-dp").css("visibility", "hidden");
	}
}

function showGroup() {
	if ($('#group').is(':checked') && ($("input[name='sort']:checked").val() == "TIME")) {
		$("#option-sort").css("visibility", "visible")
	} else {
		$("#option-sort").css("visibility", "hidden")
	}
}

/* for data */
function createSQL() {
	queryTimeStrap = +new Date();

	let aa = $(':radio[name="aa"]:checked').val();
	let remote = "'" + $("#remote-select option:selected").val() + "'";
	let select = "";
	let from = "";
	let where = $("#forwhere").val();
	let time_s = "\"" + $("#time_s").val() + "\"";
	let time_e = "\"" + $("#time_e").val() + "\"";
	let sort = "";
	let sortType = "";
	let FL = $(':radio[name="fir-las"]:checked').val() + " " + $("#num").val();;

	if (remote.length == 0) {
		remote = "";
	}
	for (let i = 0; i < configList.length; i++) {
		const element = configList[i];
		select += "'" + element + "'" + ",";
	}
	select = select.substr(0, select.length - 1);

	for (let i = 0; i < fromList.length; i++) {
		const element = fromList[i];
		from += "'" + element + ".*" + "'" + ",";
	}
	from = from.substr(0, from.length - 1);
	//if( select || fromList || (time_s && time_e)) { alert("u have wrong configurations"); }
	let sortTemp = $(':radio[name="sort"]:checked').val();
	if (sortTemp == "TIME") {
		sort = $("#groupTime").val();
		sortType = "";

	} else if (sortTemp == "DP element") {
		sort = $("#remote-select option:selected").val();
		sortType = $(':radio[name="sort-type"]:checked').val();
	} else {
		sort = "";
		sortType = "";
	}

	if (!aa && !select && !from) {
		alert("Missing field, please check again.");
		return;
	}
	let strR = "";
	if (remote) {
		strR = "REMOTE " + remote;
	} else {
		strR = " ";
	}

	let timerange = "";
	if (time_s && time_e) {
		timerange = "TIMERANGE" + "(" + time_s + "," + time_e + "," + 1 + "," + 0 + ")";
	} else {
		console.log("u have wrong time picker");
		timerange = " ";
	}
	let sql = "SELECT" + " " + aa + " " + select + " " + "FROM" + " " + from + " " + " " + " " + strR + " " + "WHERE " + where + timerange;

	$("#sql").val(sql);

	$("#btn-start").bind("click", function () {
		let message = {
			system: $("#remote-select option:selected").val(),
			sql: $("#sql").val(),
			stime: time_s,
			etime: time_e
		};

		ws.send(JSON.stringify(message));
		console.log(message);
	});
}

function clearInfo() {
	$("#tableDis").val("");
	$("#sql").val("");
}

/* 导出数据到Excel */
//打印表格
var idTmr;

function getExplorer() {
	var explorer = window.navigator.userAgent;
	//ie  
	if (explorer.indexOf("MSIE") >= 0) {
		return 'ie';
	}
	//firefox  
	else if (explorer.indexOf("Firefox") >= 0) {
		return 'Firefox';
	}
	//Chrome  
	else if (explorer.indexOf("Chrome") >= 0) {
		return 'Chrome';
	}
	//Opera  
	else if (explorer.indexOf("Opera") >= 0) {
		return 'Opera';
	}
	//Safari  
	else if (explorer.indexOf("Safari") >= 0) {
		return 'Safari';
	}
}

function method5(tableid) {
	if (getExplorer() == 'ie') {
		var curTbl = document.getElementById(tableid);
		var oXL = new ActiveXObject("Excel.Application");
		var oWB = oXL.Workbooks.Add();
		var xlsheet = oWB.Worksheets(1);
		var sel = document.body.createTextRange();
		sel.moveToElementText(curTbl);
		sel.select();
		sel.execCommand("Copy");
		xlsheet.Paste();
		oXL.Visible = true;

		try {
			var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
				"Excel Spreadsheets (*.xls), *.xls");
		} catch (e) {
			print("Nested catch caught " + e);
		} finally {
			oWB.SaveAs(fname);
			oWB.Close(savechanges = false);
			oXL.Quit();
			oXL = null;
			idTmr = window.setInterval("Cleanup();", 1);
		}

	} else {
		tableToExcel(tableid)
	}
}

function Cleanup() {
	window.clearInterval(idTmr);
	CollectGarbage();
}
var tableToExcel = (function () {
	var uri = 'data:application/vnd.ms-excel;base64,',
		template =
		'<html><head><meta charset="UTF-8"></head><body><table  border="1">{table}</table></body></html>',
		base64 = function (
			s) {
			return window.btoa(unescape(encodeURIComponent(s)))
		},
		format = function (s, c) {
			return s.replace(/{(\w+)}/g, function (m, p) {
				return c[p];
			})
		}
	return function (table, name) {
		if (!table.nodeType)
			table = document.getElementById(table)
		var ctx = {
			worksheet: name || 'Worksheet',
			table: table.innerHTML
		}
		window.location.href = uri + base64(format(template, ctx))
	}
})()