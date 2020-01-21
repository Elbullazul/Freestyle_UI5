sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"], function(ManagedObject, Fragment, syncStyleClass) {
		return ManagedObject.extend("sap.ui.demo.sequel.Sequel.controller.InfoDialog", {
			constructor: function(view) {
				this._view = view;
			},
			exit: function() {
				delete this._view;
			},
			open: function() {
				var view = this._view;
				
				if (!view.byId("infoDialog")) {
					var fragController = {
						parent: this,
						onCloseDialog: function() {
							view.byId("infoDialog").close();
						}
					};
					Fragment.load({
						id: view.getId(),
						name: "sap.ui.demo.sequel.Sequel.Fragment.InfoDialog",
						controller: fragController
					}).then(function (dialog) {
						view.addDependent(dialog);
						dialog.open();
					});
				} else {
					view.byId("infoDialog").open();
				}
			}
		});
	});