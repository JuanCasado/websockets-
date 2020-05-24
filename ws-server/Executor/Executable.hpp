
#pragma once
#include <string>
#include <vector>

class Executable {
  public:
    virtual ~Executable(){};
    virtual double execute(std::string action, std::vector<double> payload) = 0;
};