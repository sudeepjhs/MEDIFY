import { CustomIconButton } from "@/config/types";
import { Card, CardBody, Link } from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { FC } from "react";



interface IconButtonProps extends CustomIconButton {
    iconSize?: number | string;
    className?: string;
    contentGap?: number;
    clickable?: boolean;
    labelWrapperStyle?: string;
    iconWrapperStyle?: string;
    iconColor?: string
}

export const CardIconButton: FC<IconButtonProps> = ({ Icon, label, href = "#", iconSize, className, clickable, labelWrapperStyle, iconWrapperStyle, contentGap = 2, iconColor = "#2AA7FF" }) => {
    return <Link as={clickable ? NextLink : "div"} href={href || "#"}>
        <Card className={clsx("p-4 text-zinc-400", clickable && "hover:text-parimary hover:bg-blue-50 hover:font-semibold hover:border-1.5 border-blue-400", className)}>
            <CardBody className={`flex flex-col gap-${contentGap}  justify-center items-center`} >
                <div className={iconWrapperStyle}>
                    <Icon size={iconSize || 36} fill={iconColor} />
                </div>
                <div className={labelWrapperStyle}>{label}</div>
            </CardBody>
        </Card>
    </Link>
}
