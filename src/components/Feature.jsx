function Feature({ icon: Icon, title, description }) {
  return (
    <div className={"flex flex-col gap-4"}>
      {Icon && <Icon className={" text-center"} color={"#93c5fd"} size={32} />}
      <h2 className={"text-2xl text-[#333] font-bold"}>{title}</h2>

      <p className={"text-[16px] leading-8 text-[#475569]"}>{description}</p>
    </div>
  );
}

export default Feature;
