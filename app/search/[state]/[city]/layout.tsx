import Faq from "@/components/layout/Faq"
import NavBarSearch from "@/components/layout/NavBarSearch"
import Image from "next/image"
import { TbDiscountCheck } from "react-icons/tb"

export default function SearchLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <>
        <NavBarSearch />
        <section className="w-full bg-blue-50 py-32  flex justify-center">
            {children}
        </section>
        <Faq />
    </>
}