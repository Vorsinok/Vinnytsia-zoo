import image from "../Assets/Lemurs/лемур.png";
const Lemurs = () => (
  <div className="container py-4">
    <h1 className="text-center mb-4">
      Лемури
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
          <p>В зоопарку мешкають котячі лемури — спритні й грайливі примати, які приваблюють відвідувачів своєю активністю та дружелюбністю. Побачити їх можна у вольєрах, де вони бігають, лазять по гілках, тримаючись за столи, і досить легко контактують з людьми — їм подобаються обіймашки і ласкава увага.</p>
          <p>Народився малюк-лемур минулого літа, і зараз він поводиться, як ще дитина — іноді сором’язливий, але вже досить цікаво спостерігати за його рухами та дослідженнями простору.</p>
          <p>За словами працівників зоопарку, котячі лемури — не лише милі, але й інтелектуальні: вони уважно стежать за навколишнім світом, розпізнають людей, реагують на увагу.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Lemurs;