import { Card, CardBody, Link } from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

export interface IconButton {
    Icon: IconType;
    href?: string;
    label: string;
    iconSize?: number | string;
    className?: string
}

export const CardIconButton: FC<IconButton> = ({ Icon, label, href, iconSize, className }) => {
    return <Link as={NextLink} href={href || "#"}>
        <Card className={clsx("p-4", "hover:text-primary hover:bg-blue-50 hover:font-semibold hover:border-1.5 border-blue-400", "text-zinc-400 cursor-pointer", className)}>
            <CardBody className="flex flex-col gap-2 justify-center items-center" >
                <Icon size={iconSize || 36} fill="#2AA7FF" />
                <p>{label}</p>
            </CardBody>
        </Card>
    </Link>
}
