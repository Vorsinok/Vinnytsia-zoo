import image from "../Assets/RacoonSurcat/єнот та сурикат.png";
const RaccoonSurkat = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Єноти та сурикати
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
            Єноти
          </h2>
          <p>Єноти також є серед мешканців Подільського зоопарку. Проте деталей про їхню кількість, походження чи особливості утримання знайти не вдалося в доступних джерелах. </p>
          <h2 className="h4 mt-4">
            Сурикати
          </h2>
          <p>Сурикати з’явилися у зоопарку в 2017 році, їх привезли з Варшави. У родині сурикатів нещодавно народилося троє малят. Перебувають спочатку у зимівнику, а з приходом тепла — вже виходять у відкритий вольєр, коли температура дозволяє (наприклад, коли вдень стає близько +14 °C) — тоді вони активніші і більше гуляють на свіжому повітрі.</p>
        </div>
      </div>
    </div>
  </div>
);

export default RaccoonSurkat;
