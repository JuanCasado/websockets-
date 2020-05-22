
#include "Executor.hpp"

void Executor::setWebSocket(std::shared_ptr<ix::WebSocket> ws) {
  this->ws = ws;
}

void Executor::setActions(std::string actions) {
  this->actions = nlohmann::json::parse(actions);
}

void Executor::execute() {
  /**
  ExecutorFactory executorFactory{};
  Executor executor = executorFactory.create(this->actions.executor);
  for (operacion : this->actions) {
    std::string action = operacion.operation;
    std::vector<double> payload = operacion.operands;
    executor.execute(action, payload);
  }
  */
}

