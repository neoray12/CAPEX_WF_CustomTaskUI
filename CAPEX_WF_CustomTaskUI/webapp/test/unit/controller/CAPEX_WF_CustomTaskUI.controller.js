/*global QUnit*/

sap.ui.define([
	"sap/wf/demo/CAPEX_WF_CustomTaskUI/controller/CAPEX_WF_CustomTaskUI.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CAPEX_WF_CustomTaskUI Controller");

	QUnit.test("I should test the CAPEX_WF_CustomTaskUI controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
