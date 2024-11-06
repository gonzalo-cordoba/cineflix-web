import Image from "next/image";
import logo from "../../public/logo.webp";

interface Props {
  title?: string;
  subTitle?: string;
}

export default function WelcomeCard({ title, subTitle }: Props) {
  return (
    <div className="relative p-8 bg-[#9667E0] text-white rounded-xl flex flex-col justify-center items-center m-10">
      <Image
        className="mb-3"
        src={logo}
        alt="Logo Cineflix"
        width={100}
        height={100}
      />

      <h1 className="text-4xl font-medium mb-4">{title}</h1>
      <p className="text-xl text-white/80 text-center max-w-md">{subTitle}</p>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full ${
              step === 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
