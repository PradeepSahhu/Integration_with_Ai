import Spline from "@splinetool/react-spline/next";

export default function Homespline() {
  return (
    <>
      <main className="h-[100vh] flex justify-center">
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/IBIlajVXyehoFgYS/scene.splinecode" />
        </div>
      </main>
    </>
  );
}
