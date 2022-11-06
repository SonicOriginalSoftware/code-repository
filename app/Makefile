ifndef APP_PATH
	APP_PATH := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))
endif

NODE_MODULES_PATH := $(APP_PATH)/node_modules
PACKAGE_LOCK_PATH := $(APP_PATH)/package-lock.json

define APP_USAGE

  make app

    APP_PATH := $(APP_PATH)
    NODE_MODULES_PATH := $(NODE_MODULES_PATH)
    PACKAGE_LOCK_PATH := $(PACKAGE_LOCK_PATH)

endef
USAGE += $(APP_USAGE)

clean-node-modules:
	rm -rf $(NODE_MODULES_PATH)
.PHONY: clean-node-modules

clean-all: clean-node-modules
.PHONY: clean-all

$(PACKAGE_LOCK_PATH):
	npm --prefix $(APP_PATH) i

$(NODE_MODULES_PATH): $(PACKAGE_LOCK_PATH)
	npm --prefix $(APP_PATH) ci

app: | $(NODE_MODULES_PATH)
.PHONY: app
