export default function ComplexDashboardLayout({
    children,
    analytics,
    revenue,
    notifications,
    login,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{analytics}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}