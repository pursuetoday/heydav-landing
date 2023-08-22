# Start with node 20 as our base install
FROM node:20

# Switch to directory with sources
WORKDIR /src

# Copy package json and install dependencies
ADD package.json .

# # install yarn 
# RUN npm install --global yarn

# Install (local) NPM and Bower packages/dependencies
RUN yarn install

# Copy required stuff
ADD . .

# Healthcheck
#HEALTHCHECK --interval=1m --timeout=10s --retries=2 CMD curl -sif -H 'Host: api.pribox.io' http://localhost:3100/healthcheck || exit 1

RUN yarn build
# Expose SERVER ports
EXPOSE 3000

# Run this command when a container is created from this image
CMD ["yarn", "run", "start"]
