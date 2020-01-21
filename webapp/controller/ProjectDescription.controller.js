sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
	], function (Controller, UIComponent) {
		"use strict";
		return Controller.extend("sap.ui.demo.sequel.Sequel.ProjectDescription", {
			onAboutPress: function() {
				var router = UIComponent.getRouterFor(this);
				router.navTo("about", {}, true);
			}
		});
	});