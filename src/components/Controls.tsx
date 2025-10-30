import {Button} from "@/components/ui/button";

type Props = {
  onStart: () => void;
  onRest: () => void;
  isRunning: boolean;
}

export const Controls = ({
  onStart,
  onRest,
  isRunning,
}: Props) => {
  return(
    <div className={"flex gap-4"}>
      <Button variant={"outline"} size={"lg"} onClick={onStart}>
        {isRunning ? "一時停止" : "開始"}
      </Button>
      <Button variant={"destructive"} size={"lg"} onClick={onRest}>停止</Button>
    </div>
  )
}