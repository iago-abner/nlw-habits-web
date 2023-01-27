interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="w-full mt-4 h-3 rounded-xl bg-zinc-700">
      <div
        role="progressbar"
        aria-label="progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 max-w-full"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}
