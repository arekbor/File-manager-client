import { File } from "../interfaces/file";
import FileInfo from "./FileInfo";

const Unknow = ({ file }: { file: File }) => {
  return (
    <div>
      <FileInfo file={file} />
    </div>
  );
};

export default Unknow;
