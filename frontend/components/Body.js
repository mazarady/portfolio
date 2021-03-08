import marked from "marked";
import ReactHtmlParser from "react-html-parser";
export default function Body({ post }) {
  return (
    <section className="a-section">
      {ReactHtmlParser(marked(post.body))}
    </section>
  );
}
