import { Button } from "react-bootstrap";
import { File } from "../interfaces/file";
import api from "../utils/api";

const DownloadButton = ({
  file,
  disabled,
}: {
  file: File;
  disabled: boolean;
}) => {
  const handleDownload = () => {
    api({
      method: "get",
      url: `${file.pathDownload}`,
      responseType: "blob",
    })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", `${file.fileName}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Button size="sm" onClick={handleDownload} disabled={disabled}>
      Download
    </Button>
  );
};

export default DownloadButton;
