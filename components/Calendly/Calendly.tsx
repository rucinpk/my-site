import { InlineWidget } from "react-calendly";

type Props = {};

const CalendlyComponent = ({}: Props) => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/rucinpk/30min" />
    </div>
  );
};

export default CalendlyComponent;
