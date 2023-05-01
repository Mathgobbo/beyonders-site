import { useI18n } from "@/hooks/useI18n";
import { SyntheticEvent, useRef } from "react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
export const Contact = () => {
  const {
    home: { contact },
  } = useI18n();
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!nameRef.current || !messageRef.current) return;
    const a = document.createElement("a");
    a.href = `mailto:beyonders.oficial@gmail.com?subject=${contact.mailSubject}&body=Name: ${nameRef.current.value} | Message: ${messageRef.current.value}`;
    a.click();
  };

  return (
    <section
      id="contact"
      className="px-4 py-10 lg:py-20 space-y-2 w-full flex flex-col items-center bg-main-black border-t border-gray-600"
    >
      <h2 className="text-2xl font-bold tracking-wider uppercase text-main-white">
        {contact.title}
      </h2>
      <p className="text-gray-200">{contact.subtitle1}</p>
      <div className="flex my-2 space-x-4">
        <IconLink
          url="https://www.linkedin.com/company/beyonders-digital-solutions/"
          Logo={FaLinkedinIn}
        />
        <IconLink
          url="https://www.instagram.com/beyonders.oficial/"
          Logo={FaInstagram}
        />
        <IconLink url="https://wa.me/5547999381468" Logo={FaWhatsapp} />
      </div>
      <section className="space-y-3 text-gray-200 lg:text-lg max-w-full">
        <p>{contact.subtitle2}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Note :
            - You can modify the font style and form style to suit your website. 
            - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
            - The Mandatory check script can modified as to suit your business needs. 
            - It is important that you test the modified form before going live.-->
         <div id='crmWebToEntityForm' class='zcwf_lblRight crmWebToEntityForm' >
           <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
            <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads5721369000000413399 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5721369000000413399()' accept-charset='UTF-8'>
          <input type='text' style='display:none;' name='xnQsjsdp' value='b6c8de1f37356a2da29e1032ebcc5b6cb5235162461bb1abe4576dadf8e36ec4'></input> 
          <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
          <input type='text' style='display:none;' name='xmIwtLD' value='7efb3c786f26c94f79b71710027fc68952850a9a83c4274d27977be837a77c5f'></input> 
          <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
          <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;beyonders.com.br&#x2f;success' > </input>
            <!-- Do not remove this code. -->
         
         <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='First_Name'>First Name</label></div><div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40'></input><div class='zcwf_col_help'></div></div></div>
         <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Last_Name'>Last Name<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div>
         <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Email'>E-mail<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div class='zcwf_col_help'></div></div></div>
         <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Company'>Company</label></div><div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200'></input><div class='zcwf_col_help'></div></div></div>
         <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Mobile'>Phone</label></div><div class='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxlength='30'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'><input type='reset' class='zcwf_button' name='reset' value='Reset' title='Reset'></div></div>
           <script>
           function validateEmail5721369000000413399()
           {
             var form = document.forms['WebToLeads5721369000000413399'];
             var emailFld = form.querySelectorAll('[ftype=email]');
             var i;
             for (i = 0; i < emailFld.length; i++)
             {
               var emailVal = emailFld[i].value;
               if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
               {
                 var atpos=emailVal.indexOf('@');
                 var dotpos=emailVal.lastIndexOf('.');
                 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
                 {
                   alert('Insira um endereço de e-mail válido. ');
                   emailFld[i].focus();
                   return false;
                 }
               }
             }
             return true;
           }
         
              function checkMandatory5721369000000413399() {
             var mndFileds = new Array('Last Name','Email');
             var fldLangVal = new Array('Last\x20Name','E\x2Dmail');
             for(i=0;i<mndFileds.length;i++) {
               var fieldObj=document.forms['WebToLeads5721369000000413399'][mndFileds[i]];
               if(fieldObj) {
               if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
                if(fieldObj.type =='file')
                 { 
                  alert('Selecione um arquivo para fazer o upload.'); 
                  fieldObj.focus(); 
                  return false;
                 } 
               alert(fldLangVal[i] +' não pode ficar em branco.'); 
                         fieldObj.focus();
                         return false;
               }  else if(fieldObj.nodeName=='SELECT') {
                        if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
                 alert(fldLangVal[i] +' não pode ficar em branco.'); 
                 fieldObj.focus();
                 return false;
                  }
               } else if(fieldObj.type =='checkbox'){
                   if(fieldObj.checked == false){
                 alert('Please accept  '+fldLangVal[i]);
                 fieldObj.focus();
                 return false;
                  } 
                } 
                try {
                    if(fieldObj.name == 'Last Name') {
                 name = fieldObj.value;
                      }
               } catch (e) {}
                 }
             }
             if(!validateEmail5721369000000413399()){return false;}
             document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
           }
         
         function tooltipShow5721369000000413399(el){
           var tooltip = el.nextElementSibling;
           var tooltipDisplay = tooltip.style.display;
           if(tooltipDisplay == 'none'){
             var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
             for(i=0; i<allTooltip.length; i++){
               allTooltip[i].style.display='none';
             }
             tooltip.style.display = 'block';
           }else{
             tooltip.style.display='none';
           }
         }
         </script>
           </form>
         </div>`,
          }}
        ></div>
        {/* <form onSubmit={onSubmit} className="flex flex-col space-y-3 ">
          {" "}
          <input
            className="p-2 text-gray-700 transition border-0 rounded-lg outline-none placeholder:text-gray-400 focus:border-2 focus:border-secondary-green focus:ring ring-offset-2 ring-main-green/60"
            type="text"
            placeholder={contact.namePlaceholder}
            ref={nameRef}
            required
          />
          <textarea
            className="p-2 text-gray-700 transition border-0 rounded-lg outline-none placeholder:text-gray-400 focus:border-2 focus:border-secondary-green focus:ring ring-offset-2 ring-main-green/60"
            cols={30}
            rows={6}
            placeholder={contact.messagePlaceholder}
            ref={messageRef}
            required
          ></textarea>
          <button
            className="px-8 py-2 uppercase transform hover:translate-y-1 hover:border-none text-white transition border-b-2 rounded-lg bg-secondary-green hover:bg-main-green/80 border-main-white"
            type="submit"
          >
            {contact.submitButtonLabel}
          </button>
        </form> */}
      </section>
    </section>
  );
};

interface IIConLinkProps {
  Logo: Function;
  url: string;
}
const IconLink = ({ Logo, url }: IIConLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="p-4 transition border rounded-full text-main-white border-main-white bg-secondary-green hover:bg-main-green/80"
    >
      <Logo className="w-8 h-8 fill-current" />
    </a>
  );
};
