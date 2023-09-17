import { Card } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function listing() {
  return (
    <div>
      <div>Header</div>
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2 bg-red-200 p-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="bg-orange-400">02</div>
      </div>
    </div>
  );
}
