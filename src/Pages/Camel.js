import image from "../Assets/Camel/верблюд.png";
 const Camel = () => (
    <div className="container py-4">
    <h1 className="text-center mb-4">
      Верблюди
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
          <p>У зоопарку тепер є двогорбий верблюд, який був викуплений завдяки меценату ПАТ «ПлазмаТек». До цього він жив у приватному зоопарку на Донеччині, потім — в Іллінецькому районі Вінницької області.</p>
          <p>Верблюд став помітною прикрасою зоопарку — люди полюбляють спостерігати за ним. Його поява розширює спектр тварин, які представляють екзотичні види, і додає цікавинку для відвідувачів.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Camel;