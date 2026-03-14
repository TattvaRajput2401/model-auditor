import re

SECRET_PATTERN = r"(sk-[A-Za-z0-9]+|api_key)"

def check_policies(response: str):

    issues = []

    if re.search(SECRET_PATTERN, response):
        issues.append("possible_secret_leak")

    if "ignore previous instructions" in response.lower():
        issues.append("prompt_injection")

    return issues