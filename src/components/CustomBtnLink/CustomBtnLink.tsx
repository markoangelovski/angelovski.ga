import Link from "next/link";

import { LinkType } from "types/contentful.types";

const CustomBtnLink = (props: LinkType) => {
  if (props.type === "Link")
    return (
      <Link href={props.destination}>
        <a
          className={`${props.eventClass} text-blue-400`}
          target={`${props.externalLink ? "_blank" : "_self"}`}
          title={props.altText}
          data-action-detail={props.eventLabel}
        >
          {props.label}
        </a>
      </Link>
    );

  if (props.type === "Button")
    return (
      <Link href={props.destination}>
        <a
          className={`${props.eventClass} inline-block rounded-sm bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-800 active:bg-red-900`}
          target={`${props.externalLink ? "_blank" : "_self"}`}
          title={props.altText}
          data-action-detail={props.eventLabel}
        >
          {props.label}
        </a>
      </Link>
    );
  return null;
};

export default CustomBtnLink;
