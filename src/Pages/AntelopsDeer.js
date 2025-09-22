import image from "../Assets/AntelopsDeer/антилопа і олень.png";
const AntelopsDeer = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Антилопи та олені
    </h1>
    <div className="row align-items-center" style={{ marginTop: "30px" }}>
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="home-container text-center">
          <div className="animation-container">
            <img
              src={image}
              alt="Animation"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="text-container">
          <h2 className="h4 mt-4">
            Антилопи
          </h2>
          <p>У зоопарку є рідкісна антилопа Канна (винторога антилопа) — одна з найбільших антилоп. У 2019 році у Канни народилося дитинча, вагою близько 50 кг. Дитинча з’явилося зі смужками на грудній клітці та вже з основами рогів. Мама та маля перебувають в окремому, обігріваному вольєрі. </p>
          <h2 className="h4 mt-4">
            Олені
          </h2>
          <p>У зоопарку мешкають мунтжаки — карликові олені, іноді їх називають «гавкаючими оленями». Вони приїхали з Київського зоопарку в обмін на благородних оленів. Мунтжаки швидко адаптувалися — самець досить невимушено підходить до відвідувачів, самиця — більш обережна.</p>
          <p>Також у звіринці з’явилася пара білих ланей — рідкісний вид. Іще одне поповнення — недавно народилися два оленятка із родини благородних оленів.</p>
        </div>
      </div>
    </div>
  </div>
);

export default AntelopsDeer;

