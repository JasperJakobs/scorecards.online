"use client";
import Image from "next/image";

import { Button } from '@nextui-org/button';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-2xl md:text-4xl font-bold uppercase pt-24">Scorecards online</h1>
      <div className="grid grid-cols-1 gap-4 p-24 m-auto">
        <Card isBlurred isPressable onPress={() => window.location.href = '/darts'} shadow="sm" className="py-4 border-none bg-background/60 dark:bg-default-100/50 h-24 w-64">
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl text-center uppercase">Darts</h4>
          </CardBody>
        </Card>
        <Card isBlurred isPressable onPress={() => console.log("item pressed")} shadow="sm" className="py-4 border-none bg-background/60 dark:bg-default-100/50 h-24 w-64">
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl text-center uppercase">Yathzee</h4>
          </CardBody>
        </Card>
        <Card isBlurred isPressable onPress={() => console.log("item pressed")} shadow="sm" className="py-4 border-none bg-background/60 dark:bg-default-100/50 h-24 w-64">
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl text-center uppercase">Encore</h4>
          </CardBody>
        </Card>
        <Card isBlurred isPressable onPress={() => console.log("item pressed")} shadow="sm" className="py-4 border-none bg-background/60 dark:bg-default-100/50 h-24 w-64">
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl text-center uppercase">Clever</h4>
          </CardBody>
        </Card>
        <Card isBlurred isPressable onPress={() => console.log("item pressed")} shadow="sm" className="py-4 border-none bg-background/60 dark:bg-default-100/50 h-24 w-64">
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl text-center uppercase">Qwixx</h4>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
