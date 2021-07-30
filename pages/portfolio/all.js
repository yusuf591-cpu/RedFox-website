import Index from "./index.js";
import Link from "next/link";

const All = ({ data }) => {
  return (
    <>
      <Index>
        <div className="all">
          <div className="row">
            {data.map((all) => {
              return (
                <Link href={`/portfolio/${all.id}`} key={all.id}>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <img
                      rel="preload"
                      as="image"
                      src={`https://redfox.frilansus.com/${all.logo}`}
                      alt="work."
                      decoding="auto"
                    />
                    <p>{all.title_uz}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <button className="btn_portfolio">Shu yerga bosing</button>
      </Index>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://redfox.frilansus.com/api/apiportfolio`);
  const data = await res.json();
  return { props: { data } };
}
export default All;
