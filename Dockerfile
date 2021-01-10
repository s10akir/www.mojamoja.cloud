FROM node

WORKDIR /usr/src/app
EXPOSE 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

ENV NODE_ENV=development

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build

ENV NODE_ENV=production

CMD ["yarn", "start"]
