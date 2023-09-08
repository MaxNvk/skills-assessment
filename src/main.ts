import './style.css';
import { JS_FOOTER_CLASS, JS_LIST_CLASS } from "./shared/constants/index.constant.ts";
import { setupContactBySelect } from "./components/contact-by-select.ts";
import { setupContactsList } from "./components/contacts-list.ts";
import { api } from "./api/api.ts";
import { IContactItem } from "./shared/interfaces/contact-item.interface.ts";
import { EContactBy } from "./shared/enums/contact-by.enum.ts";

// Initialization of static html
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="contacts-widget">
    <div class="contacts-widget-header">
      Contacts
    </div>
    
    <div class="contacts-widget-content ${JS_LIST_CLASS}"></div>
    
    <div class="contacts-widget-footer ${JS_FOOTER_CLASS}"></div>
  </div>
`;

let contactsList: IContactItem[] | null = null;

// Created callback method for Select Element to trigger list rerender when changed contact by option
const onSelectChanged = (value: EContactBy) => {
  setupContactsList({
    parentElement: document.querySelector<HTMLDivElement>(`.${JS_LIST_CLASS}`)!,
    contactsList: contactsList!,
    propToShow: value,
  });
}

// setup of select by element.
setupContactBySelect(document.querySelector<HTMLDivElement>(`.${JS_FOOTER_CLASS}`)!, onSelectChanged);

// Here I added a simulation of contact list loading because I assume that the list will be loaded from the vendor API.
api.getContacts().then((response) => {
  // after the data will be loaded we start rendering of contact list element
  setupContactsList({
    parentElement: document.querySelector<HTMLDivElement>(`.${JS_LIST_CLASS}`)!,
    contactsList: response,
    propToShow: EContactBy.EmailAddress,
  });

  // We save the data in local variable to use it when re-rendering will be triggered.
  contactsList = response;
});
