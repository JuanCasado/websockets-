
#include "ExecutableFactory.hpp"

Executable* ExecutableFactory::create (std::string executable) {
  if (executable == "calculator") {
    Calculator calculator{};
    ExecutableCalculator* executableCalculator = new ExecutableCalculator{};
    executableCalculator->setCalculator(calculator);
    return executableCalculator;
  } else {
    return nullptr;
  }
}