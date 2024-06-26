import {Button, ButtonGroup} from "@nextui-org/react";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full h-screen">
          <div className="grid grid-cols-2 pb-6">
            <div className="w-full">
              <div className="w-full">
                <h1 className="text-center text-xl font-bold py-4 border-slate-950">PLAYER 1</h1>
              </div>
              <h1 className="text-center text-4xl font-bold mt-6">501</h1>
              <p className="text-center text-sm">Won 0</p>
              <p className="text-center text-sm">Avg 0 | Best 0</p>
            </div>
            <div className="w-full">
              <div className="w-full">
                <h1 className="text-center text-xl font-bold py-4">PLAYER 2</h1>
              </div>
              <h1 className="text-center text-4xl font-bold mt-6">501</h1>
              <p className="text-center text-sm">Won 0</p>
              <p className="text-center text-sm">Avg 0 | Best 0</p>
            </div>
          </div>
          <div className="grid grid-cols-2 h-48">
            <div className="w-full">
              <h1 className="text-center font-bold my-2">SCORE</h1>
            </div>
            <div className="w-full">
              <h1 className="text-center font-bold my-2">SCORE</h1>
            </div>
          </div>
          <div className="w-full md:w-[56vh] absolute bottom-0">
            <div className="text-center p-2">
              <p className="text-sm">Leg 1</p>
              <p className="font-bold text-4xl">0</p>
            </div>
            <div className="w-full h-72 grid grid-rows-4 grid-cols-3 gap-2 p-2">
              <Button color="primary" className="h-full text-4xl">
                1
              </Button>
              <Button color="primary" className="h-full text-4xl">
                2
              </Button>
              <Button color="primary" className="h-full text-4xl">
                3
              </Button>

              <Button color="primary" className="h-full text-4xl">
                4
              </Button>
              <Button color="primary" className="h-full text-4xl">
                5
              </Button>
              <Button color="primary" className="h-full text-4xl">
                6
              </Button>

              <Button color="primary" className="h-full text-4xl">
                7
              </Button>
              <Button color="primary" className="h-full text-4xl">
                8
              </Button>
              <Button color="primary" className="h-full text-4xl">
                9
              </Button>

              <Button className="h-full text-3xl font-bold bg-red-500">
                UNDO
              </Button>
              <Button color="primary" className="h-full text-4xl">
                0
              </Button>
              <Button className="h-full text-3xl bg-red-500 font-bold">
                BUST
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
}
