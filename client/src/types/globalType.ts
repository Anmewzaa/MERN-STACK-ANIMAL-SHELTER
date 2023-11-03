export interface navType {
  name: string;
  href: string;
}

export interface postType {
  _id: string;
  postId: string;
  postTitle: string;
  postDesciption: string;
  postImage: string;
  postComment: [];
  authorUid: string;
  authorName: string;
  authorEmail: string;
  authorProfile: string;
  __V: number;
}
