sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/base/Log",
	"sap/ui/core/UIComponent"
	], function (Controller, History, Log, UIComponent) {
		"use strict";
		return Controller.extend("sap.ui.demo.sequel.Sequel.Details", {
			onInit: function() {
				var router = UIComponent.getRouterFor(this);
				router.getRoute("details").attachPatternMatched(this._bindModel, this);
			},
			_bindModel: function(event) {
				this.getView().bindElement({
					path: "/Themes/" + event.getParameter("arguments").themeIndex,
					model: "theme"
				});
			},
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