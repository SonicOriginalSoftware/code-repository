# syntax=docker/dockerfile:1


FROM alpine:3 as base
ARG APP_USER
RUN apk update --no-cache && apk upgrade --no-cache


FROM base as build-deps
RUN apk add musl-dev gcc make go
COPY --link . .


FROM build-deps as build-server
RUN make server

# FROM build-deps as build-app
# RUN flutter build


FROM scratch
ARG SERVER_TARGET
COPY --from=build-server ${SERVER_TARGET} /server

ENTRYPOINT [ "/server" ]
