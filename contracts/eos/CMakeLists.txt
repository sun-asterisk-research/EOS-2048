project(eoscontract NONE)
cmake_minimum_required(VERSION 3.5)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

include(ExternalProject)
# if no cdt root is given use default path
if(EOSIO_CDT_ROOT STREQUAL "" OR NOT EOSIO_CDT_ROOT)
   find_package(eosio.cdt)
endif()
ExternalProject_Add(
               dappservices
               SOURCE_DIR dappservices
               BINARY_DIR dappservices
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               logservice
               SOURCE_DIR logservice
               BINARY_DIR logservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               logconsumer
               SOURCE_DIR logconsumer
               BINARY_DIR logconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               ipfsservice
               SOURCE_DIR ipfsservice
               BINARY_DIR ipfsservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               ipfsconsumer
               SOURCE_DIR ipfsconsumer
               BINARY_DIR ipfsconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               cronservice
               SOURCE_DIR cronservice
               BINARY_DIR cronservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               cronconsumer
               SOURCE_DIR cronconsumer
               BINARY_DIR cronconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               vaccountsservice
               SOURCE_DIR vaccountsservice
               BINARY_DIR vaccountsservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               vaccountsconsumer
               SOURCE_DIR vaccountsconsumer
               BINARY_DIR vaccountsconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               oracleservice
               SOURCE_DIR oracleservice
               BINARY_DIR oracleservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               oracleconsumer
               SOURCE_DIR oracleconsumer
               BINARY_DIR oracleconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               storageservice
               SOURCE_DIR storageservice
               BINARY_DIR storageservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               authservice
               SOURCE_DIR authservice
               BINARY_DIR authservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               authenticator
               SOURCE_DIR authenticator
               BINARY_DIR authenticator
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               historyservice
               SOURCE_DIR historyservice
               BINARY_DIR historyservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               readfnservice
               SOURCE_DIR readfnservice
               BINARY_DIR readfnservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               readfnconsumer
               SOURCE_DIR readfnconsumer
               BINARY_DIR readfnconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               dnsservice
               SOURCE_DIR dnsservice
               BINARY_DIR dnsservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               dnsconsumer
               SOURCE_DIR dnsconsumer
               BINARY_DIR dnsconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               vcpuservice
               SOURCE_DIR vcpuservice
               BINARY_DIR vcpuservice
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )

ExternalProject_Add(
               vcpuconsumer
               SOURCE_DIR vcpuconsumer
               BINARY_DIR vcpuconsumer
               CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
               UPDATE_COMMAND ""
               PATCH_COMMAND ""
               TEST_COMMAND ""
               INSTALL_COMMAND ""
               BUILD_ALWAYS 1
            )


# building:mycontract

ExternalProject_Add(
   mycontract
   SOURCE_DIR mycontract
   BINARY_DIR mycontract
   CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
   UPDATE_COMMAND ""
   PATCH_COMMAND ""
   TEST_COMMAND ""
   INSTALL_COMMAND ""
   BUILD_ALWAYS 1
)


# building:testcntrt

ExternalProject_Add(
   testcntrt
   SOURCE_DIR testcntrt
   BINARY_DIR testcntrt
   CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
   UPDATE_COMMAND ""
   PATCH_COMMAND ""
   TEST_COMMAND ""
   INSTALL_COMMAND ""
   BUILD_ALWAYS 1
)


# building:tzfe

ExternalProject_Add(
   tzfe
   SOURCE_DIR tzfe
   BINARY_DIR tzfe
   CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${EOSIO_CDT_ROOT}/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake
   UPDATE_COMMAND ""
   PATCH_COMMAND ""
   TEST_COMMAND ""
   INSTALL_COMMAND ""
   BUILD_ALWAYS 1
)
