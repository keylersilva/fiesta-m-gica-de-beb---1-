export type Invitation = {
  id: string;
  name: string;
  email: string;
  attending: boolean;
  message?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'guest';
};

export type EventDetails = {
  title: string;
  date: string;
  location: string;
  description?: string;
};