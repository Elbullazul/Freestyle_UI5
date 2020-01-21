sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function (Controller) {
		"use strict";
		return Controller.extend("sap.ui.demo.sequel.Sequel.Home", {
			onStatsPress: function(event) {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("stats", {});
			},
			onHelpPress: function(event) {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("support", {});
			},
			onInfoPress: function(event) {
				this.getOwnerComponent().openInfoDialog();
			},
			onContactPress: function(event) {
				this.getOwnerComponent().openContactDialog();
			}
		});
	});