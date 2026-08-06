# Python for DevOps, DevSecOps & Security Engineering
## A Foundational Training Manual for Interns and Trainees

---

## Version History

| Version | Date | Author | Description |
|---|---|---|---|
| 1.0 | 2026-08-06 | DevOps Enablement / L&D | Initial release |

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Intended Audience](#3-intended-audience)
4. [Learning Objectives](#4-learning-objectives)
5. [Prerequisites](#5-prerequisites)
6. [Training Roadmap](#6-training-roadmap)
7. [Module 1 – Variables](#module-1--variables)
8. [Module 2 – Conditions](#module-2--conditions)
9. [Module 3 – Loops](#module-3--loops)
10. [Module 4 – Functions](#module-4--functions)
11. [Module 5 – Object-Oriented Programming](#module-5--object-oriented-programming)
12. [Module 6 – Constructors](#module-6--constructors)
13. [Module 7 – Generators](#module-7--generators)
14. [Hands-on Projects](#14-hands-on-projects)
15. [Coding Standards](#15-coding-standards)
16. [Assessments](#16-assessments)
17. [Final Capstone Project](#17-final-capstone-project-infrastructure-monitoring--security-automation-toolkit)
18. [References](#18-references)
19. [Appendix](#19-appendix)

---

## 1. Purpose

This manual establishes a structured, self-paced Python curriculum for engineers entering DevOps, DevSecOps, Security Engineering, Cloud Engineering, Site Reliability Engineering (SRE), Platform Engineering, and Infrastructure Engineering roles. It is designed for use in a corporate onboarding program or Learning Management System (LMS), and prioritizes practical infrastructure and security automation over academic programming theory.

## 2. Scope

The manual covers Python fundamentals through early object-oriented and generator-based programming, sufficient to:

- Read, modify, and write infrastructure and security automation scripts.
- Progress into Infrastructure as Code (Terraform, Ansible), containerization (Docker, Kubernetes), CI/CD pipelines, and cloud SDKs (boto3, Azure SDK) with a solid Python foundation.

Out of scope: advanced Python (async/await, metaclasses, packaging/distribution), web frameworks, and cloud-provider-specific SDK usage — these belong in follow-on tracks.

## 3. Intended Audience

Interns, graduate engineers, associate engineers, and trainees entering DevOps, DevSecOps, Security Engineering, Cloud Engineering, or SRE roles. Readers are assumed to have basic computer literacy and basic Linux familiarity, but no prior programming experience.

## 4. Learning Objectives

On completion, participants will be able to:

- Understand core Python fundamentals (variables, types, control flow, functions, OOP, generators).
- Read and modify existing automation scripts with confidence.
- Write clean, maintainable, reusable Python code following PEP 8.
- Automate Linux system administration tasks.
- Parse and process JSON, YAML, CSV, XML, and log files.
- Build command-line automation tools.
- Interact with REST APIs.
- Apply Object-Oriented Programming to infrastructure and security data models.
- Build a modular, multi-file automation toolkit as a capstone project.
- Enter follow-on tracks (IaC, CI/CD, cloud SDKs, security tooling) with a solid foundation.

## 5. Prerequisites

- Basic computer literacy (file systems, text editors).
- Basic Linux command-line familiarity (`cd`, `ls`, `cat`, `grep` at a conceptual level is helpful but not required).
- Python 3.10+ installed, or access to an online interpreter (e.g., replit.com) for early modules.
- No prior programming experience required.

## 6. Training Roadmap

| Phase | Modules | Estimated Duration |
|---|---|---|
| Foundations | Module 1 (Variables), Module 2 (Conditions) | 1 week |
| Control & Structure | Module 3 (Loops), Module 4 (Functions) | 1 week |
| Object-Oriented Design | Module 5 (OOP), Module 6 (Constructors) | 1 week |
| Advanced Fundamentals | Module 7 (Generators) | 3–4 days |
| Applied Practice | Hands-on Projects | 1–2 weeks |
| Evaluation | Assessments + Capstone | 1 week |

> **Note:** Durations assume a part-time (2–3 hrs/day) trainee pace alongside other onboarding activities. Adjust to your organization's schedule.

---

# Module 1 – Variables

### 1. Overview
Variables are named references to values held in memory. They are the basic vocabulary of every script — naming servers, IPs, thresholds, file paths, and configuration values.

### 2. Learning Outcomes
By the end of this module, trainees can declare variables of core types, understand Python's dynamic typing, follow naming conventions, convert between types, and produce formatted output.

### 3. Concepts
- Variables and assignment
- Primitive data types: `str`, `int`, `float`, `bool`
- Dynamic typing
- Naming conventions (`snake_case`)
- Multiple assignment
- Type conversion (casting)
- Type checking (`type()`, `isinstance()`)
- Constants (convention, not enforced)
- User input (`input()`)
- Output (`print()`, f-strings)

### 4. Syntax

```python
# Basic assignment
hostname = "web-server-01"
port = 8080
cpu_usage = 87.5
is_healthy = True

# Multiple assignment
env, region, tier = "prod", "us-east-1", "backend"

# Type conversion
port_str = "8080"
port_int = int(port_str)          # str -> int
usage_str = str(cpu_usage)        # float -> str

# Type checking
print(type(port))                 # <class 'int'>
print(isinstance(port, int))      # True

# Constants (convention: ALL_CAPS; Python does not enforce immutability)
MAX_RETRIES = 3
DEFAULT_TIMEOUT_SECONDS = 30

# f-strings
print(f"Host {hostname} is running on port {port}")
```

### 5. Explanation
- `hostname = "web-server-01"` creates a **string** — text always enclosed in quotes.
- `port = 8080` creates an **integer** — no quotes, since it needs to support arithmetic.
- `cpu_usage = 87.5` creates a **float** — any number with a decimal point.
- `is_healthy = True` creates a **boolean** — one of exactly two values, `True` or `False` (capitalized).
- Python does not require a type declaration; the type is inferred from the assigned value. This is called **dynamic typing** — the same name can be reassigned to a different type later, which is convenient but a common source of subtle bugs if not handled deliberately.
- `int()`, `float()`, `str()`, `bool()` convert between types. Conversion can fail at runtime (e.g., `int("abc")` raises `ValueError`) — always validate input from untrusted sources (config files, user input, APIs) before converting.
- f-strings (`f"..."`) embed variable values directly inside a string using `{}` — the modern, readable way to build formatted output, replacing older `%` formatting and `.format()`.

### 6. Best Practices
- Use descriptive `snake_case` names: `server_ip`, not `s` or `serverIP`.
- Treat `ALL_CAPS` names as constants — a signal to future readers (including yourself) that the value shouldn't change during execution.
- Never hardcode secrets (API tokens, passwords, keys) as string literals — use environment variables or a secrets manager (covered in Coding Standards, Section 15).
- Validate and convert external input explicitly rather than assuming type.

### 7. Common Mistakes

| Mistake | Why it's a problem | Fix |
|---|---|---|
| `Port = 8080` then using `port` elsewhere | Python is case-sensitive; `Port` and `port` are different variables | Be consistent with naming |
| `is_active = "True"` | This is a string, not a boolean — it's always "truthy" | Use `is_active = True` |
| Hardcoding `api_token = "sk-abc123..."` | Secrets committed to source control are a security incident | Use `os.environ.get("API_TOKEN")` |
| `port = "8080"` then `port + 1` | Raises `TypeError` — can't add int to str | Convert with `int(port)` first |

> **Warning:** Never commit hardcoded credentials, tokens, or keys to a script or repository, even temporarily "for testing." Treat every commit as permanent.

### 8. Real-World DevOps Examples

```python
server_name = "prod-web-01"
ip_address = "10.0.4.15"
environment = "production"
docker_image = "nginx:1.25-alpine"
k8s_namespace = "payments-prod"
aws_region = "ap-south-1"
log_path = "/var/log/nginx/access.log"

print(f"Deploying {docker_image} to namespace '{k8s_namespace}' in {aws_region}")
```

### 9. Real-World Security Examples

```python
username = "svc-monitoring"
target_domain = "internal.example.com"
firewall_port = 443
security_event_id = "SEC-20260806-0042"

# Secrets should never be hardcoded — read from environment instead
import os
api_token = os.environ.get("SECURITY_API_TOKEN")  # returns None if unset

print(f"Investigating event {security_event_id} for user {username}")
```

### 10. Hands-on Lab: System Inventory Report

**Objective:** Write a script that declares variables describing a server (hostname, IP, OS, environment, uptime in days) and prints a formatted inventory line using an f-string.

**Requirements:**
- At least one `str`, `int`, `float`, and `bool` variable.
- One type conversion demonstrated explicitly.
- Output formatted with an f-string.

**Expected Output (example):**
```
Inventory: web-server-01 | 10.0.4.15 | Ubuntu 22.04 | prod | Uptime: 42.5 days | Healthy: True
```

### 11. Practice Exercises
1. Declare variables for a Kubernetes pod: name, namespace, restart count, and a boolean `is_running`. Print them in one f-string.
2. Convert the string `"443"` to an integer and add `1` to it. Print the result and its type.
3. Identify and fix the bug: `retries = "3"` then `if retries > 2: print("too many")`.

### 12. Review Questions
1. What is the difference between `=` and `==`? *(preview of Module 2)*
2. Why shouldn't secrets be hardcoded as string literals?
3. What does `isinstance(x, int)` return if `x = "5"`?

### 13. Summary
Variables name and store values; Python infers their type dynamically. Naming conventions, explicit type conversion, and secure handling of sensitive values are foundational habits that carry into every later module.

---

# Module 2 – Conditions

### 1. Overview
Conditions let a script make decisions — the foundation of health checks, validation logic, and access control.

### 2. Learning Outcomes
Trainees can write single, chained, and nested conditionals, and use logical, membership, and identity operators correctly.

### 3. Concepts
- Boolean values and truthiness
- Comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical operators: `and`, `or`, `not`
- `if`, `if-else`, `if-elif-else`
- Nested conditionals
- Membership operators: `in`, `not in`
- Identity operators: `is`, `is not`
- Conditional expressions (ternary)

### 4. Syntax

```python
disk_usage_percent = 92

if disk_usage_percent >= 90:
    print("CRITICAL: Disk usage above 90%")
elif disk_usage_percent >= 75:
    print("WARNING: Disk usage above 75%")
else:
    print("OK: Disk usage normal")

# Logical operators
is_prod = True
is_healthy = False
if is_prod and not is_healthy:
    print("Paging on-call engineer")

# Membership
allowed_regions = ["us-east-1", "ap-south-1", "eu-west-1"]
region = "ap-south-1"
if region in allowed_regions:
    print("Region approved")

# Identity (compares object identity, not value — use cautiously)
status = None
if status is None:
    print("Status not set")

# Conditional expression (ternary)
health = "Healthy" if is_healthy else "Unhealthy"
```

### 5. Explanation
- `==` compares **values**; `is` compares **object identity** (whether two names point to the exact same object in memory). Use `==` for value comparisons (e.g., `status == "running"`); reserve `is` for singleton comparisons like `is None`, `is True`.
- `elif` chains let you check multiple mutually exclusive conditions in order — Python evaluates top to bottom and stops at the first `True` branch.
- `in` checks membership in a collection (list, string, dict keys) — far more readable than a manual loop with comparisons.
- The conditional expression `x if condition else y` is a compact one-line if-else, best used for simple value selection, not complex logic.

### 6. Best Practices
- Prefer `is None` / `is not None` over `== None`.
- Avoid deeply nested conditionals (more than 2–3 levels) — refactor into functions or early returns.
- Use membership (`in`) instead of chained `or` comparisons: `region in allowed_regions` beats `region == "a" or region == "b" or ...`.

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| `if status = "running":` | `=` is assignment, not comparison — syntax error | Use `==` |
| `if x == None:` | Works, but not idiomatic and can behave oddly with custom `__eq__` | Use `is None` |
| Deep nesting (4+ levels) | Hard to read and maintain | Flatten with `elif` or early `return` |

### 8. Real-World DevOps Examples

```python
def check_service_status(status: str) -> str:
    if status == "running":
        return "OK"
    elif status == "stopped":
        return "CRITICAL: service down"
    elif status == "restarting":
        return "WARNING: service restarting"
    else:
        return f"UNKNOWN status: {status}"

# Kubernetes namespace validation
valid_namespaces = ["default", "kube-system", "payments-prod", "payments-staging"]
namespace = "payments-prod"
if namespace not in valid_namespaces:
    print(f"ERROR: {namespace} is not a recognized namespace")
```

### 9. Real-World Security Examples

```python
def validate_password_policy(password: str) -> bool:
    has_min_length = len(password) >= 12
    has_digit = any(char.isdigit() for char in password)
    has_upper = any(char.isupper() for char in password)
    return has_min_length and has_digit and has_upper

failed_login_count = 6
if failed_login_count >= 5:
    print("ALERT: Possible brute-force attempt detected")
```

### 10. Hands-on Lab: Service Status Checker
Write a function that accepts a service status string and a CPU usage float, and returns a combined health verdict using nested/chained conditionals (e.g., `"CRITICAL"`, `"WARNING"`, `"OK"`).

### 11. Practice Exercises
1. Write a firewall rule validator: given a port number, return `"ALLOWED"` if it's in `[22, 80, 443]`, else `"BLOCKED"`.
2. Write a one-line conditional expression that sets `access = "granted"` if `role == "admin"` else `"denied"`.
3. Debug: `if cpu_usage = 95: print("high")` — identify and fix the error.

### 12. Review Questions
1. When should you use `is` instead of `==`?
2. What's wrong with 5 levels of nested `if` statements?
3. What does `"admin" in ["admin", "user"]` evaluate to?

### 13. Summary
Conditions drive decision-making in automation — health checks, access control, and validation all depend on correctly chosen comparison, logical, and membership operators.

---

# Module 3 – Loops

### 1. Overview
Loops let a script repeat an action across many items — servers, log lines, IPs, or files — without duplicating code.

### 2. Learning Outcomes
Trainees can write `for` and `while` loops, control flow with `break`/`continue`/`pass`, and iterate over lists, dictionaries, sets, and strings.

### 3. Concepts
- `for` loops and `range()`
- `while` loops
- `break`, `continue`, `pass`
- Nested loops
- Loop `else` clause
- Iterating over lists, dictionaries, sets, strings

### 4. Syntax

```python
servers = ["web-01", "web-02", "db-01"]

# for loop over a list
for server in servers:
    print(f"Checking {server}...")

# range()
for i in range(3):          # 0, 1, 2
    print(f"Retry attempt {i + 1}")

# while loop
retry_count = 0
max_retries = 3
while retry_count < max_retries:
    print(f"Attempt {retry_count + 1}")
    retry_count += 1

# break / continue
for server in servers:
    if server == "db-01":
        continue             # skip this iteration
    if server == "web-02":
        break                 # stop the loop entirely
    print(server)

# Iterating a dictionary
server_status = {"web-01": "running", "web-02": "stopped"}
for name, status in server_status.items():
    print(f"{name}: {status}")
```

### 5. Explanation
- `for item in collection:` iterates directly over items — the idiomatic Python approach, unlike index-based loops in other languages.
- `range(n)` generates numbers `0` to `n-1`; `range(start, stop, step)` allows more control.
- `while condition:` repeats as long as the condition is `True` — always ensure the condition eventually becomes `False`, or increment a counter, to avoid infinite loops.
- `break` exits the loop immediately; `continue` skips to the next iteration; `pass` is a no-op placeholder (useful for stub code).
- `dict.items()` yields `(key, value)` pairs, unpacked directly into two loop variables.

### 6. Best Practices
- Prefer `for item in collection` over manual index management.
- Use `enumerate()` when you need both index and value: `for i, server in enumerate(servers):`.
- Always guarantee `while` loops terminate — cap with a max iteration count when polling external systems.

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| `while retry_count < max_retries:` without incrementing `retry_count` | Infinite loop | Increment inside the loop |
| Using `break` where `continue` was intended | Skips remaining items entirely instead of just one | Check loop logic carefully |
| Modifying a list while iterating over it | Skips elements or raises errors | Iterate over a copy: `for x in list.copy():` |

### 8. Real-World DevOps Examples

```python
servers = ["web-01", "web-02", "web-03"]

for server in servers:
    print(f"Restarting service on {server}...")
    # restart_service(server) — placeholder for real automation call

# Reading an inventory file line by line
with open("inventory.txt") as f:
    for line in f:
        hostname = line.strip()
        if hostname:
            print(f"Host: {hostname}")
```

### 9. Real-World Security Examples

```python
failed_logins = ["10.0.0.5", "10.0.0.5", "192.168.1.9", "10.0.0.5"]
ip_counts = {}
for ip in failed_logins:
    ip_counts[ip] = ip_counts.get(ip, 0) + 1

for ip, count in ip_counts.items():
    if count >= 3:
        print(f"ALERT: {ip} had {count} failed login attempts")
```

### 10. Hands-on Lab: Inventory File Reader
Simulate a list of 10 servers with random statuses. Loop through them, and print a count of how many are `"running"` vs `"stopped"`, skipping any marked `"maintenance"` using `continue`.

### 11. Practice Exercises
1. Loop through a list of ports `[22, 80, 443, 3389, 8080]` and print `"BLOCKED"` for `3389`, `"ALLOWED"` for the rest.
2. Write a `while` loop simulating retrying an API call up to 5 times, stopping early with `break` if a simulated `success = True` occurs.
3. Given a dictionary of `{ip: failed_attempts}`, loop and print an alert for any IP with more than 4 attempts.

### 12. Review Questions
1. What's the difference between `break` and `continue`?
2. Why is modifying a list during iteration risky?
3. What does `range(2, 10, 2)` produce?

### 13. Summary
Loops are essential for operating across fleets of servers, log lines, and events — the vast majority of infrastructure and security scripts are, at their core, "loop over these things and do something."

---

# Module 4 – Functions

### 1. Overview
Functions package logic into reusable, named blocks — the building blocks of maintainable automation tooling.

### 2. Learning Outcomes
Trainees can define functions with parameters, default values, `*args`/`**kwargs`, understand scope, and write simple lambdas.

### 3. Concepts
- Function definition (`def`)
- Parameters vs. arguments
- Return values
- Default parameters
- Keyword arguments
- `*args` and `**kwargs`
- Variable scope (local vs. global)
- Lambda functions
- Basic recursion

### 4. Syntax

```python
def check_disk_space(hostname: str, threshold: int = 90) -> str:
    """Return a health verdict for a given disk usage threshold."""
    usage = get_disk_usage(hostname)   # hypothetical helper
    if usage >= threshold:
        return f"CRITICAL: {hostname} disk usage at {usage}%"
    return f"OK: {hostname} disk usage at {usage}%"

# Calling with default and keyword arguments
check_disk_space("web-01")
check_disk_space("web-02", threshold=80)

# *args and **kwargs
def restart_services(*service_names, **options):
    for name in service_names:
        print(f"Restarting {name} with options {options}")

restart_services("nginx", "redis", force=True, timeout=30)

# Lambda
square = lambda x: x * x
```

### 5. Explanation
- `def function_name(params) -> return_type:` defines a function; the `-> str` is an optional type hint documenting the expected return type (not enforced at runtime, but valuable documentation and tooling support).
- The docstring (`"""..."""`) immediately after `def` documents the function's purpose — used by IDEs, `help()`, and documentation generators.
- Default parameters (`threshold: int = 90`) let callers omit arguments and get sensible defaults.
- `*args` collects extra positional arguments into a tuple; `**kwargs` collects extra keyword arguments into a dictionary — both are common in flexible automation wrappers.
- Variables defined inside a function are **local** to it; they don't leak out. Reaching into global state from inside a function is possible via the `global` keyword but should be avoided — it makes code harder to reason about.
- `lambda` creates small, anonymous, single-expression functions — useful for short callbacks (e.g., as a `sort` key), not for complex logic.

### 6. Best Practices
- One function, one responsibility. If a function needs a comment to divide it into sections, it should probably be split.
- Use type hints for documentation and IDE support.
- Avoid mutable default arguments (`def f(items=[]):`) — this is a classic Python pitfall since the default list is shared across calls.
- Prefer explicit `return` values over relying on side effects/global state.

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| `def f(items=[]):` | Default list is shared/mutated across calls | Use `def f(items=None): items = items or []` |
| Forgetting `return` | Function returns `None` implicitly | Add explicit `return` |
| Overusing `global` | Makes state hard to trace | Pass values as parameters/return values instead |

### 8. Real-World DevOps Examples

```python
def validate_yaml(file_path: str) -> bool:
    import yaml
    try:
        with open(file_path) as f:
            yaml.safe_load(f)
        return True
    except yaml.YAMLError as e:
        print(f"Invalid YAML in {file_path}: {e}")
        return False

def monitor_cpu(hostname: str, threshold: float = 85.0) -> bool:
    usage = get_cpu_usage(hostname)   # hypothetical helper
    return usage < threshold
```

### 9. Real-World Security Examples

```python
def validate_ip(ip: str) -> bool:
    parts = ip.split(".")
    if len(parts) != 4:
        return False
    return all(part.isdigit() and 0 <= int(part) <= 255 for part in parts)

def search_logs(log_lines: list, keyword: str) -> list:
    return [line for line in log_lines if keyword in line]
```

### 10. Hands-on Lab: Reusable Automation Function Library
Build a small module with `check_disk_space()`, `validate_ip()`, and `search_logs()`, each with docstrings, type hints, and default parameters where appropriate.

### 11. Practice Exercises
1. Write `calculate_uptime_percentage(total_minutes, downtime_minutes)` with a default `downtime_minutes=0`.
2. Write a function using `*args` that accepts any number of server names and returns them as a formatted comma-separated string.
3. Identify why `def add_server(server, server_list=[])` is risky, and rewrite it safely.

### 12. Review Questions
1. What's the difference between a parameter and an argument?
2. Why is a mutable default argument dangerous?
3. When is a lambda appropriate vs. a full `def` function?

### 13. Summary
Functions are the unit of reuse in automation code — nearly every DevOps/security script matures from a flat sequence of statements into a set of well-named, testable functions.

---

# Module 5 – Object-Oriented Programming

### 1. Overview
OOP models real infrastructure and security entities (servers, alerts, users) as objects that bundle data and behavior together — essential for building larger automation frameworks and SDKs.

### 2. Learning Outcomes
Trainees can define classes, create objects, distinguish instance vs. class variables, and apply encapsulation, inheritance, and polymorphism.

### 3. Concepts
- Classes and objects
- Attributes and methods
- Instance variables vs. class variables
- Encapsulation
- Inheritance
- Method overriding
- Polymorphism
- Basic abstraction

### 4. Syntax

```python
class Server:
    environment_default = "dev"       # class variable — shared across instances

    def __init__(self, hostname: str, ip: str, environment: str = None):
        self.hostname = hostname                              # instance variable
        self.ip = ip
        self.environment = environment or self.environment_default
        self._status = "unknown"                               # "private" by convention

    def health_check(self) -> str:
        return f"{self.hostname} ({self.ip}) is {self._status}"

    def set_status(self, status: str):
        self._status = status


class CloudInstance(Server):                # inheritance
    def __init__(self, hostname, ip, instance_type, environment=None):
        super().__init__(hostname, ip, environment)
        self.instance_type = instance_type

    def health_check(self) -> str:          # method overriding
        base = super().health_check()
        return f"{base} [type={self.instance_type}]"


web01 = Server("web-01", "10.0.4.15")
cloud01 = CloudInstance("cloud-01", "10.0.4.20", "t3.medium")

for server in [web01, cloud01]:
    print(server.health_check())            # polymorphism: same call, different behavior
```

### 5. Explanation
- `class Server:` defines a blueprint; `web01 = Server(...)` creates an **instance** (object) from it.
- `__init__` is the constructor (fully covered in Module 6) — it runs automatically when an object is created, setting up instance variables via `self`.
- `self` refers to the specific instance the method is called on — it's how a method accesses that object's own data.
- A leading underscore (`self._status`) is a Python **convention** signaling "internal use" — Python doesn't enforce true private access like some languages, but this is the idiomatic form of encapsulation.
- `class CloudInstance(Server):` means `CloudInstance` **inherits** from `Server` — it gets all of `Server`'s attributes/methods and can add or override its own.
- `super().__init__(...)` calls the parent class's constructor, avoiding duplicated setup logic.
- Overriding `health_check()` in `CloudInstance` demonstrates **polymorphism** — calling `.health_check()` on a list of mixed `Server`/`CloudInstance` objects runs the correct version for each, automatically.

### 6. Best Practices
- Model real domain concepts as classes when your script needs to track multiple related pieces of state per entity (a server has many properties, not just one).
- Favor composition (an object *has* another object) over deep inheritance chains when relationships aren't strictly "is-a."
- Keep classes focused — a `Server` class shouldn't also handle Slack notifications.

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| Forgetting `self` as the first method parameter | `TypeError` on instantiation/calls | Always include `self` |
| Using a class when a simple function would do | Unnecessary complexity | Reach for OOP only when you have state + behavior together |
| Deep inheritance hierarchies (4+ levels) | Hard to trace behavior | Prefer flatter hierarchies or composition |

### 8. Real-World DevOps Examples

```python
class KubernetesCluster:
    def __init__(self, name: str, region: str, node_count: int):
        self.name = name
        self.region = region
        self.node_count = node_count
        self.pods = []

    def add_pod(self, pod_name: str):
        self.pods.append(pod_name)

    def summary(self) -> str:
        return f"Cluster {self.name} ({self.region}): {self.node_count} nodes, {len(self.pods)} pods"
```

### 9. Real-World Security Examples

```python
class SecurityAlert:
    def __init__(self, event_id: str, severity: str, source_ip: str):
        self.event_id = event_id
        self.severity = severity
        self.source_ip = source_ip
        self.acknowledged = False

    def acknowledge(self):
        self.acknowledged = True

    def summary(self) -> str:
        ack = "ACKNOWLEDGED" if self.acknowledged else "OPEN"
        return f"[{self.severity}] {self.event_id} from {self.source_ip} — {ack}"
```

### 10. Hands-on Lab: Infrastructure Object Model
Design a small class hierarchy: a base `Resource` class with `name` and `status`, and two subclasses, `Server` and `Container`, each adding their own attribute and overriding a `describe()` method.

### 11. Practice Exercises
1. Add a `FirewallRule` class with `port`, `protocol`, and `action` ("allow"/"deny"), and a method `is_risky()` returning `True` if the rule allows a well-known dangerous port (e.g., 23, 3389) inbound from anywhere.
2. Extend `SecurityAlert` with a subclass `CriticalAlert` that overrides `summary()` to prepend `"🚨 "`.
3. Explain, in your own words, the difference between a class variable and an instance variable, using the `Server` example above.

### 12. Review Questions
1. What does `super()` do?
2. Why does Python use a leading underscore instead of a true `private` keyword?
3. Give an example of polymorphism from your own infrastructure domain.

### 13. Summary
OOP lets automation tooling scale from single scripts into structured frameworks — this is the pattern used throughout cloud SDKs (boto3, Kubernetes client libraries) that trainees will use in follow-on tracks.

---

# Module 6 – Constructors

### 1. Overview
Constructors initialize an object's starting state the moment it's created — critical for ensuring every `Server`, `CloudInstance`, or `SecurityAlert` object begins in a valid, complete state.

### 2. Learning Outcomes
Trainees can write parameterized constructors, use `self` correctly, and chain constructors via `super()`.

### 3. Concepts
- `__init__()`
- Default constructor (implicit, if `__init__` is omitted)
- Parameterized constructor
- Constructor chaining (`super().__init__()`)
- The `self` keyword
- Object initialization patterns

### 4. Syntax

```python
class FirewallRule:
    def __init__(self, port: int, protocol: str = "tcp", action: str = "deny"):
        self.port = port
        self.protocol = protocol
        self.action = action
        self.created_at = "2026-08-06"   # in real code, use datetime.now()

rule1 = FirewallRule(port=22, protocol="tcp", action="allow")
rule2 = FirewallRule(port=3389)           # uses defaults: tcp, deny
```

### 5. Explanation
- `__init__` runs automatically the instant `FirewallRule(...)` is called — there is no separate "create then initialize" step in normal usage.
- Parameters in `__init__` (beyond `self`) become the arguments callers supply when creating the object.
- Default values in the constructor (`protocol: str = "tcp"`) work exactly like default function parameters (Module 4).
- Constructor chaining via `super().__init__(...)` (seen in Module 5's `CloudInstance`) lets a subclass reuse the parent's initialization logic instead of duplicating it.

### 6. Best Practices
- Initialize **all** instance variables in `__init__` — don't let an object exist in a partially-initialized state.
- Validate constructor inputs when they represent security- or infra-critical values (e.g., reject a `FirewallRule` with a negative port number).

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| Setting attributes outside `__init__` inconsistently | Some objects have the attribute, others don't | Always initialize in `__init__` |
| Forgetting `super().__init__()` in a subclass | Parent attributes never get set | Call it explicitly as the first line |

### 8–9. DevOps & Security Examples

```python
class CloudInstance:
    def __init__(self, instance_id: str, instance_type: str, region: str, tags: dict = None):
        self.instance_id = instance_id
        self.instance_type = instance_type
        self.region = region
        self.tags = tags or {}          # avoid mutable default pitfall (Module 4)

class User:
    def __init__(self, username: str, role: str = "read-only"):
        if role not in ("admin", "read-only", "operator"):
            raise ValueError(f"Invalid role: {role}")
        self.username = username
        self.role = role
```

### 10. Hands-on Lab
Write a `MonitoringAlert` class whose constructor validates that `severity` is one of `["low", "medium", "high", "critical"]`, raising a `ValueError` otherwise.

### 11. Practice Exercises
1. Write a `VirtualMachine` constructor that defaults `cpu_cores=2` and `memory_gb=4` if not provided.
2. Add input validation to `FirewallRule.__init__` so `port` must be between 1 and 65535.
3. Explain why constructor chaining avoids code duplication, using the `CloudInstance`/`Server` example from Module 5.

### 12. Review Questions
1. What happens if you forget to call `super().__init__()` in a subclass constructor?
2. Why validate inputs inside a constructor rather than after object creation?

### 13. Summary
Constructors guarantee every object starts life fully and correctly initialized — a small discipline that prevents entire classes of runtime bugs in larger automation systems.

---

# Module 7 – Generators

### 1. Overview
Generators produce values one at a time, on demand, instead of building an entire result in memory upfront — essential for processing large log files, SIEM event streams, or Kubernetes event feeds efficiently.

### 2. Learning Outcomes
Trainees understand the difference between iterators and generators, can write generator functions with `yield`, and understand when lazy evaluation matters operationally.

### 3. Concepts
- Iterators
- Generators
- `yield`
- Generator functions vs. generator expressions
- Lazy evaluation
- Memory optimization
- Iterator vs. generator (distinction)

### 4. Syntax

```python
def read_large_log(file_path: str):
    """Generator: yields one line at a time instead of loading the whole file."""
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# Usage — nothing is read into memory until you iterate
for line in read_large_log("app.log"):
    if "ERROR" in line:
        print(line)

# Generator expression (like a list comprehension, but lazy)
error_lines = (line for line in read_large_log("app.log") if "ERROR" in line)
```

### 5. Explanation
- A normal function returns once; a **generator function** (any function containing `yield`) returns a generator object that produces values lazily, pausing at each `yield` and resuming on the next request.
- `read_large_log()` never loads the entire file into memory — even a 10 GB log file is processed one line at a time, using near-constant memory.
- A generator **expression** `(x for x in ... if ...)` behaves like a list comprehension `[x for x in ...]` but produces items lazily instead of building the full list upfront — replace `()` with `[]` and you'd force everything into memory immediately.
- All generators are iterators, but not all iterators are generators — a generator is simply the easiest way to build one, using `yield` instead of manually implementing `__iter__`/`__next__`.

### 6. Best Practices
- Use generators whenever processing large or unbounded data (log files, streaming API responses, SIEM feeds) — this is standard practice for production log/event processing.
- Reserve regular lists for small, fully-known collections you need to access repeatedly or by index (generators can only be iterated once).

### 7. Common Mistakes

| Mistake | Problem | Fix |
|---|---|---|
| Iterating a generator twice | Second iteration yields nothing — generators are exhausted after one pass | Re-create the generator, or convert to a list if reuse is needed |
| Loading an entire multi-GB log with `.readlines()` | Can exhaust available memory | Use a generator (`for line in file:`) instead |

### 8. Real-World DevOps Examples

```python
def stream_k8s_events(events_source):
    """Yields Kubernetes events one at a time from a (hypothetical) event stream."""
    for event in events_source:
        yield event

def tail_deployment_log(file_path: str):
    for line in read_large_log(file_path):
        if "deployment" in line.lower():
            yield line
```

### 9. Real-World Security Examples

```python
def stream_siem_events(file_path: str):
    for line in read_large_log(file_path):
        yield line

def find_failed_logins(file_path: str):
    for line in stream_siem_events(file_path):
        if "FAILED_LOGIN" in line:
            yield line

# Efficiently process a large audit log without loading it all into memory
for failed_attempt in find_failed_logins("audit.log"):
    print(f"Failed login: {failed_attempt}")
```

### 10. Hands-on Lab: Streaming Log Analyzer
Write a generator `parse_audit_log(file_path)` that yields only lines containing `"ALERT"`, then a second generator `extract_ips(alert_lines)` that yields just the IP address from each alert line — chaining two generators together.

### 11. Practice Exercises
1. Write a generator that yields squares of numbers from 1 to n, and explain why it's more memory-efficient than building a list for very large n.
2. Convert this list comprehension into a generator expression: `[line for line in open("app.log") if "WARN" in line]`.
3. Explain why iterating the same generator object twice in a row produces no output the second time.

### 12. Review Questions
1. What keyword turns a regular function into a generator function?
2. Why are generators preferred over lists for streaming SIEM/log data?
3. Can a generator be indexed like a list (e.g., `gen[3]`)? Why or why not?

### 13. Summary
Generators are the production-grade pattern for processing large or continuous data streams — log files, SIEM events, Kubernetes event feeds — without exhausting memory, and are a common building block in observability and security tooling.

---

## 14. Hands-on Projects

Each project below should be delivered with: **Objectives, Requirements, Expected Output, Suggested Enhancements.**

### 14.1 Linux System Information Collector
- **Objectives:** Collect and report hostname, OS version, uptime, and disk usage using Python's `platform`, `os`, and `shutil` modules.
- **Requirements:** Use variables, f-strings, and at least one function.
- **Expected Output:** A formatted text report of system information.
- **Enhancements:** Export the report as JSON.

### 14.2 Service Health Monitor
- **Objectives:** Simulate checking a list of services and report status using conditions.
- **Requirements:** Use a dictionary of `{service: status}`, loop through it, apply conditional logic.
- **Expected Output:** A pass/fail report per service.
- **Enhancements:** Add severity levels and a summary count.

### 14.3 Log File Analyzer
- **Objectives:** Parse a sample log file and count occurrences of `ERROR`, `WARN`, `INFO`.
- **Requirements:** Use a generator to read the file line by line.
- **Expected Output:** A count summary per log level.
- **Enhancements:** Extract and rank the top 5 most frequent error messages.

### 14.4 Password Strength Validator
- **Objectives:** Validate a password against a policy (length, digit, uppercase, special character).
- **Requirements:** Use functions and conditions from Modules 2 and 4.
- **Expected Output:** `"STRONG"`, `"MODERATE"`, or `"WEAK"` verdict with reasons.
- **Enhancements:** Support a configurable policy via a dictionary.

### 14.5 Configuration File Validator
- **Objectives:** Validate a YAML or JSON config file against required keys.
- **Requirements:** Use the `yaml` or `json` module, functions, and error handling.
- **Expected Output:** List of missing/invalid keys, or "Valid" confirmation.
- **Enhancements:** Validate value types, not just key presence.

### 14.6 Backup Automation Script
- **Objectives:** Copy files from a source directory to a timestamped backup directory.
- **Requirements:** Use `os`/`shutil`, functions, loops.
- **Expected Output:** Confirmation log of files backed up.
- **Enhancements:** Add retention logic to delete backups older than N days.

### 14.7 Docker Container Status Reporter
- **Objectives:** Given mock container data (list of dicts), report running/stopped counts.
- **Requirements:** Loops, conditions, an OOP `Container` class (optional).
- **Expected Output:** Summary table of container statuses.
- **Enhancements:** Flag containers restarting more than N times.

### 14.8 Kubernetes Resource Reporter
- **Objectives:** Given mock pod/node data, summarize resource usage per namespace.
- **Requirements:** Dictionaries, loops, OOP.
- **Expected Output:** Per-namespace summary report.
- **Enhancements:** Highlight namespaces exceeding a resource threshold.

### 14.9 Security Event Parser
- **Objectives:** Parse mock security event log lines and classify by severity.
- **Requirements:** Generators, functions, OOP `SecurityEvent` class.
- **Expected Output:** Classified event report.
- **Enhancements:** Detect repeated source IPs (potential brute force).

### 14.10 File Integrity Checker (Hash Verification)
- **Objectives:** Compute and compare file hashes (using `hashlib`) to detect changes.
- **Requirements:** Functions, file I/O, dictionary to store known-good hashes.
- **Expected Output:** Report of unchanged/modified/new files.
- **Enhancements:** Persist known hashes to a JSON file between runs.

### 14.11 REST API Client
- **Objectives:** Fetch data from a public test API (e.g., a mock/status endpoint) using `requests`.
- **Requirements:** Functions, error handling, JSON parsing.
- **Expected Output:** Parsed and formatted API response.
- **Enhancements:** Add retry logic with exponential backoff.

### 14.12 Server Inventory Manager
- **Objectives:** Build a small OOP-based CLI tool to add, list, and remove servers from an in-memory inventory.
- **Requirements:** Classes, functions, loops, conditions — a synthesis project.
- **Expected Output:** Interactive CLI session managing a server list.
- **Enhancements:** Persist inventory to a JSON file between runs.

---

## 15. Coding Standards

### 15.1 PEP 8
Follow [PEP 8](https://peps.python.org/pep-0008/) — Python's official style guide: 4-space indentation, `snake_case` for variables/functions, `PascalCase` for classes, `UPPER_CASE` for constants, max ~79–99 character line length.

### 15.2 Naming Conventions
| Element | Convention | Example |
|---|---|---|
| Variable / function | `snake_case` | `check_disk_space` |
| Class | `PascalCase` | `SecurityAlert` |
| Constant | `UPPER_SNAKE_CASE` | `MAX_RETRIES` |
| "Private" attribute | leading underscore | `_status` |

### 15.3 Documentation (Docstrings)
Every function/class should have a docstring explaining purpose, parameters, and return value.

```python
def check_disk_space(hostname: str, threshold: int = 90) -> str:
    """
    Check disk usage on a host and return a health verdict.

    Args:
        hostname: Target host to check.
        threshold: Usage percentage that triggers a CRITICAL verdict.

    Returns:
        A human-readable status string.
    """
```

### 15.4 Logging Best Practices
Use the `logging` module instead of `print()` in production scripts — it supports log levels, timestamps, and output routing.

```python
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info("Starting health check")
logger.warning("Disk usage above 75%%")
logger.error("Service unreachable")
```

### 15.5 Exception Handling
```python
try:
    with open(config_path) as f:
        config = yaml.safe_load(f)
except FileNotFoundError:
    logger.error(f"Config file not found: {config_path}")
except yaml.YAMLError as e:
    logger.error(f"Invalid YAML: {e}")
```

> **Tip:** Catch specific exceptions, not a bare `except:` — a bare except hides real bugs and can silently swallow `KeyboardInterrupt`/`SystemExit`.

### 15.6 Input Validation
Always validate external input (config values, API responses, user input, environment variables) before use — never assume shape or type.

### 15.7 Modular Programming
Split code into logical modules (`.py` files) as scripts grow — e.g., `inventory.py`, `health_checks.py`, `report.py` — rather than one large monolithic file.

### 15.8 Secure Coding Practices
- Never hardcode credentials, tokens, or keys.
- Use environment variables or a secrets manager (e.g., `os.environ`, HashiCorp Vault, AWS Secrets Manager, Azure Key Vault).
- Validate and sanitize any input used to construct shell commands or file paths.

```python
import os
db_password = os.environ.get("DB_PASSWORD")
if db_password is None:
    raise EnvironmentError("DB_PASSWORD environment variable is not set")
```

> **Warning:** Avoid constructing shell commands via string concatenation with untrusted input — this can introduce command injection vulnerabilities. Prefer `subprocess.run([...])` with a list of arguments over `shell=True` with string interpolation.

### 15.9 Writing Maintainable Code
- Small, single-purpose functions.
- Consistent naming.
- Comments that explain *why*, not *what* (the code itself should show *what*).

---

## 16. Assessments

### 16.1 Multiple-Choice Questions
1. What does `type(3.14)` return?
   a) `int` b) `float` c) `str` d) `bool`
2. Which operator checks value equality?
   a) `is` b) `=` c) `==` d) `equals()`
3. What does `break` do inside a loop?
   a) Skips to next iteration b) Exits the loop entirely c) Raises an error d) Restarts the loop
4. Which keyword makes a function a generator?
   a) `return` b) `yield` c) `gen` d) `lazy`
5. What is `self` used for in a class method?
   a) A global variable b) Refers to the current instance c) A reserved keyword for constants d) A type hint

