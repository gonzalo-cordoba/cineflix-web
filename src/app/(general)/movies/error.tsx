"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <svg
        className="w-1/2 md:w-1/3 lg:w-1/4 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1119.60911 699"
      >
        <circle cx="292.60911" cy="213" r="213" fill="#f2f2f2" />
        <path
          d="M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819"
          transform="translate(-31.39089 -100.5)"
          fill="#2f2e41"
        />
        <path
          d="M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356"
          transform="translate(-31.39089 -100.5)"
          fill="currentColor"
        />
        <path
          d="M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288"
          transform="translate(-31.39089 -100.5)"
          fill="currentColor"
        />
        <path
          d="M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788"
          transform="translate(-31.39089 -100.5)"
          fill="#2f2e41"
        />
        <path
          d="M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z"
          transform="translate(-31.39089 -100.5)"
          fill="#a8a8a8"
        />
        <path
          d="M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z"
          transform="translate(-31.39089 -100.5)"
          opacity="0.2"
        />
        <ellipse
          cx="198.60911"
          cy="424.5"
          rx="187"
          ry="25.43993"
          fill="#3f3d56"
        />
        <ellipse
          cx="198.60911"
          cy="424.5"
          rx="157"
          ry="21.35866"
          opacity="0.1"
        />
        <ellipse cx="836.60911" cy="660.5" rx="283" ry="38.5" fill="#3f3d56" />
        <ellipse
          cx="310.60911"
          cy="645.5"
          rx="170"
          ry="23.12721"
          fill="#3f3d56"
        />
        <path
          d="M494,726.5c90,23,263-30,282-90"
          transform="translate(-31.39089 -100.5)"
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M341,359.5s130-36,138,80-107,149-17,172"
          transform="translate(-31.39089 -100.5)"
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566"
          transform="translate(-31.39089 -100.5)"
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z"
          transform="translate(-31.39089 -100.5)"
          fill="#2f2e41"
        />
        <circle cx="316.60911" cy="538" r="79" fill="#2f2e41" />
        <rect x="280.60911" y="600" width="24" height="43" fill="#2f2e41" />
        <rect x="328.60911" y="600" width="24" height="43" fill="#2f2e41" />
        <ellipse cx="300.60911" cy="643.5" rx="20" ry="7.5" fill="#2f2e41" />
        <ellipse cx="348.60911" cy="642.5" rx="20" ry="7.5" fill="#2f2e41" />
        <circle cx="318.60911" cy="518" r="27" fill="#fff" />
        <circle cx="318.60911" cy="518" r="9" fill="#3f3d56" />
      </svg>

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          500
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers.
        </p>
      </div>
    </div>
  );
}
