interface Props {
  text: string;
}

export default function CreateAccountButton({ text }: Props) {
  return (
    <button className="border border-[#9667E0] w-full rounded-full py-6 text-[#9667E0] hover:bg-[#9667E0] hover:text-white">
      {text}
    </button>
  );
}
