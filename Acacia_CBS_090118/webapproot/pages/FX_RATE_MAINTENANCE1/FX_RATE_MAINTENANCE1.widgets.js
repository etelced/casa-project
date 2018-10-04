FX_RATE_MAINTENANCE1.widgets = {
	svGetRates: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListRates","service":"RateManagementFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListRatesInputs"}, {}]
	}],
	svAddOrUpdateRates: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateRates","service":"RateManagementFacade"}, {"onResult":"svAddOrUpdateRatesResult"}, {
		input: ["wm.ServiceInput", {"type":"addOrupdateRatesInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtIRR.dataValue","targetProperty":"rate.irr"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"txtPDS.dataValue","targetProperty":"rate.pds"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"txtCurrency.dataValue","targetProperty":"rate.currency"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"txtBoardRate.dataValue","targetProperty":"rate.boardrate"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.id","targetProperty":"rate.id"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"slcBuySellInd.dataValue","targetProperty":"rate.buySell"}, {}]
			}]
		}]
	}],
	notifUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddOrUpdateRates"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to update this record?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svDeleteRate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteRates","service":"RateManagementFacade"}, {"onResult":"svDeleteRateResult"}, {
		input: ["wm.ServiceInput", {"type":"deleteRatesInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.id","targetProperty":"id"}, {}]
			}]
		}]
	}],
	notifDelete: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svDeleteRate"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to delete this record?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	desAddOrUpdateRates: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"230px","height":"230px","title":undefined,"width":"350px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				slcBuySellInd: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Buy / Sell","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"Buy,Sell","width":"300px"}, {}],
				txtCurrency: ["wm.Text", {"border":"0","caption":"Currency Code:","displayValue":"","height":"25px","maxChars":"3","width":"300px"}, {"onchange":"txtCurrencyChange"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.currency","targetProperty":"dataValue"}, {}]
					}]
				}],
				txtBoardRate: ["wm.Number", {"border":"0","caption":"Board Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.boardrate","targetProperty":"dataValue"}, {}]
					}]
				}],
				txtIRR: ["wm.Number", {"border":"0","caption":"IRR:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.irr","targetProperty":"dataValue"}, {}]
					}]
				}],
				txtPDS: ["wm.Number", {"border":"0","caption":"PDS:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"gridRate.selectedItem.pds","targetProperty":"dataValue"}, {}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			btnDelete: ["wm.Button", {"border":"1","caption":"Delete","height":"20px","showing":false,"width":"80px"}, {"onclick":"notifDelete"}],
			btnUpdate: ["wm.Button", {"border":"1","caption":"Update","height":"20px","width":"80px"}, {"onclick":"notifUpdate"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${gridRate.isRowSelected}","targetProperty":"showing"}, {}]
				}]
			}],
			btnSave: ["wm.Button", {"border":"1","caption":"Save","height":"20px","width":"80px"}, {"onclick":"svAddOrUpdateRates"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${gridRate.emptySelection}","targetProperty":"showing"}, {}]
				}]
			}],
			btnClose: ["wm.Button", {"border":"1","caption":"Close","height":"20px","width":"80px"}, {"onclick":"btnCloseClick"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Buy/Sell Rates","height":"30px","padding":"4","styles":{"fontWeight":"bold","fontSize":"15px","backgroundGradient":{"direction":"vertical","startColor":"#c1c1d0","endColor":"#c1c1d0","colorStop":100}},"width":"100%"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				gridRate: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"15%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"boardrate","title":"Boardrate","width":"15%","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"irr","title":"IRR","width":"15%","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"pds","title":"PDS","width":"15%","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"createdby","title":"Created by","width":"10%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"createddate","title":"Createddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"updatedby","title":"Updated by","width":"15%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"updateddate","title":"Updated Date","width":"15%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Currency: \" + ${currency} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Boardrate: \" + ${wm.runtimeId}.formatCell(\"boardrate\", ${boardrate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"IRR: \" + ${wm.runtimeId}.formatCell(\"irr\", ${irr}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PDS: \" + ${wm.runtimeId}.formatCell(\"pds\", ${pds}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Created by: \" + ${createdby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Updated by: \" + ${updatedby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Updated Date: \" + ${wm.runtimeId}.formatCell(\"updateddate\", ${updateddate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"buySell","title":"BuySell","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.loansdb.data.Tbrates","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"gridRateClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svGetRates","targetProperty":"dataSet"}, {}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"30px","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					btnAdd: ["wm.Button", {"border":"1","caption":"Add","height":"20px","width":"80px"}, {"onclick":"btnAddClick"}]
				}]
			}]
		}]
	}]
}