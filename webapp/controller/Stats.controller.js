sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/core/routing/History",
"sap/ui/core/UIComponent"
	], function (Controller, History, UIComponent) {
		"use strict";
		return Controller.extend("", {
			onNavBack: function() {
				var history = History.getInstance();
				var previousHash = history.getPreviousHash();
				
				if (previousHash !== undefined) {
					window.history.go(-1);
				} else {
					var router = UIComponent.getRouterFor(this);
					router.navTo("home", {}, true);
				}
			}
		});
	});