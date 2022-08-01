OUTPUT=.
NPM_BIN=$(shell npm bin)

GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND1=$(GRPC_TOOL) --plugin=${TYPESCRIPT_PLUGIN} --js_out=import_style=commonjs,binary:$(OUTPUT) --grpc_out=grpc_js:$(OUTPUT) --ts_out=grpc_js:$(OUTPUT) -I . ./*.proto ./common_types/*.proto
COMMAND2=protoc --grpc-web_out=import_style=typescript,mode=grpcwebtext:$(OUTPUT) -I . ./*.proto ./common_types/*.proto


protogen:
    # generate js and .d.ts codes via grpc-tools 
	$(COMMAND1)

protogen_grpc_web:
	$(COMMAND2)

clean:
	rm ./*.js ./*.ts ./common_types/*.js ./common_types/*.ts
