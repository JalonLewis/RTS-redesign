type Props = {
  name: string;
  description: string;
  image: string;
};

const TeamMembers = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[250px] w-[300px] sm:h-[380px] sm:w-[450px]">
    <div className="mt-5 p-5 rounded-md border-2 border-b-3 py-5 text-center bg-b-3">
        <p className="text-3xl sm:text-4xl text-y-2">{name}</p>
        <p className="mt-2 text-lg sm:text-xl">{description}</p>
      <img alt={`${image}`} src={image} />
    </div>
    </li>
  );
};

export default TeamMembers;
