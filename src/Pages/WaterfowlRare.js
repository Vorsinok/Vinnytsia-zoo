import image from "../Assets/WaterfowlRare/лебедь та голуб.png"
 const WaterfowlRare = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Лебеді та голуби
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
            Лебеді
          </h2>
          <p>У зоопарку мешкають лебеді — елегантні водоплавні птахи, які додають особливого шарму водоймам зоопарку. Їхні граційні рухи та величне оперення приваблюють відвідувачів, створюючи атмосферу спокою та гармонії. </p>
          <h2 className="h4 mt-4">
            Голуби
          </h2>
          <p>Серед птахів зоопарку є різноманітні види голубів, зокрема рідкісні породи. Ці птахи відомі своєю миролюбною природою та здатністю адаптуватися до різних умов. Їх можна побачити як у вольєрах, так і на відкритих просторах зоопарку.  </p>
        </div>
      </div>
    </div>
  </div>
);

export default WaterfowlRare;