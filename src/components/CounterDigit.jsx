const CounterDigit = ({ label, secondsLeft }) => {
  const bgColor = secondsLeft < 10 ? "bg-docRed-50" : "bg-docBlue-50";
  const textColor = secondsLeft < 10 ? "text-docRed-900" : "text-docBlue-900";

  return (
    <div
      className={`h-[52px] w-[74px] lg:h-[95px] lg:w-[122px] ${bgColor} flex items-center justify-center rounded-[8px] text-[40px] font-bold leading-[53px] md:leading-[95.4px] lg:text-[64px] ${textColor}`}
    >
      {label}
    </div>
  );
};

export default CounterDigit;
