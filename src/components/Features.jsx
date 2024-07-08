import features from "../assets/features.js";
import Feature from "./Feature.jsx";

function Features() {
  return (
    <section className={" mx-0 my-auto py-0 px-8"}>
      <div className={"container"}>
        <h2
          className={
            "text-3xl text-[#0f172a] text-center  font-semibold pb-[48px]"
          }
        >
          Features
        </h2>
      </div>
      <div
        className={
          "container grid grid-cols-1 superSmall:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8  superSmall:gap-x-12 superSmall:gap-14"
        }
      >
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
