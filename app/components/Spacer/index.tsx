interface ISpacer {
  className?: string;
}

const Spacer = ({ className = "h-4" }: ISpacer) => {
  return (
    <>
      <div className={className} />
    </>
  );
};

export default Spacer;
