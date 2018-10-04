
package com.gldb.data;



/**
 *  GLDB.Tbdocumentpertransaction
 *  09/29/2018 15:22:54
 * 
 */
public class Tbdocumentpertransaction {

    private Integer id;
    private String txCode;
    private String documentCode;
    private String subTypeCode;
    private String realEstateCode;
    private String requirementType;
    private Integer requirementGroup;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxCode() {
        return txCode;
    }

    public void setTxCode(String txCode) {
        this.txCode = txCode;
    }

    public String getDocumentCode() {
        return documentCode;
    }

    public void setDocumentCode(String documentCode) {
        this.documentCode = documentCode;
    }

    public String getSubTypeCode() {
        return subTypeCode;
    }

    public void setSubTypeCode(String subTypeCode) {
        this.subTypeCode = subTypeCode;
    }

    public String getRealEstateCode() {
        return realEstateCode;
    }

    public void setRealEstateCode(String realEstateCode) {
        this.realEstateCode = realEstateCode;
    }

    public String getRequirementType() {
        return requirementType;
    }

    public void setRequirementType(String requirementType) {
        this.requirementType = requirementType;
    }

    public Integer getRequirementGroup() {
        return requirementGroup;
    }

    public void setRequirementGroup(Integer requirementGroup) {
        this.requirementGroup = requirementGroup;
    }

}
