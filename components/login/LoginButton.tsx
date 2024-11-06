import Link from "next/link";

interface Props {
  text: string;
  href?: string;
}

export default function LoginButton({ text, href = "/" }: Props) {
  return (
    <Link href={href}>
      <button className="block w-full bg-[#9667E0] hover:bg-[#8557c9] text-white rounded-full py-6 mt-5">
        {text}
      </button>
    </Link>
  );
}
