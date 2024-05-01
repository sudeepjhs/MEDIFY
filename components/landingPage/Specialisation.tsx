import { FaClinicMedical, FaHeartbeat, FaStethoscope, FaXRay } from "react-icons/fa";
import { FaBedPulse, FaShieldVirus } from "react-icons/fa6";
import { PiTestTubeFill } from "react-icons/pi";
import { CardIconButton, IconButton } from "../custom/button/CardButton";
import { title } from "../primitives";
import { Button } from "@nextui-org/button";


const specialisationList: Array<IconButton> = [
    {
        Icon: FaClinicMedical,
        label: "Dentistry",
    },
    {
        Icon: FaStethoscope,
        label: "Primary Care"
    },
    {
        Icon: FaHeartbeat,
        label: "Cardiology",
    },
    {
        Icon: FaBedPulse,
        label: "MRI Resonance",
    },
    {
        Icon: PiTestTubeFill,
        label: "Blood Test",
    },
    {
        Icon: FaShieldVirus,
        label: "Piscologist"
    },
    {
        Icon: FaClinicMedical,
        label: "Laboratory",
    },
    {
        Icon: FaXRay,
        label: "X-Ray",
    },
]

const Specialisation = () => {
    return (
        <section className="flex flex-col relative items-center justify-center bg-blue-50 py-10 gap-10">
            <h2 className={title({ color: "blue" })}>Find by specialisation</h2>
            <div className="grid gap-10 grid-cols-4">
                {specialisationList.map((data) => <CardIconButton contentGap={4} iconSize={56} className="xl:min-w-56 lg:min-w-36 gap-6" key={"specialisation-" + data.label} Icon={data.Icon} label={data.label} />)}
            </div>
            <div><Button size="lg" color="primary" className="px-10" >View All</Button></div>
        </section>
    )
}

export default Specialisation