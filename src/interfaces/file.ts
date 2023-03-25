export enum fileType {
  UnknowFileType,
  DirectoryFileType,
  AudioFileType,
  TextFileType,
  ImageFileType,
  VideoFileType,
}

export interface File {
  id: number;
  fileType: fileType;
  fileName: string;
  size: number;
  pathFile: string;
  streamPath: string;
  pathDownload: string;
}
