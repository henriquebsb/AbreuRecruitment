export interface Gallery {
  id: string;
  name: string;
  city: string;
  manager: string;
  nbrOfArtWorksOnDisplay: number;
}

export interface CreateGallery {
  name: string;
  city: string;
  manager: string;
}
