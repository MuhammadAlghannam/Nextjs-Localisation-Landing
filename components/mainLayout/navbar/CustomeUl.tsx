// scroll
import { Link } from "react-scroll";

// types
import { NavUlProps } from "@/types";

export default function CustomeUl({
  navLinks,
  textColor,
  ulStyle,
  liStyle,
  linkStyle,
  handleMenu,
}: NavUlProps) {
  return (
    <nav>
      <ul className={`${ulStyle}`}>
        {navLinks.map((link) => (
          <li key={link.id} className={`${liStyle}`}>
            <Link
              to={link.id}
              href={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ color: `${textColor}` }}
              className={`${linkStyle}`}
              onClick={handleMenu}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
