import { SelectedPage } from "@/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomeText from "@/assets/HomeText.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="h-full bg-[url('public/assets/HomeBG.png')] bg-no-repeat bg-center bg-cover"
    >
      <motion.div
        className="flex flex-col items-center justify-center "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10">
          <motion.div
          className="bg-y-2 rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="mx-5 mt-40 pt-5 flex items-center justify-center">
              <img alt="Logo" src={HomeText} />
            </div>

            <div className="my-5 mx-20 rounded-xl pb-5 text-center text-4xl text-b-4 font-semibold">
              <p>SOUGHT BY ELITE POWERLIFTERS</p>
              <p>LOOKING FOR INCREDIBLE PR's</p>
            </div>
          </motion.div>
        </div>

        {/* <div className="mx-5 max-h-80 max-w-3xl">
          <img
            className="rounded-lg"
            alt="home-pageGraphic"
            src={HomePageGraphic}
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Home;
