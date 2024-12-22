export const FEATURE_ITEMS = [
  {
    lable: "Custom Host",
  },
];

export default function Sidebar() {
  return (
    <div className="fixed h-screen right-0 w-60 bg-zinc-900 flex flex-col py-20 px-2 border-l border-zinc-700">
      {FEATURE_ITEMS.map((featItem, idx) => {
        return (
          <div
            key={idx}
            className="px-2 py-1 cursor-pointer text-zinc-700 hover:text-zinc-400 duration-300 hover:bg-zinc-800 rounded-md items-center"
          >
            <span className="text-sm font-medium">{featItem.lable}</span>
          </div>
        );
      })}
    </div>
  );
}
