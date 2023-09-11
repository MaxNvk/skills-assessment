(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const m="js-contacts-widget-footer",l="js-contacts-widget-list";var c=(e=>(e.PhoneNumber="phone-number",e.EmailAddress="email-address",e))(c||{});const v=[{label:"Email address",value:c.EmailAddress},{label:"Phone number",value:c.PhoneNumber}],h=(e,i)=>{const n=document.createElement("select");v.forEach(s=>{const t=document.createElement("option");t.text=s.label,t.setAttribute("value",s.value),n.appendChild(t)}),e.appendChild(n),n.addEventListener("change",s=>i(s.target.value))},d=({value:e,propToShow:i,customClass:n})=>`<a href="${i===c.EmailAddress?`mailto:${e}`:`tel:${e}`}" class="${n||""}">${e}</a>`,f=(e,i=c.EmailAddress)=>{const n=i===c.EmailAddress,s=n?e.email:e.phone,t=d({value:s,propToShow:i,customClass:"contact-item-info-main-link"}),a=d({value:n?e.phone:e.email,propToShow:n?c.PhoneNumber:c.EmailAddress}),r=document.createElement("div");return r.classList.add("contact-item"),r.innerHTML=`
      <div class="contact-item-name">
        <span class="contact-item-status contact-item-status--${e.status}"></span>
        
        <span>${e.firstName}</span>
      </div>
      
      <div class="contact-item-info">
        ${t}
        
        <div class="contact-item-expand">
          ${t}
          
          ${a}
          
          <p>
              ${e.address}<br />
              ${e.city} ${e.state} ${e.zip}
          </p>
        </div>
      </div>
  `,r},u=({parentElement:e,contactsList:i,propToShow:n})=>{const s=document.createElement("div");s.classList.add("contacts-list"),i.forEach(a=>s.appendChild(f(a,n)));const t=e.querySelector(".contacts-list");t?e.replaceChild(s,t):e.appendChild(s)},y=e=>new Promise(i=>setTimeout(i,e));var o=(e=>(e.Available="available",e.Unavailable="unavailable",e.SteppedAway="stepped-away",e))(o||{});const C={async getContacts(){return await y(250),[{firstName:"Christian",email:"christian@yahoo.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Available},{firstName:"Rich",email:"rich@tripod.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Available},{firstName:"Scott",email:"scott@mailinator.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Available},{firstName:"Danny",email:"danny@hotmail.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Available},{firstName:"Taka",email:"taka@myspace.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Unavailable},{firstName:"Tim",email:"tim@netscape.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.SteppedAway},{firstName:"Patrick",email:"patrick@live.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.Available},{firstName:"Jacques",email:"jacques@aol.com",phone:"323-555-1234",address:"6539 Wilton Ave.",city:"Culver City",state:"CA",zip:90234,status:o.SteppedAway}]}};document.querySelector("#app").innerHTML=`
  <div class="contacts-widget">
    <div class="contacts-widget-header">
      Contacts
    </div>
    
    <div class="contacts-widget-content ${l}"></div>
    
    <div class="contacts-widget-footer ${m}"></div>
  </div>
`;let p=null;const A=e=>{u({parentElement:document.querySelector(`.${l}`),contactsList:p,propToShow:e})};h(document.querySelector(`.${m}`),A);C.getContacts().then(e=>{u({parentElement:document.querySelector(`.${l}`),contactsList:e,propToShow:c.EmailAddress}),p=e});
