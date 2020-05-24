
#include "Websocket.hpp"

Websocket::Websocket(std::shared_ptr<ix::WebSocket> ws) {
  this->ws = ws;
}

void Websocket::sendPartial (double out) {
  this->acc.push_back(out);
  nlohmann::json j_out;
  j_out["result"] = out;
  j_out["type"] = "partial";
  std::string s_out = j_out.dump();
  this->ws->send(s_out);
}

void Websocket::sendFinal () {
  nlohmann::json j_out;
  j_out["result"] = this->acc;
  j_out["type"] = "final";
  std::string s_out = j_out.dump();
  this->ws->send(s_out);
}