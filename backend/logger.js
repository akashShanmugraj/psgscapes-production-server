import winston from 'winston';
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
        })
      ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/info.log' })
  ]
});
async function infolog(requestObject){
    logger.info(`${requestObject.method}, headers: ${JSON.stringify(requestObject.headers)} body:${JSON.stringify(requestObject.body)}, access-url:${requestObject.originalUrl}, ip:${requestObject.ip}, ips:${requestObject.ips}`);
}
async function errorlog(requestObject){
    logger.error(`${requestObject.method}, body:${JSON.stringify(requestObject.body)}, access-url:${requestObject.originalUrl}, ip:${requestObject.ip}, ips:${requestObject.ips}`);
}
async function warnlog(requestObject){
    logger.warn(`${requestObject.method}, body:${JSON.stringify(requestObject.body)}, access-url:${requestObject.originalUrl}, ip:${requestObject.ip}, ips:${requestObject.ips}`);
}

export default infolog;
