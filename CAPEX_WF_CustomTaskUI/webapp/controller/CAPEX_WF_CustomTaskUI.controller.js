sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.wf.demo.CAPEX_WF_CustomTaskUI.controller.CAPEX_WF_CustomTaskUI", {
			onInit: function () {

                $.ajax({
				url: "/sapwfdemoCAPEX_WF_CustomTaskUI/Northwind/V3/Northwind/Northwind.svc/Orders?$top=5&$format=json",
				method: "GET",
				async: false,
				success: function (result, xhr, data) {
					console.log(data);
				}
            }); 

			}
		});
	});
