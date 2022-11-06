.DEFAULT_GOAL := help

APP_PATH := app

IMAGE_TAG := code-repository
BUILD_COMMAND := docker build
BUILD_PROGRESS := auto
BUILD_TARGET :=
# BUILD_PLATFORM := linux/amd64
BUILD_PLATFORM := linux/arm64

DOCKER_PATH := docker
SERVER_PATH := server

OUT_PATH := out
SERVER_NAME := server
SERVER_TARGET := $(OUT_PATH)/$(SERVER_NAME)

BUILD_ARGS := -tags netgo -ldflags '-extldflags "-static"'

define USAGE

  Build code-repository

endef

include $(APP_PATH)/Makefile

help:
	$(info $(USAGE))
	@:
.PHONY: help

image:
	$(BUILD_COMMAND) \
		--tag=$(IMAGE_TAG) \
		--progress=$(BUILD_PROGRESS) \
		--target=$(BUILD_TARGET) \
		--platform=$(BUILD_PLATFORM) \
		--build-arg=SERVER_TARGET=$(SERVER_TARGET) \
		.
.PHONY: image

$(SERVER_TARGET):
	cd $(SERVER_PATH) && go build $(BUILD_ARGS) -o ../$(SERVER_TARGET)

server: $(SERVER_TARGET)
.PHONY: server

clean:
	-rm -rf $(OUT_PATH)
.PHONY: clean

clean-image:
	docker image prune -f
	docker buildx prune -af
.PHONY: clean-image
