import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  tagline?: string;
  features: string[];
  images?: string[];
  href: string;
}

export default function ProductCard({
  name,
  description,
  tagline,
  features,
  images,
  href,
}: ProductCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-yellow-400 mb-1 font-[family-name:var(--font-montserrat)]">
        {name}
      </h3>
      <p className="text-slate-300 mb-2">{description}</p>
      {tagline && (
        <p className="text-sm text-emerald-400 font-medium mb-6 italic">
          {tagline}
        </p>
      )}
      {!tagline && <div className="mb-4" />}
      {images && images.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-2/3 sm:w-1/3 aspect-[3/5] rounded-lg overflow-hidden shadow-lg ring-1 ring-slate-700"
            >
              <Image
                src={src}
                alt={`${name} screenshot ${i + 1}`}
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
      <ul className="space-y-2 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <span className="text-yellow-400 mt-1 font-bold">&#10003;</span>
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
