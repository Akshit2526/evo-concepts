import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-7 font-orbitron text-[23px] font-bold uppercase tracking-[3px] text-white">
        {title}
      </h3>

<div className="mb-7" />
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-avenir text-[19px] text-white/80 transition hover:text-[#B56CFF]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}