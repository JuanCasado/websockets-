
#pragma once
#include "../json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>
#include <memory>

class Websocket {
  public:
    Websocket (std::shared_ptr<ix::WebSocket> ws);
    void sendPartial (double out);
    void sendFinal ();
  private:
    std::shared_ptr<ix::WebSocket> ws;
    std::vector<double> acc;
};