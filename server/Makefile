ifndef SERVER_PATH
	SERVER_PATH := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))
endif

SERVER_NAME := server
OUT_PATH := $(ROOT_PATH)/out
SERVER_TARGET := $(OUT_PATH)/$(SERVER_NAME)

define SERVER_USAGE

  make server

    SERVER_PATH := $(SERVER_PATH)
    SERVER_NAME := $(SERVER_NAME)
    OUT_PATH := $(OUT_PATH)
    SERVER_TARGET := $(SERVER_TARGET)

endef
USAGE += $(SERVER_USAGE)

clean-server:
	-rm -rf $(OUT_PATH)
.PHONY: clean-server

clean-all: clean-server
.PHONY: clean-all

$(SERVER_TARGET):
	cd $(SERVER_PATH) && go build $(BUILD_ARGS) -o $(SERVER_TARGET)

server: $(SERVER_TARGET)
.PHONY: server
