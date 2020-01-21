sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/demo/sequel/Sequel/model/models",
	"sap/ui/demo/sequel/Sequel/controller/InfoDialog",
	"sap/ui/demo/sequel/Sequel/controller/ContactDialog"
], function (UIComponent, Device, models, ContactDialog, InfoDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.sequel.Sequel.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// initialize dialogs
			this._contactDialog = new ContactDialog(this.getRootControl());
			this._infoDialog = new InfoDialog(this.getRootControl());
		},
		
		exit: function() {
			this._contactDialog.destroy();
		},
		
		openContactDialog: function() {
			this._contactDialog.open();
		},
		
		openInfoDialog: function() {
			this._contactDialog.open();
		}
	});
});