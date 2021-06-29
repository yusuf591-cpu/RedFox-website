import Index from "./index.js";
import React, { useState, useEffect } from "react";

export default function Categories({ data: serverPost }) {
  const [loader, setLoader] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://redfox.frilansus.com/api/apiportfolio`);
      const data = await res.json();
      setLoader(data);
    }

    if (!loader) {
      load();
    }
  }, []);

  if (!loader) {
    return (
      <Index>
        <p>Loading...</p>
      </Index>
    );
  }

  const firsFilter = loader.filter((item) => {
    return item.category_id == 1;
  });
  const secondFilter = loader.filter((item) => {
    return item.category_id == 2;
  });
  const threeFilter = loader.filter((item) => {
    return item.category_id == 3;
  });
  const fourFilter = loader.filter((item) => {
    return item.category_id == 4;
  });

  return (
    <>
      <Index>
        <div className="categories">
          <div className="prime">
            <h3>
              Branding <span>(129)</span>
            </h3>
            <div className="row hide">
              {firsFilter.map((brand) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-12"
                    key={brand.id}
                  >
                    <img src={brand.img} alt="" />
                    <p>{brand.title_uz}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Naming <span>(17)</span>
            </h3>
            <div className="row hide">
              {secondFilter.map((brand) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                    <img src={brand.img} alt="" />
                    <p>{brand.title_uz}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Web & Mobile <span>(148)</span>
            </h3>
            <div className="row hide">
              {threeFilter.map((brand) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                    <img src={brand.img} alt="" />
                    <p>{brand.title_uz}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Packaging <span>(148)</span>
            </h3>
            <div className="row hide">
              {fourFilter.map((brand) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                    <img src={brand.img} alt="" />
                    <p>{brand.title_uz}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="btn_portfolio">Shu yerga bosing</button>
      </Index>
    </>
  );
}
// getServerSideProps
// getStaticProps
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://redfox.frilansus.com/api/apiportfolio`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
