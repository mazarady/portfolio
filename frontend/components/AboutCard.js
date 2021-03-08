import Image from "next/image";

export default function AboutCard({ des }) {
  return (
    <div className="m-aboutCard">
      <div className="m-aboutCard__image">
        <Image src="/circle_me.gif" alt="Me" width={300} height={300} />
      </div>
      <div className="m-aboutCard__content">
        <p className="cardSub">{des}</p>
      </div>
    </div>
  );
}
