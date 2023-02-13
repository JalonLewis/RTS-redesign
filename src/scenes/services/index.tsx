import { CoachingType, SelectedPage } from "@/types";
import AllAccessCoaching from "@/assets/AllAccessCoaching.png";
import GuidedProgramming from "@/assets/GuidedProgramming.png";
import Consultation from "@/assets/Consultation.png";
import { motion } from "framer-motion";
import Coaching from "./Services";

const services: Array<CoachingType> = [
  {
    price: "$220",
    description:
      "Custom training program where your training strategy, template, and exercise selection are all tailored to you. One on one support with your coach via email, chat, and video calls",
    image: AllAccessCoaching,
  },
  {
    price: "$99",
    description:
      "Placement into a specialized training group to best fit your requirements. Detailed and precise training plans with guidance on how to best modify your program to fit your needs",
    image: GuidedProgramming,
  },
  {
    price: "$120",
    description:
      "Expert advice on your training without having you sign up for an entire coaching package. This allows you to get professional input on your training and keep control of it yourself.",
    image: Consultation,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="services"
      className="mx-auto min-h-full px-10 py-20 bg-[url('/assets/ServicesBG.png')] bg-no-repeat bg-center bg-cover"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="md:mt-8 bg-b-4 rounded-md p-2 pb-5 px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 font-montserrat text-5xl text-y-2 font-bold ">
            Welcome To Reactive Training Systems (RTS)
          </h1>
          <p className="mt-5 text-2xl bg-b-3 rounded pl-2">
            At RTS, we are on a mission to provide practical and methodical 
            knowledge to athletes who are serious about reaching the next level in
            powerlifting.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {services.map((coaching: CoachingType) => (
            <Coaching
              key={coaching.price}
              price={coaching.price}
              description={coaching.description}
              image={coaching.image}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
