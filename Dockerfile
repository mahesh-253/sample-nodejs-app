FROM node:8.12.0  

WORKDIR ./
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]

EXPOSE 5000
ENV PORT 5000