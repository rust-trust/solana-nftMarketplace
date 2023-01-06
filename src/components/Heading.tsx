import React from "react";
import styles from "../styles/custom.module.css"

function Heading({ title }) {
  return (
    <div className={styles.Myhead}>
      <h2 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">{title}</h2>
      <hr className={styles.Myborders} />
    </div>
  );
}

export default Heading;