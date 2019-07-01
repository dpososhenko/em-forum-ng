export interface ProfileState {
  profile: Profile;
}

export interface Profile {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  address: Address;
}

export interface Address {
  city?: string;
  street?: string;
  building?: string;
  complex?: string;
}
