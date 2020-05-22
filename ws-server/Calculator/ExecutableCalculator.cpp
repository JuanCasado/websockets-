
#include "ExecutableCalculator.hpp"

double ExecutableCalculator::add(std::vector<double> operands){
  return this->calculator.add(operands);
}

double ExecutableCalculator::divide(std::vector<double> operands){
  return this->calculator.divide(operands);
}

double ExecutableCalculator::multiply(std::vector<double> operands){
  return this->calculator.multiply(operands);
}

double ExecutableCalculator::substract(std::vector<double> operands){
  return this->calculator.substract(operands);
}

double ExecutableCalculator::execute (std::string action, std::vector<double> payload) {
  if (action == "+") return this->add(payload);
  else if (action == "/") return this->divide(payload);
  else if (action == "*") return this->multiply(payload);
  else if (action == "-") return this->substract(payload);
  return 0;
}

void ExecutableCalculator::setCalculator (Calculator calculator) {
  this->calculator = calculator;
}
