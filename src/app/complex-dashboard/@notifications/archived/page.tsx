import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return <Card>
        <div>Archived Notification</div> <br />
        <Link href={"/complex-dashboard"} className="bg-amber-700">Notifications</Link>
    </Card>
}