// const print=console.log;

// const templates = {
//     A: { letter: 'BSO Project Assignment DPA long', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=92584dd7%2Db087%2D49b7%2D9074%2Da3f0054ff459&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assignment%20with%20long%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     B: { letter: 'BSO Project Assignment DPA short', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assingment%20with%20short%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BD4075359%2D299A%2D4E7A%2DB33F%2D213C9BD5491C%7D' },
//     C:  { letter: 'CCBMS Project Assignment DPA long', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=5de32439%2D699f%2D43cd%2D9953%2Deb20b2ff0d4b&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment%20with%20long%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     D: { letter: 'CCBMS Project Assignment DPA short', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=5999dd4b%2D1c68%2D484e%2Db22e%2D94e0b07d8d74&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment%20with%20short%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     I: { letter: 'BSO Project Assignment', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/Templates/docsethomepage.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assignment&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BDCD54DFC%2DAD65%2D4E53%2D952A%2D87F340707060%7D' },
//     J: { letter: 'CCBMS Project Assignment', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/Templates/docsethomepage.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BDCD54DFC%2DAD65%2D4E53%2D952A%2D87F340707060%7D' }
// };

// var itToolsText = `Please contact Vendor Management Office (Lozana Belcheva) at lozana.belcheva@cchellenic.com.`;

// var templateText = 'You need to fill out form {letter}. You can find it [here]({link})';
// var rechargintText = 'No recharging is currently allowed. Please conclude the following agreement [' + templates.C.letter + '](' + templates.C.link + ') or [' + templates.D.letter + '](' + templates.D.link + ')';

// const context={}
// context.entities={
// PurchasedbByPeopleAndCultureDepartment:'no',ServiceRechargedToAnotherEntity:'yes',DataTransferredOutside: 'no',FinancialDataTransferredOrAnalyzed: 'no'
// }

// context.entities.ShareEmployeeOrCustomerData='yes';
// context.entities.RelatedToITTools='no';
// console.log(`context.entities`,context.entities);


// if (context.entities.ShareEmployeeOrCustomerData === 'no')
//     rechargintText = 'No recharging is currently allowed. Please conclude the following agreement [' + templates.J.letter + '](' + templates.J.link + ')';
// var template = null;

// var response = '';

// const answers = [
//     context.entities.PurchasedbByPeopleAndCultureDepartment === 'yes',
//     context.entities.ServiceRechargedToAnotherEntity === 'yes',
//     context.entities.DataTransferredOutside === 'yes',
//     context.entities.FinancialDataTransferredOrAnalyzed === 'yes'
// ];

// if (context.entities.ShareEmployeeOrCustomerData === 'no') {
//     if (answers[0] && answers[1]) template = templates.I;
//     else if (answers[0] && !answers[1]) template = templates.I;
//     else if (!answers[0] && !answers[1]) template = templates.J;
//     else template = 'C or D';
// } else {
//     console.log(answers[0], answers[1], answers[2],answers[3]);

//     if (context.entities.RelatedToITTools === 'yes') response = itToolsText;
//     else if (answers[0] && answers[1] && answers[2] && answers[3]) template = templates.A;      
//     else if (answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.A;  

//     else if (answers[0] && answers[1] && !answers[2] && answers[3]) template = templates.B;
//     else if (answers[0] && !answers[1] && !answers[2] && answers[3]) template = templates.B;   

//     else if (answers[0] && answers[1] && answers[2] && !answers[3]) template = templates.A;     
//     else if (answers[0] && !answers[1] && answers[2] && !answers[3]) template = templates.A;    

//     else if (answers[0] && answers[1] && !answers[2] && !answers[3]) template = templates.B;
//     else if (answers[0] && !answers[1] && !answers[2] && !answers[3]) template = templates.B;   

//     else if (!answers[0] && answers[1] && answers[2] && answers[3]) template = templates.C;
//     else if (!answers[0] && answers[1] && answers[2] && !answers[3]) template = templates.C;

//     else if (!answers[0] && answers[1] && !answers[2] && answers[3]) template = templates.C;
//     else if (!answers[0] && answers[1] && !answers[2] && !answers[3]) template = templates.D;

//     else if (!answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.C;
//     else if (!answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.C;      
     
//     else if (!answers[0] && !answers[1] && !answers[2] && answers[3]) template = templates.C; 

//     else if (!answers[0] && !answers[1] && answers[2] && !answers[3]) template = templates.C;   
//     else if (!answers[0] && !answers[1] && !answers[2] && !answers[3]) template = templates.D;   

//     else template = 'C or D';
// }

// if (template === 'C or D') response = rechargintText;
// else if (template) response = templateText.replace('{letter}', template.letter).replace('{link}', template.link);
   

// print(response);


