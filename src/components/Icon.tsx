import {
  BoxSeam,
  CameraVideo,
  CardImage,
  FileEarmarkRichtext,
  Folder,
  MusicNoteBeamed,
} from "react-bootstrap-icons";
import { File, fileType } from "../interfaces/file";

const Icon = ({ file }: { file: File }) => {
  switch (file.fileType) {
    case fileType.AudioFileType:
      return <MusicNoteBeamed />;
    case fileType.DirectoryFileType:
      return <Folder />;
    case fileType.ImageFileType:
      return <CardImage />;
    case fileType.TextFileType:
      return <FileEarmarkRichtext />;
    case fileType.VideoFileType:
      return <CameraVideo />;
    case fileType.UnknowFileType:
      return <BoxSeam />;
  }
};

export default Icon;
