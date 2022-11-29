import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { text: string; onClick: () => void; icon: IconDefinition };

const Button = ({ text, onClick, icon }: Props) => {
  return (
    <div className="flex justify-center sm:self-center md:self-start cursor-pointer">
      <div
        onClick={onClick}
        className="main-btn dark:hover:before:bg-gray-100 hover:before:bg-gray-800 rounded-large font-semibold relative border-2 border-violet-800 flex self-start items-center overflow-hidden"
      >
        <span className="px-6 py-0 text-amber-700 z-10">{text}</span>
        <span className="btn-icon bg-violet-700 flex items-center justify-center rounded-full p-4 z-10">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  );
};

export default Button;
