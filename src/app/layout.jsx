import DeviceRedirect from "../components/DeviceRedirect";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DeviceRedirect />
      </body>
    </html>
  );
}
