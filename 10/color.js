/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    // レコード一覧の表示時にフィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function (event) {
            // ログインユーザのフィールド色
        var fieldColor = '#e5f0ff',
            // 一覧の要素を取得
            elCustomer = kintone.app.getFieldElements('Customer'),
            elStatus = kintone.app.getFieldElements('Status'),
            elPerson = kintone.app.getFieldElements('Person'),
            elQType = kintone.app.getFieldElements('QType'),
            elDetail = kintone.app.getFieldElements('Detail'),
            elLimitDay = kintone.app.getFieldElements('LimitDay'),
            i;
  
        for (i = 0; i < event.records.length; i++) {
            if (i % 2 === 1) {
                var backgroundColor = [];
                backgroundColor[0] = "#87cefa";
                backgroundColor[1] = "#adff2f";
                backgroundColor[2] = "#ffd700";
                backgroundColor[3] = "#ff6347";
                backgroundColor[4] = "#d3d3d3";
                backgroundColor[5] = "#4b0082";
                var n = Math.floor(Math.random() * 6);
                
                elCustomer[i].style.backgroundColor = backgroundColor[n];
                elStatus[i].style.backgroundColor = backgroundColor[n];
                elPerson[i].style.backgroundColor = backgroundColor[n];
                elQType[i].style.backgroundColor = backgroundColor[n];
                elDetail[i].style.backgroundColor = backgroundColor[n];
                elLimitDay[i].style.backgroundColor = backgroundColor[n];
            }
        }
    });
}());
