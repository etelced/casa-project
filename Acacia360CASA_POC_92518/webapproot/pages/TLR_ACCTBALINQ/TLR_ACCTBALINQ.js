dojo.declare("TLR_ACCTBALINQ", wm.Page, {
	start: function() {
		this.btnJournal.setCaption("View Ledger");
	},
	"preferredDevice": "desktop",

	svSearchAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        if(inSender.getData().result=="1"){
           if(this.svSearchAccount.getData().inquiry.prodcode == "10"){
    	    this.dojoGrid1.setColumnShowing("checkacctno", true);
            }else{
            this.dojoGrid1.setColumnShowing("checkacctno", false);
            }
            this.svFreezeInfo.update();
        }    
        else if(inSender.getData().result=="0"){
            app.toastError("Account Does Not Found/Exist!", 3000); 
            this.layer1.activate();  
        }
    },
	btnJournalClick: function(inSender) {
        if(this.layer2.isActive()){
            this.btnJournal.setCaption("View Ledger");
            this.layer1.activate();   
        }else{    
            this.layer2.activate();
            this.btnJournal.setCaption("Close Ledger");
        }
	},
	btnHomeClick: function(inSender) {
		if(this.app.varRole.getValue("dataValue")=="csr"){
            wm.Page.getPage("Main").pageContainer1.setPageName("");
		} else {
            wm.Page.getPage("Main").pageContainer1.setPageName("Home");
		}
            
	},
	fAcctNoFocus: function(inSender) {
		this.fAcctName.setDataValue("");
        this.fAcctName.setValue("required", false);
        this.fAcctNo.setValue("required", true);
	},
	fAcctNameFocus: function(inSender) {
		this.fAcctNo.setDataValue("");
        this.fAcctNo.setValue("required", false);
        this.fAcctName.setValue("required", true);
	},
	btnSearchClick: function(inSender) {
		if(this.fAcctNo.getDataValue()!=null){
            this.svSearchAccount.update();    
		}else if(this.fAcctName.getDataValue()!=null){
            this.svSearchByName.update();
		}
	},
	svSearchByNameResult: function(inSender, inDeprecated) {
		this.searchResultDialog.show();
        console.log(inSender);
	},
	btnCloseClick: function(inSender) {
		this.searchResultDialog.hide();
	},
	gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {		
        console.log(rowData.acctno);
        this.svSearchAccount.input.setValue("acctno", rowData.acctno);
        this.svSearchAccount.update();
        this.searchResultDialog.hide();
        this.fAcctNo.setDataValue(rowData.acctno);
        this.fAcctName.setDataValue(rowData.name);
	},
	dojoGrid1DebitFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
		var val = inValue;
        if(inValue==0.00){
                val = "";
        }else{
            val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
        }
		return val
	},
	dojoGrid1TxvaldtFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
		console.log(inValue);
        return newDate(Date.parse(inValue))
	},
	svOffAlertResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue==1){
            app.alert("Alert turned off");
            this.pnlAlert.setValue("showing", false);    
		}else if(inSender.getData().dataValue==503){
            app.alert("Host is not available");    
		}else{
            app.alert("Error in routine");    
		}
	},
	btnAlertClick: function(inSender) {
		this.svOffAlert.update();
	},
	acctNoATAHelpClick: function(inSender) {
	    if(this.acctNoATA.getDataValue()!=""){
            this.dlgATAInfo.show();	
	    }
	},
    btnCloseATAClick: function(inSender) {
	    this.dlgATAInfo.hide();	
	},
	dojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		this.svErrorCorrect.input.setValue("txrefno", rowData.txrefno);
        app.confirm("Apply Error Correct?", false, 
                    dojo.hitch(this, function() {
                     this.svErrorCorrect.update();
                    }),
                    dojo.hitch(this, function() {
                        app.toastInfo("Error Correct Cancelled", 5);
                    }), "Proceed", "Cancel");
	},
	svErrorCorrectResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        if(inSender.getData().dataValue=="0"){
            app.alert("Error in routine!");            
        }else if(inSender.getData().dataValue=="1") {
            app.alert("Error Correct Successful!");
            this.svSearchAccount.update();
        }
	},

	
	dojoGrid1Show: function(inSender) {
        console.log(this.svSearchAccount.getData().inquiry.prodcode + " prodcode");
        if(this.svSearchAccount.getData().inquiry.prodcode == "10"){
		this.dojoGrid1.setColumnShowing("checkacctno", true);
        }else{
        this.dojoGrid1.setColumnShowing("checkacctno", false);
        }
	},
	svFreezeInfoResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        if(inSender.getData()==null){
		    this.lblFreezeResult.setShowing(false);
        }else{
            this.lblFreezeResult.setShowing(true);
        }
	},
	btnCloseFloatitemsClick: function(inSender) {
		this.desFloatItems.hide();
	},
	btnViewFloatClick: function(inSender) {
		this.svGetFloatItems.update();
        this.desFloatItems.show();
	},
	_end: 0
});