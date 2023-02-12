export enum SelectedPage {
  Home = "home",
  Team = "team",
  Services = "services",
  ContactUs = "contactus",
}

export interface CoachingType {
  price: string;
  description: string;
  image: string
}

export interface TeamMemberType {
  name: string;
  description: string;
  image: string;
}
