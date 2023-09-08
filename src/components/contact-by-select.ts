import { EContactBy } from "../shared/enums/contact-by.enum.ts";

interface ISelectItem {
  label: string;
  value: EContactBy;
}

const selectOptions: ISelectItem[] = [
  {
    label: 'Email address',
    value: EContactBy.EmailAddress,
  },
  {
    label: 'Phone number',
    value: EContactBy.PhoneNumber,
  }
];

export const setupContactBySelect = (parentElement: HTMLDivElement, changeCallback: (value: EContactBy) => any): void => {
  // We're creating select element by this way because it's easier to use it with forEach by appending child elements to it
  const select = document.createElement('select');

  selectOptions.forEach((item) => {
    const itemElement = document.createElement('option');

    itemElement.text = item.label;
    itemElement.setAttribute('value', item.value);

    select.appendChild(itemElement);
  });

  parentElement.appendChild(select);

  select.addEventListener(
    'change',
    // @ts-ignore
    (event: { target: { value: string } }) => changeCallback(event.target.value)
  );
}
