import { Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Background from "../../components/Background";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Background>
          <LinkContainer to={`/api/manager/`} className={"mt-4"}>
            <Button size="sm">File manager</Button>
          </LinkContainer>

          <LinkContainer to={`/upload`} className={"mt-4"}>
            <Button size="sm">Upload files</Button>
          </LinkContainer>

          <TypeAnimation
            sequence={[
              "Magnetyczny bęben IBM 650 miał długość 40 cm i kręcił się z szybkością 12 500 obrotów na minutę. Dane zapisywano na 40 ścieżkach, a cały bęben miał pojemność 10 tys. znaków. W latach 50. systemy obliczeniowe ważyły nawet kilka ton. Sprzęt komputerowy ważył setki kilogramów, a dyski twarde rozmiarami odpowiadały lodówkom. Ich cena była wysoka. 1 bajt pamięci dyskowej kosztował 1 dolara, czyli za system dyskowy o pojemności 1 TB zapłacilibyśmy wtedy setki miliardów dolarów.", // Types 'One'
              1000,
              "Pamięci Solid-State Storage (z układami NAND/flash) robią dzisiaj prawdziwą karierę i są instalowane w wielu przenośnych urządzeniach. Widoczne poniżej pamięci Pico (technologia NAND/flash), produkowane przez firmę SuperTalent, mają pojemności 8 GB. Produkowane obecnie pamięci NAND/flash wielkości gumy do żucia, mają pojemność 256 GB.", // Deletes 'One' and types 'Two'
              1000,
              "Ciekawostką jest fakt, że pierwszy dysk twardy został wynaleziony przez IBM w 1956 roku. Nazywał się IBM 305 RAMAC (Random Access Method of Accounting and Control) i miał pojemność aż 5 megabajtów. Był to olbrzymi postęp w porównaniu do innych dostępnych wówczas nośników danych, takich jak taśmy magnetyczne i kartki perforowane.", // Types 'Three' without deleting 'Two'
              1000,
              "Od czasu wynalezienia IBM 305 RAMAC, dyski twarde przeszły niezwykłą ewolucję. Obecnie dyski twarde są znacznie mniejsze, bardziej wydajne i mają ogromne pojemności, sięgające terabajtów. Stanowią one podstawowy nośnik danych w większości komputerów i serwerów na całym świecie, umożliwiając przechowywanie i szybki dostęp do ogromnych ilości informacji.",
              1000,
              "Algorytm sortowania przez wstawianie jest skuteczny dla małych zbiorów danych. Polega on na wstawianiu kolejnych elementów w odpowiednie miejsce w posortowanej części zbioru. Jest on bardziej wydajny niż sortowanie bąbelkowe i ma złożoność czasową O(n^2) w najgorszym przypadku, ale dla częściowo posortowanych danych może być znacznie szybszy.",
              1000,
              "Chmura obliczeniowa, zwana także 'cloud computing', to model dostarczania usług komputerowych przez Internet. Zamiast korzystać z lokalnych zasobów, takich jak serwery i pamięć, dane i aplikacje są przechowywane i przetwarzane na zdalnych serwerach w chmurze. To pozwala użytkownikom na elastyczne korzystanie z zasobów w zależności od potrzeb, bez konieczności inwestowania w infrastrukturę IT.",
            ]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{
              color: "azure",
              textAlign: "center",
              fontSize: "1em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50%",
            }}
          />
        </Background>
      </Row>
    </Container>
  );
};

export default HomePage;
