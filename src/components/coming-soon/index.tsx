import useCountdown from "@/hooks/useCountdown";
import Container from "@/layouts/container";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";

export default function ComingSoonComponent() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('10/2/2023'));
  return (
    <Container>
        <h3>Coming Soon!</h3>
        <p>We are currently working hard on this page!</p>
        <div className="flex justify-center mx-2">
            <TimeBlock label="Days" value={days} />
            <TimeBlock label="Hours" value={hours} />
            <TimeBlock label="Minutes" value={minutes} />
            <TimeBlock label="Seconds" value={seconds} />
        </div>
        <Link href='/'>
            <SolidButton 
                buttonText="Home"
            />
        </Link>
    </Container>
  )
}

const TimeBlock = ({ label, value } : {
    label: string
    value: string
}) => {
    return (
        <div>
            <div>{value}</div>
            <div className="opacity-50">{label}</div>
        </div>
    )
}