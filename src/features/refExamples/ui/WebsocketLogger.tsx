import { useEffect, useRef } from "react";

export const WebsocketLogger = () => {
  const websocketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    websocketRef.current = new WebSocket("wss://echo.websocket.org");
    websocketRef.current.onopen = () => {
      console.log("WebSocket соединение открыто");
      websocketRef.current?.send("Привет, WebSocket!");
    };

    websocketRef.current.onmessage = (event) => {
      console.log("Получено сообщение:", event.data);
    };

    return () => {
      websocketRef.current?.close();
      console.log("WebSocket соединение закрыто");
    };
  }, []);

  return <div>WebsocketLogger</div>;
};
