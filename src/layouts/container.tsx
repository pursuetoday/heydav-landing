export default function Container({ children } : {
    children: React.ReactNode
}) {
  return (
    <div className=" px-4 xs:px-5 sm:px-[96px] md:px-[106px] lg:px-[115px] xl:px-[121px] mx-auto max-w-max">
      {children}
    </div>
  );
}
