import image from "../Assets/Tiger/тигр і ягуар.png";

const Tiger = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Ягуари та тигри
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
          <p>У Подільському зоопарку мешкають два екзотичні хижаки – уссурійська тигриця Ліза та ягуар Джекі. Обоє вони з’явилися тут під час війни, коли їх евакуювали з приватного звіринця на півдні України. Після переїзду тварини певний час відновлювали сили: ягуар був виснажений і травмований від стресу, тигриця теж потребувала догляду та адаптації.</p>
          <p>Сьогодні хижаки почуваються добре, активно харчуються та звикають до нової домівки. Для них у зоопарку збудували сучасні вольєри з просторими вигулами, утепленими зимівниками й навіть басейнами. Тут Ліза й Джекі не лише мають комфортні умови для життя, а й стали справжніми улюбленцями відвідувачів.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Tiger;