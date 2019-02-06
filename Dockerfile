FROM node:alpine

RUN echo '🐳 ==> Building Drover Search...'

# Create app directory
WORKDIR /usr/src/app

# set our node environment, either development or production
# defaults to development
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock /usr/src/app/

RUN npm install --silent

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Bundle app source
COPY . /usr/src/app

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

CMD [ "npm", "start" ]
RUN echo '🐳 ==> Drover Search Built! ✅'
