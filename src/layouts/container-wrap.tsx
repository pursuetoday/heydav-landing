import dynamic from "next/dynamic";
import Container from "./container";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const ContainerWrap = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDimensions();
  return width < 1024 ? <Container>{children}</Container> : <>{children}</>;
}

const DynamicContainerWrap = dynamic(() => Promise.resolve(ContainerWrap), {
  ssr: false, // Disable server-side rendering for this component
});

export default DynamicContainerWrap;
