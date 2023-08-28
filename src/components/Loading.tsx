import logoLoading from '/public/assets/logo_icon.svg';
import NextImage from './common/NextImage';

export default function Loading({ height, width } : { 
    height?: number 
    width?: number
}) {
  return (
    <div
      style={{
        height: height || '100vh',
        width: width || '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="loaderImage">
        <NextImage
          alt="logo"
          src={logoLoading}
          height={40}
          width={73}
          priority
        />
      </div>
      <div className="loaderInnerCircle" />
      <div className="loaderOuterCircle" />
    </div>
  );
}
