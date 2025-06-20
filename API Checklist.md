# API Checklist
A collection of things to keep in mind when building a production-ready API.
- Checked items are implemented
- Unchecked items are yet to be added
- Items striken through are not planned, typically out of scope

Security & Authentication

- [x] Input validation and sanitization using libraries like Joi or Zod
- [x] ~~Authentication/authorization (JWT, OAuth2, or session-based)~~
- [x] CORS configuration for cross-origin requests
- [ ] Request size limits to prevent DoS attacks
- [x] Security headers (helmet.js for Express)
- [x] ~~API key management and rotation~~

Monitoring & Observability

- [ ] Structured logging with correlation IDs (Winston, Pino)
- [ ] Health check endpoints for load balancers
- [ ] ~~Application Performance Monitoring (APM) like New Relic or DataDog~~
- [ ] Metrics collection (response times, error rates, throughput)
- [ ] Error tracking (Sentry, Rollbar)

Error Handling & Reliability

- [ ] Centralized error handling middleware
- [ ] Graceful shutdown handling (SIGTERM/SIGINT)
- [ ] Circuit breaker patterns for external dependencies
- [ ] Retry logic with exponential backoff
- [ ] Database connection pooling and timeout handling

Performance & Scalability

- [x] Rate Limiting
- [ ] ~~Response caching strategies (Redis, in-memory)~~
- [ ] Database query optimization and indexing
- [ ] Connection pooling for databases
- [ ] Compression middleware (gzip)
- [ ] Pagination for large datasets
- [ ] Background job processing (Bull, Agenda)

Infrastructure & Deployment

- [ ] Environment-based configuration management
- [ ] Database migrations and schema versioning
- [ ] Container orchestration (Docker + Kubernetes)
- [ ] Load balancing and auto-scaling
- [ ] Backup and disaster recovery procedures
- [ ] Blue-green or rolling deployments

API Design & Documentation

- [ ] Consistent REST API design or GraphQL schema
- [ ] API versioning strategy
- [ ] OpenAPI/Swagger documentation
- [ ] Request/response validation schemas
