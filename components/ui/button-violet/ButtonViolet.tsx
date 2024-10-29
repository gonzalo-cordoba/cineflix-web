interface Props {
  text: string;
}

export default function ButtonViolet({ text }: Props) {
  return (
    <button className="bg-[#9667E0] hover:bg-[#8257D0] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9667E0] focus:ring-opacity-50">
      {text}
    </button>
  );
}