### 16.2 Short-Answer Questions
1. Explain the difference between a list and a generator in terms of memory usage.
2. What is the purpose of `__init__` in a class?
3. Why should credentials never be hardcoded in source code?

### 16.3 Debugging Exercises
```python
# Bug 1
def get_status(code)
    if code = 200:
        return "OK"

# Bug 2
def add_tag(tags=[]):
    tags.append("new")
    return tags
```
Identify and fix the errors in each snippet.

### 16.4 Coding Assignments
1. Write a function `classify_cpu_usage(usage: float) -> str` returning `"LOW"`, `"MODERATE"`, or `"HIGH"`.
2. Write a `LogEntry` class with `timestamp`, `level`, and `message` attributes, and a `format()` method.

### 16.5 Scenario-Based Questions
> A production alert shows 200 failed SSH login attempts from a single IP within 5 minutes. Write pseudocode (or real Python) describing how you'd detect and flag this using a generator over a streaming log source.

### 16.6 Practical Lab Evaluation Checklist
- [ ] Code follows PEP 8 naming conventions
- [ ] Functions include docstrings
- [ ] No hardcoded secrets
- [ ] Appropriate use of exception handling
- [ ] Logic is correct against test cases

### 16.7 Answer Key (Multiple-Choice)
1. b) `float`
2. c) `==`
3. b) Exits the loop entirely
4. b) `yield`
5. b) Refers to the current instance

