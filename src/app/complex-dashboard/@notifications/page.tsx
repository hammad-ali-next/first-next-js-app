import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
    return <Card>
        Notification <br></br>
        <Link href={"/complex-dashboard/archived"} className="bg-amber-700">Archived Notifications</Link>
    </Card>
}