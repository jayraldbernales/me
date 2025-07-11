import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="ml-20 md:ml-0 md:w-[45vw] h-[50vh] md:h-[90vh] md:mt-20 max-w-[700px]">
        <Spline
          className="absolute xl:right-[-28%]"
          scene="https://prod.spline.design/O6lOa1Mwds3cPphR/scene.splinecode"
        />
      </div>
    </main>
  );
}