---

## 17. Final Capstone Project: Infrastructure Monitoring & Security Automation Toolkit

### 17.1 Objective
Build a modular, multi-file Python toolkit that combines every concept from Modules 1–7 into a single working system for infrastructure health monitoring and basic security event analysis.

### 17.2 Architecture

```
toolkit/
├── main.py                # entry point, orchestrates the run
├── config.py               # loads YAML/JSON configuration
├── models.py                # OOP classes: Server, SecurityEvent, Alert
├── health_checks.py         # disk/CPU/service checks (functions)
├── log_analysis.py          # generators for streaming log/event parsing
├── report.py                 # report generation (text/JSON output)
└── config.yaml                # sample configuration file
```

### 17.3 Required Components
- **Configuration management:** Load thresholds and target hosts from a YAML/JSON config file.
- **Log analysis:** Use a generator to stream a sample log file and extract errors/security events.
- **System health checks:** Functions evaluating disk, CPU, and service status against configured thresholds.
- **Report generation:** Produce a structured JSON and human-readable text report.
- **Classes and objects:** Model `Server`, `SecurityEvent`, and `Alert` as classes with appropriate encapsulation and at least one inheritance relationship.
- **Control flow:** Loops and conditions throughout.
- **Exception handling:** Gracefully handle missing files, invalid config, and malformed log lines.

