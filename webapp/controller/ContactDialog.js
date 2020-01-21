sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"], function(ManagedObject, Fragment, syncStyleClass) {
		return ManagedObject.extend("sap.ui.demo.sequel.Sequel.controller.ContactDialog", {
			constructor: function(view) {
				this._view = view;
			},
			exit: function() {
				delete this._view;
			},
			open: function() {
				var view = this._view;
				
				if (!view.byId("contactDialog")) {
					var fragController = {
						parent: this,
						onCloseDialog: function() {
							view.byId("contactDialog").close();
						},
						onSubmit: function() {
							var formData = {
								subject: "info"
							};
							formData = view.getId("container-Sequel---App--name-inner").value;
							this.parent.onSubmit(formData);
						}
					};
					Fragment.load({
						id: view.getId(),
						name: "sap.ui.demo.sequel.Sequel.Fragment.ContactDialog",
						controller: fragController
					}).then(function (dialog) {
						view.addDependent(dialog);
						dialog.open();
					});
				} else {
					view.byId("contactDialog").open();
				}
			},
			onSubmit: function(data) {
				alert(data);
			}
		});
	});