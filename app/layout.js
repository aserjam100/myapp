import "./globals.css";

export const metadata = {
  title: "Test Vercel Deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
