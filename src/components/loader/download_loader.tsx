import "./style.css";

const DownloadLoader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <div className="text-spinner text-small-spinner">.·:*¨¨* ≈☆≈ *¨¨*:·.</div>
      <div className="text-spinner text-danger">
        Trwa ładowanie pliku, za momencik plik się pobierze...
      </div>
      <div className="text-spinner text-small-spinner text-info">
        Zrób sobię kawę albo herbatę. Ja polecam oczywiście czarną kawę :)
      </div>
    </div>
  );
};

export default DownloadLoader;
