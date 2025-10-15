'use client';

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import TimerDisplay from "@/components/TimerDisplay";

export default function TimerApp() {
  return (
    <div className={"min-h-screen flex items-center justify-center bg-background"}>
      <Card className={"w-full max-w-md"}>
        <CardHeader className={"text-2xl font-bold text-center"}>
          <CardTitle>時間</CardTitle>
        </CardHeader>
        <CardContent className={"flex justify-center"}>
          <TimerDisplay />
        </CardContent>
      </Card>
    </div>
  );
}