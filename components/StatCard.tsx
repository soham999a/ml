interface StatCardProps {
  value: string;
  label: string;
  description: string;
  icon?: string;
}

export default function StatCard({ value, label, description, icon }: StatCardProps) {
  return (
    <div className="rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm border border-on-surface/5">
      <div className="h-1 bg-secondary-container" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-heading text-3xl md:text-4xl font-bold text-on-surface">
              {value}
            </p>
            <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-on-surface-variant">
              {label}
            </p>
            <p className="mt-2 font-body text-sm text-on-surface-variant/80 leading-relaxed">
              {description}
            </p>
          </div>
          {icon && (
            <span className="material-symbols-rounded text-3xl text-secondary/60 shrink-0 mt-1">
              {icon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
