.DEFAULT_GOAL := help

ROOT_PATH := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))
APP_PATH := app
SERVER_PATH := server
DOCKER_PATH := docker

define USAGE

  Build code-repository

endef

include $(APP_PATH)/Makefile
include $(SERVER_PATH)/Makefile
include $(DOCKER_PATH)/Makefile

help:
	$(info $(USAGE))
	@:
.PHONY: help
