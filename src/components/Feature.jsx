function Feature({ title, icon, description }) {
  return (
    <div>
      <p className={"text-2xl  text-[#333] font-bold  mb-4"}>{title}</p>
      <p className={"text-xl leading-8 text-[#52525b]"}>{description}</p>
    </div>
  );
}

export default Feature;
