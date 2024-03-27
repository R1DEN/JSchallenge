FROM cypress/browsers:node-20.11.1-chrome-123.0.6312.58-1-ff-124.0-edge-122.0.2365.92-1
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npx cypress verify