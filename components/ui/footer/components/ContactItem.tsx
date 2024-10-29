import { FC } from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ContactItem: FC<ContactItemProps> = ({ icon, children }) => (
  <li className="flex items-center space-x-2">
    {icon}
    <span>{children}</span>
  </li>
);
