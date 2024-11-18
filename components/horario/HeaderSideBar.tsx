interface Props {
  title: string;
}

export default function HeaderSideBar({ title }: Props) {
  return (
    <div className="text-center mb-8 space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

      <div className="inline-flex items-center gap-2 bg-[#9667E0]/20 rounded-full px-4 py-2">
        <span className="w-2 h-2 bg-[#9667E0] rounded-full"></span>
        Alto Palermo Shopping
      </div>
    </div>
  );
}
