import Image from "next/image";
import Link from "next/link";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";

export default function Card({ name, des, image, href, id, types }) {
  return (
    <div className={id % 2 != 0 ? "m-card" : "m-card--right"}>
      <div className="m-card__image ">
        <Image
          src={"http://localhost:1337" + image}
          alt="Picture of the Project"
          width={480}
          height={270}
        />
      </div>
      <div className="m-card__content">
        <h3 className="m-card__title cardTitle">{name}</h3>
        <p className="m-card__sub cardSub">{des}</p>
        {ReactHtmlParser(marked(types))}
        <a className="m-card__link" href={href}>
          <Image src={"/link.svg"} width={20} height={20}></Image>
        </a>
      </div>
    </div>
  );
}