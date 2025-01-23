import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Erick Rodrigues // DEV</title>
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  )
}
