
CC=g++
CF=-Wall -g
BUILD=build/
EXECUTOR=Executor/
CALCULATOR=Calculator/
COMMUNICATIONS=Communications/

main: main.cpp ${BUILD}Executor.o ${BUILD}ExecutableFactory.o ${BUILD}Calculator.o ${BUILD}ExecutableCalculator.o ${BUILD}Websocket.o json.hpp ${EXECUTOR}Executor.hpp
	${CC} ${CF} main.cpp ${BUILD}Executor.o ${BUILD}ExecutableFactory.o ${BUILD}Calculator.o ${BUILD}ExecutableCalculator.o ${BUILD}Websocket.o -L/usr/local/lib -lixwebsocket -lssl -lcrypto -lz -lpthread -o main

${BUILD}Executor.o: ${EXECUTOR}Executor.cpp ${EXECUTOR}ExecutableFactory.hpp ${EXECUTOR}Executable.hpp ${EXECUTOR}Executor.hpp json.hpp
	${CC} ${CF} -c ${EXECUTOR}Executor.cpp -o ${BUILD}Executor.o

${BUILD}ExecutableFactory.o: ${EXECUTOR}ExecutableFactory.cpp ${CALCULATOR}ExecutableCalculator.hpp ${EXECUTOR}Executor.hpp ${CALCULATOR}Calculator.hpp ${EXECUTOR}ExecutableFactory.hpp
	${CC} ${CF} -c ${EXECUTOR}ExecutableFactory.cpp -o ${BUILD}ExecutableFactory.o

${BUILD}Calculator.o: ${CALCULATOR}Calculator.cpp ${CALCULATOR}Calculator.hpp
	${CC} ${CF} -c ${CALCULATOR}Calculator.cpp -o ${BUILD}Calculator.o

${BUILD}ExecutableCalculator.o: ${CALCULATOR}ExecutableCalculator.cpp ${EXECUTOR}Executor.hpp ${CALCULATOR}Calculator.hpp ${CALCULATOR}ExecutableCalculator.hpp
	${CC} ${CF} -c ${CALCULATOR}ExecutableCalculator.cpp -o ${BUILD}ExecutableCalculator.o

${BUILD}Websocket.o:  ${COMMUNICATIONS}Websocket.cpp ${COMMUNICATIONS}Websocket.hpp json.hpp
	${CC} ${CF} -c ${COMMUNICATIONS}Websocket.cpp -o ${BUILD}Websocket.o