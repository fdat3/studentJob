# Common build stage
FROM --platform=linux/amd64 oven/bun:canary as common-build-stage

COPY . ./app

WORKDIR /app

RUN bun install
RUN npx sequelize db:migrate
RUN npx sequelize db:migrate:status

EXPOSE 1511

# Development build stage
FROM common-build-stage as development-build-stage

RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]

ENV NODE_ENV development

CMD ["bun", "run", "dev"]

# Experienceion build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["bun", "run", "start"]
