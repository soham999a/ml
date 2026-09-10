export default function FiligreeDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <div className="flex-1 h-[1px] bg-secondary/40" />
      <span className="text-secondary text-2xl leading-none select-none" aria-hidden="true">
        𑁍
      </span>
      <div className="flex-1 h-[1px] bg-secondary/40" />
    </div>
  );
}
