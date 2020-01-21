sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/Control",
	"sap/m/Button",
	"sap/m/library"
	], function (MessageToast, Control, Button, sapMLib) {
		"use strict";
		return Control.extend("sap.ui.demo.sequel.Sequel.control.LinkButton", {
			metadata : {
				properties : {
					icon: {type: "string", defaultValue : ""},
					text: {type: "string", defaultValue : ""},
					type: {type: "string", defaultValue : ""},
					href: {type: "string", defaultValue : "#"},
					styleClass: {type: "string", defaultValue : ""}
				},
				aggregations : {
					_button : {type : "sap.m.Button", multiple: false, visibility: "hidden"}
				}
			},
			init : function() {
				this.setAggregation("_button", new Button({
					press: this._onPress.bind(this)
				}));
			},
			setText : function(inText) {
				this.setProperty("text", inText, true);
				this.getAggregation("_button").setText(inText);
			},
			setIcon : function(inURI) {
				this.setProperty("icon", inURI, true);
				this.getAggregation("_button").setProperty("icon", inURI);
			},
			setType : function(inType) {
				this.setProperty("type", inType, true);
				this.getAggregation("_button").setProperty("type", inType);
			},
			setStyleClass : function(inClass) {
				this.setProperty("styleClass", inClass, true);
				this.getAggregation("_button").addStyleClass(inClass);
			},
			_onPress : function() {
				sapMLib.URLHelper.redirect(this.getProperty("href"), true);
			},
			renderer : function(oRm, control) {
				oRm.renderControl(control.getAggregation("_button"));
			}
		});
	});