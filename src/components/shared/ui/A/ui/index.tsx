import Link from "next/link";

export default function A({linkAddress, text}: {linkAddress: string; text:string}) {
    return (
        <Link href={linkAddress}>
            {text}
        </Link>
    )
}