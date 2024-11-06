interface Props {
  text: string;
}

export default function LoginButton({ text }: Props) {
  return (
    <button className="w-full bg-[#9667E0] hover:bg-[#8557c9] text-white rounded-full py-6">
      {text}
    </button>
  );
}
