function Card({ title, info, icon, color }) {
  return (
    <div
      className={`h-[15rem] p-5 border-t-4 rounded-lg max-w-[30rem] shadow-2xl  flex flex-col`}
      style={{ borderTopColor: color }}
    >
      <h3 className="text-[1.3rem] font-bold">{title}</h3>
      <p className="py-1 max-w-[20rem]">{info}</p>
      <div className="h-[40%]  ml-auto">
        <img src={icon} alt={`Icon for ${title}`} className="size-16 mt-6" />
      </div>
    </div>
  );
}

export default Card;
