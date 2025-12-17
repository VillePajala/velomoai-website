interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  href: string;
}

export default function ProductCard({
  name,
  description,
  features,
  href,
}: ProductCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{name}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <span className="text-indigo-400 mt-1">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Visit {name}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
