"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { PersonIcon } from "@primer/octicons-react";
import Image from "next/image";
import Link from "next/link";

export default function UserInformation() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center space-x-4">
      {session ? (
        <div className="flex items-center space-x-3">
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt={session.user?.name || "Usuario"}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white font-medium">
            {session.user?.name ?? "No name"}
          </span>
          <button
            onClick={() => signOut()}
            className="text-white text-sm bg-[#c77dff] hover:bg-[#9d4edd] px-3 py-1 rounded"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link href="/login">
          <PersonIcon className="text-white" size={24} />
        </Link>
      )}
    </div>
  );
}
