import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header({ image, title, sub }) {
  return (
    <div className="a-header">
      {image && (
        <Link href="/">
          <a>
            <Image src="/wadud.png" alt="wadud" width="100" height="100" />
          </a>
        </Link>
      )}
      <h1 className="header">{title}</h1>
      <h4 className="sub">{sub}</h4>
    </div>
  );
}
