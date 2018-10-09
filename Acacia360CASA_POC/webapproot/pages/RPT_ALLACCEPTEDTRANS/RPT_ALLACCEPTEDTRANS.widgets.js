RPT_ALLACCEPTEDTRANS.widgets = {
	svAllAcceptedTrans: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllAcceptedTrans","service":"Report"}, {}, {
		input: ["wm.ServiceInput", {"type":"AllAcceptedTransInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate.dataValue","targetProperty":"date"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		label1Panel: ["wm.Panel", {"height":"110px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"All Accepted Transaction","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}],
			spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
			fDatePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				fDate: ["wm.Date", {"border":"0","caption":"Date :","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				spacer2: ["wm.Spacer", {"height":"48px","width":"20px"}, {}],
				button1: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"svAllAcceptedTrans"}]
			}]
		}],
		iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${svAllAcceptedTrans.dataValue}","targetProperty":"source"}, {}]
				}]
			}]
		}]
	}]
}