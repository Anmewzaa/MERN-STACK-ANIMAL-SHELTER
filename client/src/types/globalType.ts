export interface navType {
  name: string;
  href: string;
}

export interface postType {
  _id: string;
  animalId: string;
  animalName: string;
  animalSpecies: string;
  animalHabit: string;
  animalDesciption: string;
  animalImage: string;
  comment: [];
  authorUid: string;
  authorName: string;
  authorEmail: string;
  authorProfile: string;
  date: Date;
  __V: number;
}

export interface stepType {
  number: number;
  picture: string;
  title: string;
  description: string;
}

export interface commentType {
  authorUid: string;
  authorName: string;
  authorProfile: string;
  Text: string;
}
