import winston from 'winston';
const { combine, timestamp, json, errors, printf, colorize } = winston.format;

winston.addColors({
  // error: 'red',
  // warn: 'yellow',
  // info: 'green',
  http: 'magenta',
  // verbose: 'cyan',
  // debug: 'blue',
  // silly: 'grey',
});

const jsonLogFormat = combine(timestamp(), errors({ stack: true }), json());
const consoleLogFormat = combine(
  colorize(),
  timestamp(),
  errors({ stack: true }),
  printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`)
);

const consoleTransport = new winston.transports.Console({
  format: consoleLogFormat,
});

const standardLogFileTransport = new winston.transports.File({
  filename: 'logs/standard.log',
  format: jsonLogFormat,
});
const exceptionLogFileTransport = new winston.transports.File({
  filename: 'logs/exceptions.log',
  format: jsonLogFormat,
});
const rejectionLogFileTransport = new winston.transports.File({
  filename: 'logs/rejections.log',
  format: jsonLogFormat,
});

const logToFiles = process.env.LOG_TO_FILES && parseInt(process.env.LOG_TO_FILES) > 0;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  transports: logToFiles ? [consoleTransport, standardLogFileTransport] : [consoleTransport],
  // defaultMeta: { service: 'template-express-server' },
  exceptionHandlers: [exceptionLogFileTransport],
  rejectionHandlers: [rejectionLogFileTransport],
});

export default logger;
