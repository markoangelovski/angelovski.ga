import Link from "next/link";

import { LinkType } from "types/contentful.types";

const InternalLink = (props: LinkType) => {
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
          className={`${props.eventClass}  inline-block rounded-sm bg-red-700 px-4 py-2 font-semibold text-white`}
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

export default InternalLink;
