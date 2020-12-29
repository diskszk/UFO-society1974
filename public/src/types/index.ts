export type File = {
  filename: string;
  path: string;
};

export type Album = {
  discription: string;
  imageFile: File;
  id: string; // random
  publish_date: string; // YYYY-MM-DD
  songs?: Song[];
  title: string;
  services?: Services;
};

export type Song = {
  id: string;
  lyric: string;
  songFile: File;
  story: string;
  title: string;
  wordsRights: string;
  musicRights: string;
};

export type Services = {
  AppleMusic: string;
  Spotify: string;
  iTunes: string;
  Bandcamp: string;
};

// redux
export type RootStore = {
  loadingStatus: LoadingStatus;
  modalStatus: ModalStatus;
};
export type LoadingStatus = {
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
};
export type ModalStatus = {
  isOpen: boolean;
  modalType: "LYRIC_NOTE" | "ERROR" | "LOADING" | "";
  errorMessage: string;
  song: Song;
};
