FROM node:14-alpine as build
WORKDIR /app
ADD . /app
RUN npm ci && \
    npm run build && \
    rm -rf /app/node_modules && \
    npm ci --production && \
    mkdir /build && \
    mv /app/node_modules /app/dist/* /build

FROM node:14-alpine
COPY --from=build /build /app

WORKDIR /app
USER node
ENV NODE_ENV=production

CMD [ "node", "server.js" ]
