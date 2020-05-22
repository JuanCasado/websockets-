
#pragma once
#include "ExecutableFactory.hpp"
#include "Executable.hpp"
#include "../json.hpp"
#include <ixwebsocket/IXWebSocketServer.h>
#include <memory>

class Executor {
public:
  void setWebSocket(std::shared_ptr<ix::WebSocket> ws);
  void setActions(std::string actions);
  void execute();
private:
  std::shared_ptr<ix::WebSocket> ws;
  nlohmann::json actions;
};
