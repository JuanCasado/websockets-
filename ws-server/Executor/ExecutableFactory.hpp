
#pragma once
#include "Executable.hpp"
#include "../Calculator/Calculator.hpp"
#include "../Calculator/ExecutableCalculator.hpp"

class ExecutableFactory {
public:
  Executable* create(std::string executable);
};