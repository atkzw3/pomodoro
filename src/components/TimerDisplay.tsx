interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

export default function TimerDisplay({ minutes, seconds }: TimerDisplayProps) {

  const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return(
    <div className={"text-6xl font-mono font-bold text-primary"}>
      {time}
    </div>
  )
}