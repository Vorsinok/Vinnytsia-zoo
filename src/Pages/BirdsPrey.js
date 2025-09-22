import image from "../Assets/BirdsPrey/орли та беркути.png"
const BirdsPrey = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Орли та беркути
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
            Орли
          </h2>
          <p>У Подільському зоопарку є сурикати — з 2017 року, коли їх привезли з Варшави. Вони мешкають у теплих зимівниках, але щойно весна приносить тепло (приблизно коли вдень повітря прогрівається до ~+14 °C), виходять до відкритого вольєру. Нещодавно у родині сурикатів з’явилося троє малюків – вони народилися у закритому, обігріваємому просторі. Малюки спочатку живуть із матір’ю, п’ють молоко, а потім починають куштувати м’ясо та овочі, граються з братами й сестрами, риють нірки, освоюють простір.</p>
          <h2 className="h4 mt-4">
            Беркути
          </h2>
          <p>Єноти-полоскуни теж живуть у зоопарку — їх називають багатодітною родиною, бо народжувалося декілька малят. Досить цікаво, що мама єнотів спершу не давала підходити до них навіть працівникам, тож стать малюків довго залишалася таємницею. Вага новонароджених — дуже мала, дорослі єноти важать від кількох до більше ніж десяти кілограмів. </p>
        </div>
      </div>
    </div>
  </div>
);

export default BirdsPrey;