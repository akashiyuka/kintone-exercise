/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    kintone.events.on('app.record.create.show', function (event) {
        var user = kintone.getLoginUser();
        event.record.Person.value = [{'code': 'megumi-ida', 'name': 'megumi-ida'}, {'code': user.code, 'name': user.name}];
        return event;
    });
}());
