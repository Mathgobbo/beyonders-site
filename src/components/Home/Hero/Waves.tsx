import Image from "next/image";

export const Waves = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 -ml-2">
      <div className="overflow-hidden relative ">
        <MainGreenWave />
        <SecondaryGreenWave />
        <BlackWave />
      </div>
    </div>
  );
};

const MainGreenWave = () => {
  return (
    <Image
      src="/home/main-green-wave.svg"
      alt="Main Green Wave"
      width={1920}
      height={180}
      className="absolute bottom-0"
    />
  );
};
const SecondaryGreenWave = () => {
  return <Image src="/home/secondary-green-wave.svg" alt="Secondary Green Wave" width={1920} height={180} />;
};
const BlackWave = () => {
  return (
    <Image className="absolute bottom-0 " src="/home/black-wave.svg" alt="Main Green Wave" width={1920} height={180} />
  );
};
