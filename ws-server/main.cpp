
#include <iostream>
#include "json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>

using namespace ix;
using namespace std;
using json = nlohmann::json;

int main (int argc, char** argv){

  WebSocketServer server{
    8080,//SocketServer::kDefaultPort,
    "0.0.0.0",//SocketServer::kDefaultHost,
    20,//SocketServer::kDefaultTcpBacklog,
    1000,//SocketServer::kDefaultMaxConnections,
    5,//WebSocketServer::kDefaultHandShakeTimeoutSecs,
    SocketServer::kDefaultAddressFamily
  };

  server.setOnConnectionCallback( [&server] (shared_ptr<WebSocket> webSocket, shared_ptr<ConnectionState> connectionState) {
    webSocket->setOnMessageCallback( [webSocket, connectionState, &server] (const WebSocketMessagePtr msg) {
      if (msg->type == WebSocketMessageType::Message) {
        cout << msg->str << endl;
        json jmsg = json::parse(msg->str);
        string smsg = jmsg.dump();
        webSocket->send(smsg, msg->binary);
      }
    });
  });

  auto res = server.listen();
  if (!res.first) {
    return 1;
  }

  server.start();
  cout << "Started" << endl;
  server.wait();
}