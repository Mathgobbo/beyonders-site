export const FaqQuestion = ({
  answer,
  title,
}: {
  title: string;
  answer: string[];
}) => {
  return (
    <div className="pt-6 relative">
      <div
        key={`question-${title}`}
        className="flex justify-between z-10 items-center text-gray-200 cursor-pointer text-base"
      >
        <p className="font-semibold w-11/12">{title}</p>
      </div>
      <div>
        {answer.map((paragraphs) => (
          <p key={paragraphs} className="leading-7 font-light text-gray-400">
            {paragraphs}
          </p>
        ))}
      </div>
    </div>
  );
};
