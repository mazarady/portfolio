import Link from "next/link";

export default function Nav() {
  return (
    <div className="m-nav">
      <Link href="/">
        <a>
          <h3 className="navHeader">maaz</h3>
        </a>
      </Link>
      <div className="m-nav__right">
        <Link href="/Munir_Maaz_Resume.pdf">
          <a>
            <h3 className="navLink">resume</h3>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <h3 className="navLink">about</h3>
          </a>
        </Link>
      </div>
    </div>
  );
}
