import features from "../assets/features.js";
import Feature from "./Feature.jsx";

function Features() {
  return (
    <section className={""}>
      <div className={"container"}>
        <h2
          className={
            "text-3xl text-[#0f172a] text-center  font-semibold pb-[48px]"
          }
        >
          Features
        </h2>
      </div>
      <div className={"container grid grid-cols-4 gap-x-16 gap-y-24"}>
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
