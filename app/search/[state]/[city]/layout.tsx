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
        <section className="w-full bg-blue-50 pt-36 pb-6 flex justify-center">
            {children}
        </section>
        <Faq />
    </>
}