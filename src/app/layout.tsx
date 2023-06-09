import '../scripts/wdyr';
import './globals.css';

export const metadata = {
    title: 'Home',
    description: 'Home',
    twitter: {
        card: 'summary_large_image',
        title: 'Vanilla Extract + App Directory',
        description:
            'React Server Components using Next.js and Vanilla Extract',
    },
    themeColor: '#000',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
