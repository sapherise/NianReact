FROM node:6.5.0
MAINTAINER Sa

RUN npm install

# Build the app
RUN npm build

# Expose the app port
EXPOSE 80

# Start the app
CMD npm start