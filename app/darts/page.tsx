import Image from "next/image";

export default function Home() {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-between">
        <div className="grid grid-cols-2 grid-rows-4 w-full h-screen">
          <div className="w-full bg-red-200">
            <h1 className="text-center">P1</h1>
          </div>
          <div className="w-full bg-red-200">
            <h1 className="text-center">P2</h1>
          </div>
          <div className="w-full bg-red-200">
            <h1 className="text-center">SCORE</h1>
          </div>
          <div className="w-full bg-red-200">
            <h1 className="text-center">SCORE</h1>
          </div>
          <div className="w-full bg-red-200 row-span-2 col-span-2">
            <h1 className="text-center">INPUT</h1>
          </div>
        </div>
      </main>
    );
}
