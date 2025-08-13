
import { waveform } from 'ldrs';

waveform.register();

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <l-waveform
        size="35"
        stroke="3.5"
        speed="0.5" 
        color="black"
      ></l-waveform>
    </div>
  );
};

export default Preloader;
