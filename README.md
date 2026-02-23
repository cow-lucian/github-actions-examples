# GitHub Actions Examples

Comprehensive GitHub Actions workflow examples covering all features - triggers, jobs, steps, expressions, contexts, permissions, environments, matrices, caching, artifacts, secrets, and custom event patterns.

## Workflow Catalog

| # | File | Topic | Level |
|---|------|-------|-------|
| 01 | `01-push-trigger.yml` | Push event trigger - branch/tag/path filters, glob patterns | Beginner |
| 02 | `02-pull-request-trigger.yml` | Pull request trigger - activity types, draft handling, labels | Beginner |
| 03 | `03-schedule-trigger.yml` | Schedule (cron) trigger - multiple schedules, schedule routing | Beginner |
| 04 | `04-workflow-dispatch.yml` | Manual trigger - all input types, validation, dry-run | Beginner |
| 05 | `05-repository-dispatch.yml` | External trigger - API integration, payload routing | Intermediate |
| 06 | `06-other-event-triggers.yml` | Release, issues, comments, stars, forks, workflow_run | Intermediate |
| 07 | `07-expressions-and-contexts.yml` | All contexts, operators, functions, type coercion | Intermediate |
| 08 | `08-job-features.yml` | Job outputs, needs, conditionals, timeouts, permissions | Intermediate |
| 09 | `09-step-features.yml` | GITHUB_OUTPUT, GITHUB_ENV, shells, summary, workflow commands | Intermediate |
| 10 | `10-all-webhook-triggers.yml` | **Complete catalog of 35+ webhook events with handlers** | Advanced |
| 11 | `11-secrets-inheritance.yml` | **Secrets hierarchy, GITHUB_TOKEN, environment protection** | Advanced |
| 12 | `12-custom-event-patterns.yml` | **ChatOps, cross-repo dispatch, workflow chaining** | Advanced |

## Topics Covered

### Triggers (Events)
- **Push** - Branch filters, tag filters, path filters, glob patterns, negation
- **Pull Request** - Activity types, draft handling, label conditions, security warnings
- **Schedule** - Cron syntax, multiple schedules, schedule identification
- **Workflow Dispatch** - String/boolean/choice/environment inputs, validation
- **Repository Dispatch** - External API triggers, payload routing, cross-repo
- **Webhook Events** - All 35+ events: discussions, labels, milestones, deployments, check runs, merge queue, branch protection, security alerts, and more
- **Workflow Run** - Chaining workflows, artifact passing, status-based routing
- **Issue Comments** - Slash commands, ChatOps patterns

### Secrets & Authentication
- **GITHUB_TOKEN** - Permissions, limitations, when to use alternatives
- **Secret Precedence** - Organization > Repository > Environment hierarchy
- **Environment Secrets** - Protection rules, reviewer approval, branch restrictions
- **Reusable Workflow Secrets** - Explicit passing vs `secrets: inherit`
- **Security Best Practices** - Masking, rotation, forked PR security

### Expressions & Contexts
- All contexts: `github`, `env`, `vars`, `runner`, `secrets`, `inputs`, `needs`, `job`, `steps`, `matrix`, `strategy`
- All operators and built-in functions
- Status check functions: `success()`, `failure()`, `always()`, `cancelled()`
- Type coercion rules and ternary patterns

### Job & Step Features
- Job outputs, dependencies (`needs`), conditional execution
- Timeouts, `continue-on-error`, `defaults`, permissions
- `GITHUB_OUTPUT`, `GITHUB_ENV`, `GITHUB_PATH`
- Multiple shells (bash, python), `GITHUB_STEP_SUMMARY`
- All workflow commands (debug, notice, warning, error, group, add-mask)

## How to Use

1. Browse the workflow files in `.github/workflows/`
2. Each file is heavily commented with explanations
3. Files are numbered from beginner (01) to advanced (12)
4. Run workflows manually via the Actions tab using `workflow_dispatch`

## License

MIT