### 17.4 Deliverables
- Complete, runnable source code across the module structure above.
- Sample `config.yaml` and sample log file.
- A generated sample report (text and JSON).
- A short `README.md` explaining how to run the toolkit.

### 17.5 Evaluation Criteria

| Criterion | Weight |
|---|---|
| Correctness (toolkit runs and produces accurate output) | 30% |
| Code quality (PEP 8, naming, docstrings) | 20% |
| Appropriate use of OOP | 15% |
| Appropriate use of generators for log processing | 15% |
| Error handling and input validation | 10% |
| Security practices (no hardcoded secrets, input validation) | 10% |

### 17.6 Extension Ideas
- Add email/Slack notification for critical alerts.
- Add a CLI with `argparse` for configurable runs.
- Add unit tests with `pytest`.
- Extend to fetch live data from a REST API instead of mock data.

---

## 18. References

- Python official documentation: https://docs.python.org/3/
- PEP 8 – Style Guide for Python Code: https://peps.python.org/pep-0008/
- Python `logging` module documentation
- Python `yaml` (PyYAML) and `json` module documentation
- Organization-internal DevOps/Security tooling documentation (link internally as applicable)

## 19. Appendix

### 19.1 Glossary

| Term | Definition |
|---|---|
| Variable | A named reference to a value in memory |
| Dynamic typing | Type is inferred at runtime and can change |
| Generator | A function that yields values lazily, one at a time |
| Constructor | Special method (`__init__`) that initializes a new object |
| Encapsulation | Bundling data and behavior, restricting direct external access |
| Inheritance | A class acquiring attributes/methods from a parent class |
| Polymorphism | Same method call producing different behavior depending on the object's type |

### 19.2 Environment Setup Quick Reference

```bash
# Check Python version
python3 --version

# Create a virtual environment
python3 -m venv venv
source venv/bin/activate       # Linux/Mac

# Install common packages used in this manual
pip install pyyaml requests
```

### 19.3 Suggested Follow-On Tracks
- Infrastructure as Code: Terraform + Python tooling
- Configuration Management: Ansible fundamentals
- Containers & Orchestration: Docker, Kubernetes client libraries
- CI/CD: GitHub Actions / Jenkins pipeline scripting
- Cloud SDKs: `boto3` (AWS), Azure SDK for Python
- Security Automation: SIEM API integration, automated vulnerability scanning

---

*End of Document*
