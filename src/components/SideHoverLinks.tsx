import HoverLinks from "./HoverLinks";

const SideHoverLinks = () => {
  const links = [
    { text: "Github", href: "https://github.com/mahimurrahman" },
    { text: "Linkedin", href: "https://www.linkedin.com/in/mahimur-rahman-939008255/" },
    { text: "Twitter", href: "https://x.com/MAHIMURRAHMAN01" },
    { text: "Instagram", href: "https://www.instagram.com/mahimur_rahman_/" }
  ];
  
  return (
    <div className="side-hover-links">
      {links.map(link => (
        <a key={link.text} href={link.href} target="_blank" rel="noreferrer">
          <HoverLinks text={link.text} />
        </a>
      ))}
    </div>
  );
};

export default SideHoverLinks;
