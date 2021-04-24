FROM node:14-alpine as server-build
WORKDIR /app
ADD server /app
RUN npm ci && \
    npm run build && \
    rm -rf /app/node_modules && \
    npm ci --production && \
    mkdir /build && \
    mv /app/node_modules /app/dist/* /build


FROM node:14-alpine as frontend-build
WORKDIR /app
ADD frontend /app
RUN npm ci && \
    npm run build && \
    rm -rf /app/node-modules && \
    npm ci --production && \
    mkdir /build && \
    mv /app/node_modules /app/dist/* /build


FROM node:14-alpine
COPY --from=frontend-build /build /app/frontend
COPY --from=server-build /build /app/backend

WORKDIR /app
USER node

CMD [ "node", "backend/server.js" ]
