import { SelectedPage } from "@/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  price: string;
  description: string;
  image: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Coaching = ({ price, description, image, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="mt-5 p-5 rounded-md border-2 border-b-3 py-5 text-center bg-b-3"
    >
      <div className="flex justify-center">
      <img className="rounded" alt={`${image}`} src={image} />
      </div>

      <p className="text-lg font-semibold">{price}</p>
      <p className="my-3 whitespace-pre-line text-sm">{description}</p>
      <AnchorLink
        className="text-md font-bold text-y-2 underline hover:text-y-3"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Coaching;
