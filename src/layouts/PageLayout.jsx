import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";

const PageLayout = ({ title, subtitle, eyebrow, children, className = "" }) => {
  return (
    <div className={`pb-24 ${className}`}>
      <Container className="space-y-12">
        {title && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
          />
        )}
        <div className="w-full">{children}</div>
      </Container>
    </div>
  )
}

export default PageLayout