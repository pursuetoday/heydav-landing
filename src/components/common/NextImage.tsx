import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function NextImage({
  src,
  alt,
  layout,
  objectFit = 'contain',
  placeholder,
  blurDataURL,
  className,
  width,
  height,
  priority,
  sizes
}: {
  src: string
  alt: string
  layout?: string
  objectFit?: string
  placeholder?: "empty" | "blur" | "data:image/..."
  blurDataURL?:string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}) {
  return (
    <Image
      className={cn(
        className,
        objectFit    
      )}
      src={src}
      alt={alt}
      fill={layout === 'fill'}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority && true}
    />
  );
}
