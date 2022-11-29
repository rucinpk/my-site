type Props = { text: string; highlightedText: string; title: string };

const Title = ({ text, highlightedText, title }: Props) => {
  return (
    <div className="text-center cursor-default">
      <div className="relative py-5 uppercase sm:text-3xl md:text-5xl z-10 font-bold flex items-center justify-center sm:gap-2 md:gap-4">
        {text}{" "}
        <span className="dark:text-violet-500 text-violet-800">
          {highlightedText}
        </span>
        <span className="absolute  -z-10 text-gray-400 dark:text-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-6xl md:text-8xl">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Title;
