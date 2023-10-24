import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-2">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticketpage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>

      <div>
        <button className="p-4 border-2 duration-75 ease-linear border-gray-600 rounded-md hover:bg-gray-200">
          Got nothing to do ??
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
