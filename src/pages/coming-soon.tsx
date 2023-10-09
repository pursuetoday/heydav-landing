import Head from 'next/head'
import SolidButton from '@/components/ui/SolidButton'
import Container from '@/layouts/container'
import Link from 'next/link'
import Logo from '/public/images/Asset_6@2x.png';
import Image from 'next/image';
import useCountdown from '@/hooks/useCountdown';

export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('12/7/2023'));
  return (
    <>
      <Head>
        <title> Coming Soon | Heydev</title>
      </Head>
      <Container>
        <nav className="w-full flex items-center h-20 lg:h-[90px]">
            <Link href="/" className="cursor-pointer">
                <div className="w-[183px]  h-auto">
                <Image
                    src={Logo}
                    alt="logo"
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
                </div>
            </Link>
        </nav>
        <div className='text-center flex justify-between items-center flex-col px-10 py-4 pb-10'>
            <h3 className='text-6xl'>Coming Soon!</h3>
            <p className='mt-5 md:w-3/4 text-xl'>
              We are currently working hard on this page!
            </p>
            <div className='mt-12'>
              <svg width="100%" height="100%" viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
                    <stop offset="0%" stop-color="#00A76F"></stop><stop offset="100%" stop-color="#00A76F" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#BG)" fill-rule="nonzero" d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z" opacity="0.2"></path>
                <image href="/images/character_1.png" height="300" x="320" y="30"></image>
                <path fill="url(#paint0_linear_1_79)" d="M290.378 112.9v127.8c0 .8-.2 1.6-.5 2.4-.3.8-.8 1.4-1.3 2-.6.6-1.3 1-2 1.3-.8.3-1.6.5-2.4.5h-166.7c-.8 0-1.7-.1-2.4-.5s-1.4-.8-2-1.4c-.6-.6-1-1.4-1.2-2.1-.2-.8-.3-1.6-.2-2.5V112.6c-.4-3.1 2.3-5.9 5.8-5.9h166.7c.8 0 1.6.2 2.4.5.8.3 1.4.8 2 1.3.6.6 1 1.3 1.4 2 .2.7.4 1.6.4 2.4z"></path>
                <path fill="#004B50" d="M210.879 284.9c62.5 0 113.2-4.4 113.2-9.8s-50.7-9.8-113.2-9.8-113.2 4.4-113.2 9.8 50.7 9.8 113.2 9.8z" opacity="0.24"></path><path fill="#007867" d="M58.778 79.4l14.6-6 80.2 7.5v7.6l-94.8.3v-9.4z"></path><path fill="#00A76F" d="M85.279 71h-14.4v199.5h14.4V71z"></path>
                <path fill="#fff" d="M182.079 239.7h-5.1c-.6 0-1 .4-1 1V289c0 .6.4 1 1 1h5.2c.6 0 1-.4 1-1v-48.3c-.1-.5-.5-1-1.1-1zM130.978 239.7h-5.2c-.6 0-1 .4-1 1v46.7c0 .6.4 1 1 1h5.2c.6 0 1-.4 1-1v-46.6c0-.6-.4-1.1-1-1.1z"></path><path fill="#C4CDD5" d="M175.779 266h7.2v-24.7h-7.4l.2 24.7zm-50.9 0h7.2v-24.7h-7.4l.2 24.7z" opacity="0.5"></path>
                <path fill="#5BE49B" d="M277.778 126h-56.9c-1.7 0-3 1.3-3 3v83.9c0 1.7 1.3 3 3 3h56.9c1.7 0 3-1.3 3-3V129c0-1.7-1.4-3-3-3zm-70.1 0c1.7 0 3 1.3 3 3v83.9c0 1.7-1.3 3-3 3h-56.9c-1.7 0-3-1.3-3-3v-.3c0-1.7 1.3-3 3-3h29.5c1.7 0 3-1.3 3-3V129c0-1.7 1.3-3 3-3h21.4z" opacity="0.24"></path>
                <path fill="#004B50" d="M182.079 119.7h-56.9c-1.7 0-3 1.3-3 3V205c0 1.7 1.3 3 3 3h56.9c1.7 0 3-1.3 3-3v-82.3c0-1.6-1.4-3-3-3z"></path><path fill="#fff" d="M149.979 88.4h1v25c9.1-.1 20 1.1 32.3 5 .5.2.8.7.6 1.3-.2.5-.7.8-1.3.6-17.2-5.6-31.8-5.6-42.1-4.2-5.1.7-9.2 1.7-12 2.6-1.4.4-2.4.8-3.2 1.1-.4.1-.6.2-.8.3-.1 0-.2.1-.2.1-.5.2-1.1 0-1.3-.5-.2-.5 0-1.1.5-1.3l.5 1-.4-.9h.1c.1 0 .1-.1.2-.1.2-.1.5-.2.9-.4.8-.3 1.9-.7 3.3-1.1 2.9-.9 7-2 12.3-2.7 2.9-.4 6.1-.7 9.7-.8v-25h-.1z"></path>
                <path fill="#007867" d="M165.378 125.4h-37c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h37c.9 0 1.6-.7 1.6-1.6-.1-.9-.8-1.6-1.6-1.6zm-17.2 5.6h-20.5c-.5 0-.9.4-.9.9s.4.9.9.9h20.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm9.3 4.4h-20.5c-.5 0-.9.4-.9.9s.4.9.9.9h20.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-3.9-4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm4.7 0h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-26.7 4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm31.5-4.4h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h1.5c.5 0 .9-.4.9-.9-.1-.5-.5-.9-.9-.9z"></path>
                <path fill="#004B50" d="M178.379 224c0-1.1-.9-2-2-2h-55.5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h55.5c1.1 0 2-.9 2-2v-5z" opacity="0.48"></path><path fill="#00A76F" d="M188.179 244h-70v18.2h70V244z"></path><path fill="#fff" d="M118.479 243.3c-1.1 0-2 .9-2 2v15.8c0 1.1.9 2 2 2l69.7-.1c1.1 0 2-.9 2-2l-.4-15.6c0-1.1-.9-2-2-2l-69.3-.1zm-.1 4.5c0-1.1.9-2 2-2h5.2c1.7 0 2.6 1.9 1.6 3.2l-8.4 11.2c0 .1-.1.1-.2.1s-.2-.1-.2-.2v-12.3zm17.4-1.2c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.2c-1.6 0-2.6-1.9-1.6-3.2l7.8-10.5zm13.9 0c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.7-10.5zm14.1 0c.4-.5 1-.8 1.6-.8h2.2c1.7 0 2.6 1.9 1.6 3.2l-7.9 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.8-10.5zm13.9 0c.4-.5 1-.8 1.6-.8h2.2c1.6 0 2.6 1.9 1.6 3.2l-7.8 10.5c-.4.5-1 .8-1.6.8h-2.1c-1.6 0-2.6-1.9-1.6-3.2l7.7-10.5zm9.9 11.7c0 1.1-.9 2-2 2-1.6 0-2.6-1.9-1.6-3.2 1.1-1.6 3.6-.7 3.6 1.2z"></path>
                <path fill="#004B50" d="M73.579 276.7c-.1 1.2-.6 2.4-1.2 3.4-.7 1-1.6 1.9-2.6 2.5-2.3-.7-4.6-1.4-6.9-2.3-1.2-.4-2.3-.9-3.5-1.4-6.5-2.7-12.6-6.2-18.4-10.3-.4-1.1-.7-2.2-.9-3.4-.2-1.1 0-2.3.4-3.4.5-1.1 1.2-2 2.2-2.6 1-.5 1.9-1 2.8-1.6 1.9-1.6 2-4.6 1-6.9-1-2.3-2.8-4.2-4.1-6.3-1.3-2.1-2.2-4.8-1.1-7.1.7-1.4 2-2.5 2.9-3.9 1.6-2.6 1.1-6 .5-9l-2.4-12.3c-.5-2.7-.9-5.8 1.1-7.7 2.7-2.5 7.1-.5 9.7 2 3.2 2.9 5.5 6.5 6.7 10.6 2.5 8.9-1.9 18.9 1.6 27.5 2.3 5.8 7.8 9.7 10.5 15.3 2.6 5.4 2.5 11.3 1.7 16.9z"></path>
                <path fill="#007867" d="M85.278 250.7c-1.1 2.3-1.9 5.1-.6 7.2.7.8 1.4 1.7 2.2 2.4 2.9 3.5 1.4 8.8-.9 12.8-.7 1-1.1 2.1-1.3 3.3-.1 1.9 1.3 3.5 2.4 5 1.1 1.5 2 3.4 1.2 5-8.7-1-17.2-3.1-25.4-6-1.2-.4-2.3-.9-3.5-1.4-.2-2.6.6-5.4 1.7-7.9 1.2-2.7 3-5.5 3.4-8.5.4-2.7-.1-5.3.8-8 .8-2.7 2.2-5.1 4.1-7.2 1.9-2 4.2-3.6 6.9-4.6 1.5-.5 3.2-.9 4.3-2 .8-.8 1.4-1.8 1.8-2.9 2-4.4 4.1-8.9 6.1-13.4.9-2 2.2-4.3 4.4-4.7 1.7-.3 3.4.9 4.3 2.4.8 1.6 1 3.4.8 5.1-1 8.9-8.8 15.4-12.7 23.4z"></path>
                <defs>
                  <linearGradient id="paint0_linear_1_79" x1="296.527" x2="105.126" y1="186.371" y2="167.19" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00A76F"></stop><stop offset="1" stop-color="#007867"></stop>
                  </linearGradient>
                </defs>
              </svg>            
            </div>
            <div className="text-xl xxs:text-4xl sm:text-6xl text-center flex w-full items-center justify-center mt-12">
              <TimeBlock label="Days" value={days} />
              <TimeBlock label="Hours" value={hours} />
              <TimeBlock label="Minutes" value={minutes} />
              <TimeBlock label="Seconds" value={seconds} />
            </div>
            <Link href="/" className='mt-10' scroll={false}>
                <SolidButton buttonText="Go to Home" customStyle={"lg:h-[42px]"} />
            </Link>
        </div>
      </Container>
    </>
  )
}

const TimeBlock = ({ label, value } : {
  label: string
  value: string
}) => {
  return (
      <div>
          {label === 'Seconds' ? (
            <div className='ml-2'>{value}</div>
          ) : (
            <div className={label === 'Days' ? "" : "ml-2"}>{`${value} : `}</div>
          )}
          <h5 className="opacity-50 text-sm leading-none mr-2">{label}</h5>
      </div>
  )
}