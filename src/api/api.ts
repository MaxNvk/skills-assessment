import { IContactItem } from "../shared/interfaces/contact-item.interface.ts";
import { makeTimeout } from "../utils/make-timeout.utils.ts";
import { EContactStatus } from "../shared/enums/contact-status.enum.ts";

export const api = {
  async getContacts(): Promise<IContactItem[]> {
    await makeTimeout(250);

    return [
      {
        firstName: "Christian",
        email: "christian@yahoo.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Available,
      },
      {
        firstName: "Rich",
        email: "rich@tripod.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Available,
      },
      {
        firstName: "Scott",
        email: "scott@mailinator.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Available,
      },
      {
        firstName: "Danny",
        email: "danny@hotmail.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Available,
      },
      {
        firstName: "Taka",
        email: "taka@myspace.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Unavailable,
      },
      {
        firstName: "Tim",
        email: "tim@netscape.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.SteppedAway,
      },
      {
        firstName: "Patrick",
        email: "patrick@live.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.Available,
      },
      {
        firstName: "Jacques",
        email: "jacques@aol.com",
        phone: "323-555-1234",
        address: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: 90234,
        status: EContactStatus.SteppedAway,
      },
    ];
  },
};
