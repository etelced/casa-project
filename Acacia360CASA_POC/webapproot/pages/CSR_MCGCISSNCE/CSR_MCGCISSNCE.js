dojo.declare("CSR_MCGCISSNCE", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	svCheckAccountResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblSearchResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
            this.acctNo.setDataValue("");
		}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblSearchResult.setCaption("<b><font color='blue'>Account number found!");
//            this.acctNo.setDataValue(inSender.getData().name);
    	}else if(inSender.getData().result=="503"){
            this.lblSearchResult.setCaption("<b><font color='red'>Host not available!");
    
    	}
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
		    app.toastSuccess("Process Completed.");
        }else if(inSender.getData().dataValue=="2"){
            this.txtAcctNo.setInvalid(true);
            app.toastWarning("Check Number has already been issued.");
        }else{
            console.log(inSender.getData());
            app.toastError("Process Failed.");
        }
            
	},
	_end: 0
});