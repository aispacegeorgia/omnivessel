type Props = { id: string; title: string };

export default function Section({ id, title }: Props) {
  return (
    <section id={id} className="bg-maritime-mist text-maritime-navy">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-sm">{title}</h2>
        <div className="mt-6 h-24 rounded border border-dashed border-maritime-navy/20 bg-white/40" />
      </div>
    </section>
  );
}

