import React from "react";


import infoimage from "../../public/nft2.png";
import styles from "../styles/diamond.module.css"
// import Heading from "./Heading";
// Collectible items, Music and media, Gaming,Sports Moments
// className=" text-center mt-2 w-80 h-1 border-0 bg-white ml-50 " 

const Info = () => {
    return (
        <div className="mt-40 ">
            {/* <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                More than art...
            </h1> */}
            {/* <hr className=" text-center mt-2 w-80 h-1 border-0 bg-white ml-50 " /> */}
            {/* <Heading title={"More than art... "} />  */}
            <div className="container mx-auto mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                    <div className="flex justify-center text-6xl  p-4 ">
                        <div>
                            < img src={infoimage.src} alt="" className={styles.leftImage} />
                        </div>


                    </div>
                    <div className="flex justify-center text-6xl  p-4 ">

                        {/* < img src={introimage.src} alt="" /> */}
                        <div className={styles.infoPart3}>
                            <div className={styles.infoRightBg}>

                            </div>

                            <div className={styles.infoRightDiamond}>
                                <div className={styles.infoRightDiamondItem} absolute-center >
                                    <img
                                        src="https://i.seadn.io/gcs/files/f496b19adc577d659f4990e190764e0f.gif?auto=format&w=128"
                                        alt="diamond1"
                                        className={styles.infoRightDiamondItemImg}
                                    />
                                </div>
                                <div className={styles.infoRightDiamondItem} absolute-center >
                                    <img
                                        src="https://content.solsea.io/files/thumbnail/1656643424881-300158223.gif"
                                        alt="diamond1"
                                        className={styles.infoRightDiamondItemImg}
                                    />
                                </div>
                                <div className={styles.infoRightDiamondItem} absolute-center >
                                    <img
                                        src="https://i.seadn.io/gae/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U?auto=format&w=1920"
                                        alt="diamond1"
                                        className={styles.infoRightDiamondItemImg}
                                    />
                                </div>
                                <div className={styles.infoRightDiamondItem} absolute-center >
                                    <img
                                        src="https://content.solsea.io/files/thumbnail/1667332565786-427124174.gif"
                                        alt="diamond1"
                                        className={styles.infoRightDiamondItemImg}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Info;
