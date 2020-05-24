

#include "Executor.hpp"
#include <iostream>

void Executor::setWebSocket(Websocket* ws) {
  this->ws = ws;
}

void Executor::setActions(std::string actions) {
  this->actions = nlohmann::json::parse(actions);
}

void Executor::execute() {
  ExecutableFactory executableFactory{};
  Executable *executable = executableFactory.create(this->actions["executor"].get<std::string>());
  for (nlohmann::json::iterator action = this->actions["actions"].begin(); action != this->actions["actions"].end(); ++action) {
    std::string operation = (*action)["operation"].get<std::string>();
    std::vector<double> operators =  (*action)["operands"].get<std::vector<double>>();
    double out = executable->execute(operation, operators);
    this->ws->sendPartial(out);
  }
  this->ws->sendFinal();
}
