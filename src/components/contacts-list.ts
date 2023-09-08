import { IContactItem } from "../shared/interfaces/contact-item.interface.ts";
import { EContactBy } from "../shared/enums/contact-by.enum.ts";

interface IGenerateContactLinkParams {
  value: string;
  propToShow: EContactBy;
  customClass?: string;
}

// created this method to enhance logic of link creation and optimize code size
const generateContactLink = ({ value, propToShow, customClass }: IGenerateContactLinkParams): string => {
  const isEmailAddressProp = propToShow === EContactBy.EmailAddress;
  const hrefContent = isEmailAddressProp ? `mailto:${value}` : `tel:${value}`;

  return `<a href="${hrefContent}" class="${customClass || ''}">${value}</a>`
};

const generateContactTemplate = (item: IContactItem, propToShow: EContactBy = EContactBy.EmailAddress): HTMLDivElement => {
  const isMainEmailProp = propToShow === EContactBy.EmailAddress;
  const contactProp = isMainEmailProp ? item.email : item.phone;

  const mainContactElement = generateContactLink({
    value: contactProp,
    propToShow,
    customClass: 'contact-item-info-main-link'
  });

  const hiddenContactElement = generateContactLink({
    value: isMainEmailProp ? item.phone : item.email,
    propToShow: isMainEmailProp ? EContactBy.PhoneNumber : EContactBy.EmailAddress
  });

  const itemElement = document.createElement('div');
  itemElement.classList.add('contact-item');

  // Here we use innerHTML property because it's too complex build this tree of elements and it will spend too much time.
  // But the implementation relates to the requirements. In this case we have no any restrictions how to do this.
  itemElement.innerHTML = `
      <div class="contact-item-name">
        <span class="contact-item-status contact-item-status--${item.status}"></span>
        
        <span>${item.firstName}</span>
      </div>
      
      <div class="contact-item-info">
        ${mainContactElement}
        
        <div class="contact-item-expand">
          ${mainContactElement}
          
          ${hiddenContactElement}
          
          <p>
              ${item.address}<br />
              ${item.city} ${item.state} ${item.zip}
          </p>
        </div>
      </div>
  `;

  return itemElement;
};

interface IProps {
  parentElement: HTMLDivElement;
  contactsList: IContactItem[];
  propToShow: EContactBy;
}

export const setupContactsList = ({ parentElement, contactsList, propToShow }: IProps) => {
  const contactListElement = document.createElement('div');
  contactListElement.classList.add('contacts-list');

  contactsList.forEach((item) => contactListElement.appendChild(generateContactTemplate(item, propToShow)));

  const prevElement = parentElement.querySelector('.contacts-list');

  if(prevElement) parentElement.replaceChild(contactListElement, prevElement!);
  else parentElement.appendChild(contactListElement);
}
