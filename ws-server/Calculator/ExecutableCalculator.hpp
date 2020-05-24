
#pragma once
#include "../Executor/Executable.hpp"
#include "Calculator.hpp"

class ExecutableCalculator: public Executable, public Calculator {
public:
  ~ExecutableCalculator(){};
  void setCalculator(Calculator calculator);
  double add(std::vector<double> operands);
  double divide(std::vector<double> operands);
  double multiply(std::vector<double> operands);
  double substract(std::vector<double> operands);
  double execute(std::string action, std::vector<double> payload);
private:
  Calculator calculator;
};