
#include <iostream>
#include "json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>
#include "Executor/Executor.hpp"
#include "Communications/Websocket.hpp"

using namespace ix;

int main (int argc, char** argv){

  Executor executor;

  WebSocketServer server{
    8080,        //SocketServer::kDefaultPort,
    "0.0.0.0",   //SocketServer::kDefaultHost,
    20,          //SocketServer::kDefaultTcpBacklog,
    1000,        //SocketServer::kDefaultMaxConnections,
    5,           //WebSocketServer::kDefaultHandShakeTimeoutSecs,
    SocketServer::kDefaultAddressFamily
  };

  server.setOnConnectionCallback( [&server, &executor] (std::shared_ptr<WebSocket> webSocket, std::shared_ptr<ConnectionState> connectionState) {
    webSocket->setOnMessageCallback( [webSocket, connectionState, &server, &executor] (const WebSocketMessagePtr msg) {
      if (msg->type == WebSocketMessageType::Message) {
        executor.setWebSocket(new Websocket(webSocket));
        executor.setActions(msg->str);
        executor.execute();
      }
    });
  });

  auto res = server.listen();
  if (!res.first) {
    return 1;
  }

  server.start();
  std::cout << "Started" << std::endl;
  server.wait();
}