sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function (Controller, Filter, FilterOperator) {
		"use strict";
		return Controller.extend("sap.ui.demo.sequel.Sequel.ThemeList", {
			onPress : function(event) {
				var row = event.getSource();
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("details", {
					themeIndex: row.getBindingContext("theme").getPath().substr(8)
				});
			},
			onFilterThemes : function(event) {
				var filters = [];
				var query = event.getParameter("query");
				if (query) {
					filters.push(new Filter("ThemeName", FilterOperator.Contains, query));
				}
				
				var list = this.byId("themeTable");
				var binding = list.getBinding("items");
				binding.filter(filters);
			}
		});
	});