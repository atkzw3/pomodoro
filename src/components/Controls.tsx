import {Button} from "@/components/ui/button";

export const Controls = () => {
  return(
    <div className={"flex gap-4"}>
      <Button variant={"outline"} size={"lg"}>開始</Button>
      <Button variant={"destructive"} size={"lg"}>停止</Button>
    </div>
  )
}