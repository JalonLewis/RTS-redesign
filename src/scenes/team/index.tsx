import { SelectedPage, TeamMemberType } from "@/types";
import MikeTuchscherer from "@/assets/MikeTuchscherer.png";
import RossLeppala from "@/assets/RossLeppala.png";
import JohnGarafano from "@/assets/JohnGarafano.png";
import MarkRobb from "@/assets/MarkRobb.png";
import PaulieSteinman from "@/assets/PaulieSteinman.png";
import AdamJones from "@/assets/AdamJones.png";
import PeterLucey from "@/assets/PeterLucey.png";
import MelissaKasper from "@/assets/MelissaKasper.png";
import { motion } from "framer-motion";
import TeamMembers from "./TeamMembers";

const team: Array<TeamMemberType> = [
  {
    name: "Mike Tuchscherer",
    description: "RTS Founder\nRTS Head Coach",
    image: MikeTuchscherer,
  },
  {
    name: "Ross Leppala",
    description: " RTS Coach\nRTS Special Projects Manager",
    image: RossLeppala,
  },
  {
    name: "John Garafano",
    description: "RTS Coach\nRTS Operations Manager",
    image: JohnGarafano,
  },
  {
    name: "Mark Robb",
    description: "RTS Coach",
    image: MarkRobb,
  },
  {
    name: "Paulie Steinman",
    description: "RTS Coach",
    image: PaulieSteinman,
  },
  {
    name: "Adam Jones",
    description: "RTS Coach\nRTS Marketing Director",
    image: AdamJones,
  },
  {
    name: "Peter Lucey",
    description: "RTS Coach",
    image: PeterLucey,
  },
  {
    name: "Melissa Kasper",
    description: "RTS Training Lab Community Leader",
    image: MelissaKasper,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Team = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="team"
      style={{
        backgroundImage: `url("src/assets/TeamBG.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="w-full bg-b-2 py-28"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Team)}>
        <motion.div
          className="mx-5 bg-b-4 rounded-md p-2 pb-5 px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <h1 className="font-montserrat text-5xl font-bold text-y-2">
              OUR TEAM
            </h1>
            <p className="py-5 text-2xl bg-b-3 rounded pl-2">
              Taught by World Champion Mike Tuchscherer, and other top coaches
              and athletes from around the sporting world, RTS teaches proven
              strategies and systems based on years of experience, trial and
              error, and top level competitions.
            </p>
        </motion.div>
        <div className="mt-10 h-[600px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {team.map((item: TeamMemberType, index) => (
              <TeamMembers
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