// /*
// const templates = {
//     A: { letter: 'BSO Project Assignment DPA long', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=92584dd7%2Db087%2D49b7%2D9074%2Da3f0054ff459&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assignment%20with%20long%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     B: { letter: 'BSO Project Assignment DPA short', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assingment%20with%20short%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BD4075359%2D299A%2D4E7A%2DB33F%2D213C9BD5491C%7D' },
//     C:  { letter: 'CCBMS Project Assignment DPA long', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=5de32439%2D699f%2D43cd%2D9953%2Deb20b2ff0d4b&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment%20with%20long%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     D: { letter: 'CCBMS Project Assignment DPA short', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/AllItems.aspx?csf=1&web=1&cid=5999dd4b%2D1c68%2D484e%2Db22e%2D94e0b07d8d74&RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment%20with%20short%20form%20DPA&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A' },
//     I: { letter: 'BSO Project Assignment', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/Templates/docsethomepage.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FBSO%20Project%20Assignment&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BDCD54DFC%2DAD65%2D4E53%2D952A%2D87F340707060%7D' },
//     J: { letter: 'CCBMS Project Assignment', link: 'https://cchellenic.sharepoint.com/sites/CL-LegalShP/icsc/Practice%20Group%20Documents/Forms/Templates/docsethomepage.aspx?RootFolder=%2Fsites%2FCL%2DLegalShP%2Ficsc%2FPractice%20Group%20Documents%2FTemplates%2FSelf%2DBuy%2FCCBMS%20Project%20Assignment&FolderCTID=0x0120006641D027F4AA5B40BC6E61CA6697543A&View=%7BDCD54DFC%2DAD65%2D4E53%2D952A%2D87F340707060%7D' }
// };

// var itToolsText = `Please contact Vendor Management Office (Lozana Belcheva) at lozana.belcheva@cchellenic.com.`;

// var templateText = 'You need to fill out form {letter}. You can find it [here]({link})';
// var rechargintText = 'No recharging is currently allowed. Please conclude the following agreement [' + templates.C.letter + '](' + templates.C.link + ') or [' + templates.D.letter + '](' + templates.D.link + ')';

// if (context.entities.ShareEmployeeOrCustomerData === 'no')
//     rechargintText = 'No recharging is currently allowed. Please conclude the following agreement [' + templates.J.letter + '](' + templates.J.link + ')';

// var template = null;

// var response = '';

// const answers = [
//     context.entities.PurchasedbByPeopleAndCultureDepartment === 'yes',
//     context.entities.ServiceRechargedToAnotherEntity === 'yes',
//     context.entities.DataTransferredOutside === 'yes',
//     context.entities.FinancialDataTransferredOrAnalyzed === 'yes'
// ];

// if (context.entities.ShareEmployeeOrCustomerData === 'no') {
//     if (answers[0] && answers[1]) template = templates.I;
//     else if (answers[0] && !answers[1]) template = templates.I;
//     else if (!answers[0] && !answers[1]) template = templates.J;
//     else template = 'C or D';
// } else {
//     if (context.entities.RelatedToITTools === 'yes') response = itToolsText;
//      else if (answers[0] && answers[1] && answers[2] && answers[3]) template = templates.A;      
//     else if (answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.A;  

//     else if (answers[0] && answers[1] && !answers[2] && answers[3]) template = templates.B;
//     else if (answers[0] && !answers[1] && !answers[2] && answers[3]) template = templates.B;   

//     else if (answers[0] && answers[1] && answers[2] && !answers[3]) template = templates.A;     
//     else if (answers[0] && !answers[1] && answers[2] && !answers[3]) template = templates.A;    

//     else if (answers[0] && answers[1] && !answers[2] && !answers[3]) template = templates.B;
//     else if (answers[0] && !answers[1] && !answers[2] && !answers[3]) template = templates.B;   

//     else if (!answers[0] && answers[1] && answers[2] && answers[3]) template = templates.C;
//     else if (!answers[0] && answers[1] && answers[2] && !answers[3]) template = templates.D;
    
//     else if (!answers[0] && answers[1] && !answers[2] && answers[3]) template = templates.D;



//     else if (!answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.C;
//     else if (!answers[0] && !answers[1] && answers[2] && answers[3]) template = templates.C;      
     
//     else if (!answers[0] && !answers[1] && !answers[2] && answers[3]) template = templates.C; 

//     else if (!answers[0] && !answers[1] && answers[2] && !answers[3]) template = templates.C;   
//     else if (!answers[0] && !answers[1] && !answers[2] && !answers[3]) template = templates.D;   

//     else template = 'C or D';
// }

// if (template === 'C or D') response = rechargintText;
// else if (template) response = templateText.replace('{letter}', template.letter).replace('{link}', template.link);

// print(response);
// */



// ALTER TABLE `translation_dictionary` RENAME COLUMN old_column_name TO new_column_name;

// ALTER TABLE `translation_dictionary` ADD `created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP

// ALTER TABLE `translation_dictionary` CHANGE `created_on` `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

// ALTER TABLE translation_dictionary
//     CHANGE created_on 
//     created_on TIMESTAMP NOT NULL
//                     DEFAULT CURRENT_TIMESTAMP
//                     ON UPDATE CURRENT_TIMESTAMP;


                 
