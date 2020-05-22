
#include <iostream>
#include "json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>
#include "Executor/Executor.hpp"

Executor executor{};

int main (int argc, char** argv){

  ix::WebSocketServer server{
    8080,//SocketServer::kDefaultPort,
    "0.0.0.0",//SocketServer::kDefaultHost,
    20,//SocketServer::kDefaultTcpBacklog,
    1000,//SocketServer::kDefaultMaxConnections,
    5,//WebSocketServer::kDefaultHandShakeTimeoutSecs,
    ix::SocketServer::kDefaultAddressFamily
  };

  server.setOnConnectionCallback( [&server] (std::shared_ptr<ix::WebSocket> webSocket, std::shared_ptr<ix::ConnectionState> connectionState) {
    webSocket->setOnMessageCallback( [webSocket, connectionState, &server] (const ix::WebSocketMessagePtr msg) {
      std::cout << "Data";
      if (msg->type == ix::WebSocketMessageType::Message) {
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