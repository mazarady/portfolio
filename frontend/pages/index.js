import ProductListings from "../components/ProductListings";
import Nav from '../components/Nav';
import Header from '../components/Header';

export default function Home({ data }) {
  return (
    <div>
      <Nav/>
      <Header image={true} title="Maaz Munir" sub="A selection of projects I have worked on."/>
      <ProductListings data={data}/>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/products");
  const data = await res.json();
  return {
    props: { data },
  };
}
