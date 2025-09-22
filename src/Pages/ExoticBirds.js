import image from "../Assets/ExoticBirds/пелікан, папуга, павич.png"
const ExoticBirds = () => (
  <div>
    <div className="container py-4">
      <h1 className="text-center mb-4">
        Екзотичні птахи
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
              Пелікани
            </h2>
            <p>У зоопарку мешкає пелікан — велика водоплавна птах, яка приваблює відвідувачів своєю грацією та величчю.</p>
            <h2 className="h4 mt-4">
              Папуги
            </h2>
            <p>Серед птахів зоопарку є папуги, зокрема монашки. Вони відомі своєю активністю та яскравим забарвленням, що робить їх популярними серед відвідувачів. </p>
            <h2 className="h4 mt-4">
              Павичі
            </h2>
            <p>Павичі — це одні з найяскравіших мешканців зоопарку. Їхні розкішні хвости та барвисте оперення привертають увагу відвідувачів, особливо під час розпускання хвоста. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExoticBirds;