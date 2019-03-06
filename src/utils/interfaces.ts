export interface Agenda {
  createdAt: number
  id: string
  updatedAt: number

  name: string
}

export interface Booking {
  createdAt: string
  id: string
  updatedAt: string

  name: string
}

export interface Coordinator {
  createdAt: string
  id: string
  updatedAt: string

  name: string
  phoneNumber: string
  email: string
}

export interface Event {
  createdAt: string
  id: string
  updatedAt: string

  communityTag: string
  date: string
  description: string
  name: string
  time: string

  agenda: Agenda
  bookings: [Booking]
  coordinator: Coordinator
  region: Region
  sector: Sector
  speakers: [Speaker]
  sponsors: [Sponsor]
  type: string
}

export interface Member {
  companyName: string
  email: string
  id: string
  jobTitle: string
  level: string
  name: string
  phoneNumber: string
  type: string
}

export interface MemberLevel {
  id: string
  name: string
  subscription: string
  event: [Event]
}

export interface Region {
  createdAt: string
  id: string
  updatedAt: string

  name: string
}

export interface Sector {
  createdAt: string
  id: string
  updatedAt: string

  name: string
}

export interface Speaker {
  createdAt: string
  id: string
  updatedAt: string

  name: string
  avatar: string
}

export interface Sponsor {
  createdAt: string
  id: string
  updatedAt: string

  name: string
  avatar: string
}

export interface User {
  id: string;
  name: string;
  username: string;
  token: number;
}
