export default function Container({ children } : {
    children: React.ReactNode
}) {
  return (
    <div className="h-auto w-[90vw] md:w-[90vw] lg:w-[95vw] xl:max-w-[1196px] xl:min-w-[1196px] mx-auto">
      {children}
    </div>
  );
}
