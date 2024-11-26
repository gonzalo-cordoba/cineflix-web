import Link from "next/link";

interface Props {
  text: string;
  href?: string;
}

export default function CreateAccountButton({ text, href = "/" }: Props) {
  return (
    <Link href={href} className="block w-full">
      <button className="border border-[#9667E0] w-full rounded-full py-6 text-[#9667E0] hover:bg-[#9667E0] hover:text-white">
        {text}
      </button>
    </Link>
  );
}
