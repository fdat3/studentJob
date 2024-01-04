export interface GooglePayload {
  access_token: string;
  authuser: string;
  expires_in: number;
  hd: string;
  scope: string;
  token_type: string;
}

export interface GoogleResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
  hd: string;
}
