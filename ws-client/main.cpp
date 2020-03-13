
#include <iostream>
#include <string>
#include <ixwebsocket/IXWebSocketServer.h>

#include <chrono>
#include <thread>

using namespace ix;
using namespace std;

int main (int argc, char** argv){
  this_thread::sleep_for(chrono::milliseconds(1000));
  WebSocket ws;
  ws.setUrl("ws://ws-server:8080/");
  ws.setOnMessageCallback([](const WebSocketMessagePtr& msg) {
    if (msg->type == WebSocketMessageType::Message){
      cout << msg->str << endl;
    }
  });
  ws.start();

  for (int i = 0; i < 20; ++i){
    ws.sendText("{\"Hello\" : \"hello\"}");
    cout << "Sent msg [" << i << "]" << endl;
    this_thread::sleep_for(chrono::milliseconds(100));
  }

  ws.stop();
  this_thread::sleep_for(chrono::milliseconds(100000000));
}