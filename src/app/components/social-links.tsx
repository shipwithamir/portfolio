import Button from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Tooltip from "./ui/tooltip";

export const SOCIAL_LINKS = [
  {
    id: "github",
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/shipwithamir",
  },
  {
    id: "linkedin",
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/amirk85",
  },
  {
    id: "twitter",
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://twitter.com/shipwithamir",
  },
  {
    id: "email",
    icon: TfiEmail,
    label: "khanamir8589@gmail.com",
    href: "mailto:khanamir8589@gmail.com",
  },
];

function SocialLinks() {
  return (
    <div className="flex gap-4 sm:flex-col">
      <div className="flex gap-4 sm:grid sm:auto-rows-min sm:grid-cols-2">
        {SOCIAL_LINKS.map(({ id, icon: Icon, label, href }) => (
          <Tooltip key={id} content={label}>
            <Button
              variant="outline"
              className="p-2"
              href={href}
              target="_blank"
              aria-label={label}
              leftIcon={<Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
