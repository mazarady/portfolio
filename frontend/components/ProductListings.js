import Card from "./Card";
export default function ProductListings({ data }) {
  return (
    <div className="o-cardWrapper">
      {data.map((product, id) => {
        return (
          <Card
            key={product.id}
            name={product.Name}
            des={product.Description}
            image={product.Image[0].url}
            href={product.link}
            id={id}
            types={product.software}
          />
        );
      })}
    </div>
  );
}
