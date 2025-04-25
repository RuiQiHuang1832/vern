/* eslint-disable @typescript-eslint/no-unused-vars */

type HeadingProps = {
    section: string
    on?: boolean;
    headingStyles?:string;
    marginBottom?: string;
}
export default function SectionHeading(props: HeadingProps) {
  const { section, on = false, marginBottom="8px" } = props; // Set a default value of false for on

  return (
    on ? <h5 style={{marginBottom: marginBottom}} className={`fw-light section-heading ${props.headingStyles}`}>{section}</h5> : ""
  )
}
