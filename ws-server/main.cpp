
#include <iostream>
#include "json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>
#include "Executor/Executor.hpp"

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
    std::cout << "New Connection";
    webSocket->setOnMessageCallback( [webSocket, connectionState, &server, &executor] (const WebSocketMessagePtr msg) {
      std::cout << "New Data";
      if (msg->type == WebSocketMessageType::Message) {
        std::cout << msg->str << std::endl;
        
        //NEW
        executor.setWebSocket(webSocket);
        executor.setActions(msg->str);
        executor.execute();

        nlohmann::json jmsg = nlohmann::json::parse(msg->str);
        std::string smsg = jmsg.dump();
        webSocket->send(smsg, msg->binary);
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