ifndef DOCKER_PATH
	DOCKER_PATH := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))
endif

IMAGE_TAG := code-repository
BUILD_COMMAND := docker build
BUILD_PROGRESS := auto
BUILD_TARGET :=
BUILD_ARCH := $(shell uname -m)
BUILD_PLATFORM := linux/$(BUILD_ARCH)

BUILD_ARGS := -tags netgo -ldflags '-extldflags "-static"'

define DOCKER_USAGE

  make image

    DOCKER_PATH := $(DOCKER_PATH)
    IMAGE_TAG := $(IMAGE_TAG)
    BUILD_COMMAND := $(BUILD_COMMAND)
    BUILD_PROGRESS := $(BUILD_PROGRESS)
    BUILD_TARGET := $(BUILD_TARGET)
    BUILD_PLATFORM := $(BUILD_PLATFORM)

endef
USAGE += $(DOCKER_USAGE)

clean-image:
	docker image prune -f
	docker buildx prune -af
.PHONY: clean-image

image:
	$(BUILD_COMMAND) \
		--file=$(DOCKER_PATH)/Dockerfile \
		--tag=$(IMAGE_TAG) \
		--progress=$(BUILD_PROGRESS) \
		--target=$(BUILD_TARGET) \
		--platform=$(BUILD_PLATFORM) \
		--build-arg=SERVER_TARGET=$(SERVER_TARGET) \
		$(ROOT_PATH)
.PHONY: image
