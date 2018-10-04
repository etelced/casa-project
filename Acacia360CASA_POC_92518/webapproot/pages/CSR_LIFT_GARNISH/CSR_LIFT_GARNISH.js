dojo.declare("CSR_LIFT_GARNISH", wm.Page, {
	start: function() {
        this.svLiftList.update();
        this.svLiftReason.update();
	},
	"preferredDevice": "desktop",

	acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		this.acctlistGrid.select(rowIndex);
        this.dlgAcctDet.show();
	},
	btnCloseClick: function(inSender) {
		this.dlgAcctDet.hide();
	},
	btnLiftClick: function(inSender) {
		app.confirm("Proceed to lift garnished amount?", false, 
                  dojo.hitch(this, function() {
                     this.svLiftHoldAmt.update();
                    }),
                  dojo.hitch(this, function() {}));
	},
	svLiftHoldAmtResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==1){
            app.alert("Lift Hold Garnished Amount Successful!");
            this.dlgAcctDet.hide();
            this.fAccountno.clear();
            this.svLiftList.update();
		}else if(inSender.getData().result==0){
            app.alert("Error in Routine!");    
		}
	},
	_end: 0
});