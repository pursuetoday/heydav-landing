import Container from "./container";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const ContainerWrap = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDimensions();
  return width < 1024 ? <Container>{children}</Container> : <>{children}</>;
}

export default ContainerWrap;