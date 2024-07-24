import WebApp from "@twa-dev/sdk";

export default function AlertButton() {
  const showAlert = () => {
    WebApp.showAlert("Hello World!");
  };

  return <button onClick={showAlert}>Show Alert</button>;
}
