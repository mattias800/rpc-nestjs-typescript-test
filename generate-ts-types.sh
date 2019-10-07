# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/types/"

rm ${OUT_DIR}proto/*

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    ./proto/timetable-draft.proto

# protoc \
#     --plugin="protoc-gen-ts=./node_modules/ts-proto/protoc-gen-ts_proto" \
#     --ts_out="${OUT_DIR}" \
#     ./proto/timetable-draft.proto
