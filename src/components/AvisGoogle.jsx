import { useEffect } from "react";
import "../styles/avisGoogle.scss";

const AvisGoogle = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="avis-google">
      <h2 className="avis-google__title"></h2>
      <div
        className="elfsight-app-0c122d55-2719-49df-bc7e-475dd85ce7c5"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default AvisGoogle;