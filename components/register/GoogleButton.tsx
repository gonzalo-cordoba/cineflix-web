import { FcGoogle } from "react-icons/fc";

interface Props {
  text: string;
}

export default function GoogleButton({ text }: Props) {
  return (
    <button
      //   variant="outline"
      className="border w-full rounded-full py-6 bg-white hover:bg-gray-50 border-gray-300 text-gray-600 hover:text-gray-700 flex items-center justify-center gap-3 font-normal"
    >
      <FcGoogle className="w-5 h-5" />
      {text}
    </button>
  );
}